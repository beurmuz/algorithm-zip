/**
 * 정확성과 효율성 테스트가 있기 때문에, 중복되는 작업을 어떻게 줄일지에 대해 많이 고민해보아야한다.
 *
 * 특히 col마다 시추축을 넣어 석유 덩어리를 찾을 때마다 dfs로 덩어리를 해야할지, 각 덩어리를 어떻게 고유하게 처리해주어야 할지 등을 충분히 고려해야한다!
 * -> 이를 해결하는 방법으로 oilIdMap을 만들어 덩어리마다 고유 번호를 가지게끔 만들고, 애초에 2차원 배열을 선언할 때 '-1'을 넣어둔 후
 *    인덱스 값으로 각 id에 따른 석유 덩어리들의 크기를 1차원 배열 (oilSizes)에 저장해두면 된다.
 */

function solution(land) {
  const n = land.length; // 세로
  const m = land[0].length; // 가로
  const visited = Array.from({ length: n }, () => Array(m).fill(0));
  const oilIdMap = Array.from({ length: n }, () => Array(m).fill(-1));
  const oilSizes = []; // idx를 id로 보고 각 석유 덩어리의 크기를 저장
  let id = 0;

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  function dfs(x, y) {
    let size = 1;
    const stack = [[x, y]];
    visited[x][y] = 1;
    oilIdMap[x][y] = id; // 석유 덩어리마다 고유의 id번호 붙이기

    while (stack.length) {
      const [cx, cy] = stack.pop();

      for (let k = 0; k < 4; k++) {
        let nx = cx + dx[k];
        let ny = cy + dy[k];

        if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
        if (land[nx][ny] === 1 && !visited[nx][ny]) {
          visited[nx][ny] = 1;
          oilIdMap[nx][ny] = id;
          size++;
          stack.push([nx, ny]);
        }
      }
    }
    oilSizes[id++] = size;
  }

  // 모든 칸을 순회하며 석유 덩어리 찾기
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (land[i][j] === 1 && !visited[i][j]) dfs(i, j);
    }
  }

  // 열별로 시추관을 설치해 지나치는 덩어리를 집합으로 모으기
  let maxOil = 0;

  for (let col = 0; col < m; col++) {
    const nowOil = new Set();
    let total = 0;

    for (let row = 0; row < n; row++) {
      const id = oilIdMap[row][col];
      if (id !== -1 && !nowOil.has(id)) {
        nowOil.add(id);
        total += oilSizes[id];
      }
    }
    maxOil = Math.max(maxOil, total);
  }
  return maxOil;
}
