// ----------------------------------------------------------------------
/**
 * 🔍 네 방향 탈출 가능 여부 판별하기 | △ | 25.03.18 🔍
 * - 맞았지만 다시한번 더 풀어보기!
 */
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const grid = input.slice(1, n + 1).map((line) => line.split(" ").map(Number));
const visited = Array.from({ length: n }, () => Array(m).fill(0));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

// 뱀이 없는 경우: 1, 있는 경우: 0
// 시작점: (0, 0);

function canGo(x, y) {
  if (0 <= x && x < n && 0 <= y && y < m) {
    if (!visited[x][y] && grid[x][y]) return true;
  }
  return false;
}

let queue = [];
function bfs(x, y) {
  while (queue.length > 0) {
    let [nowX, nowY] = queue.shift();

    // 현재 지점에서 갈 수 있는 곳은 조건에 부합하는 4방향 중 어느것이다.
    for (let k = 0; k < 4; k++) {
      let nextX = nowX + dx[k];
      let nextY = nowY + dy[k];

      if (canGo(nextX, nextY)) {
        visited[nextX][nextY] = 1; // 방문 표시
        queue.push([nextX, nextY]);
      }
    }
  }
}
queue.push([0, 0]);
visited[0][0] = 1;
bfs(0, 0);

console.log(visited[n - 1][m - 1] ? 1 : 0); // 도착지점에 방문했는지를 검사하면 된다.
