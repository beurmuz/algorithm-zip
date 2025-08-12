/**
 * 시작점 -> 레버 -> 출구
 * 최단 거리 (최단 시간) -> BFS
 *
 * queue.length로 거리를 계산하려했던 점, visited를 초기화하지 않고 bfs를 다시 실행했던 점 때문에 모든 테케를 통과하지 못했었다.
 * => 해결방법으로 queue에 dist를 함께 넣어 출력했고, visited는 bfs 내부에서 생성되도록 바꿔주었다.
 */

function solution(maps) {
  let n = maps.length;
  let m = maps[0].length;

  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  // BFS 함수
  function bfs(startX, startY, targetX, targetY) {
    let queue = [[startX, startY, 0]];
    let visited = Array.from({ length: n }, () =>
      Array.from({ length: m }).fill(0)
    );
    visited[startX][startY] = 1;
    let queueIdx = 0;

    while (queueIdx !== queue.length) {
      let [x, y, dist] = queue[queueIdx++];

      if (x === targetX && y === targetY) return dist;

      for (let k = 0; k < 4; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];

        if (
          0 <= nx &&
          nx < n &&
          0 <= ny &&
          ny < m &&
          maps[nx][ny] !== "X" &&
          !visited[nx][ny]
        ) {
          visited[nx][ny] = 1;
          queue.push([nx, ny, dist + 1]);
        }
      }
    }
    return -1; // 목적지에 도달할 수 없음
  }

  // 1. 각 위치 찾기
  let [si, sj] = [0, 0];
  let [ei, ej] = [0, 0];
  let [li, lj] = [0, 0];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (maps[i][j] === "S") [si, sj] = [i, j];
      else if (maps[i][j] === "E") [ei, ej] = [i, j];
      else if (maps[i][j] === "L") [li, lj] = [i, j];
    }
  }

  // 2. S->L, L->E 구간의 길이 구하기
  let toLever = bfs(si, sj, li, lj); // S -> L
  let toExit = bfs(li, lj, ei, ej); // L -> E

  // 3. 두 구간 중 하나라도 -1이면 -1, 아니라면 두 구간의 합을 return
  if (toLever === -1 || toExit === -1) return -1;
  else return toLever + toExit;
}
