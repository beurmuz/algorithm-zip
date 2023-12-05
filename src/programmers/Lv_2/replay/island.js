/**
 * [dfs, 깊이우선탐색]
 * - 상하좌우로 연결된 모든 지점을 탐색하여 최대 머물 수 있는 기간을 계산해야하므로 dfs가 적절하다고 생각했다.
 */

function solution(maps) {
  let grid = maps.map((line) => line.split(""));
  let answer = []; // 머물 수 있는 날짜 수의 집합
  let [row, col] = [maps.length, maps[0].length];
  let dx = [-1, 1, 0, 0]; // 상하좌우
  let dy = [0, 0, -1, 1];
  let sum = 0;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] !== "X") {
        sum = 0;
        dfs(i, j);
        answer.push(sum);
      }
    }
  }

  // 연결된 모든 지점을 찾을 때까지 탐색해야하므로 if문으로 탈출 조건을 작성할 필요가 없다.
  function dfs(x, y) {
    sum += grid[x][y] * 1;
    grid[x][y] = "X";

    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];

      if (nx >= 0 && ny >= 0 && nx < row && ny < col) {
        if (grid[nx][ny] !== "X") dfs(nx, ny);
      }
    }
  }
  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}
