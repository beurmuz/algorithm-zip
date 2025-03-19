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
function bfs() {
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
bfs();

console.log(visited[n - 1][m - 1] ? 1 : 0); // 도착지점에 방문했는지를 검사하면 된다.

// ----------------------------------------------------------------------
/**
 * 🔍 갈 수 있는 곳들 | O | 25.03.18 🔍
 */
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const grid = input.slice(1, n + 1).map((line) => line.split(" ").map(Number));
const startPoints = input
  .slice(n + 1)
  .map((line) => line.split(" ").map(Number));
const visited = Array.from({ length: n }, () => Array(n).fill(0));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

// 0: 이동 가능한 칸, 1: 이동 불가능한 칸
let queue = [];
function bfs() {
  while (queue.length > 0) {
    let [x, y] = queue.shift();

    // 총 4방향으로 갈 수 있다. (단, 조건에 성립해야만 갈수있음)
    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];

      if (
        0 <= nx &&
        nx < n &&
        0 <= ny &&
        ny < n &&
        !visited[nx][ny] &&
        grid[nx][ny] === 0
      ) {
        visited[nx][ny] = 1;
        queue.push([nx, ny]);
      }
    }
  }
}

startPoints.forEach(([x, y]) => {
  visited[x - 1][y - 1] = 1;
  queue.push([x - 1, y - 1]);
  bfs();
});

let answer = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (visited[i][j] > 0) answer++;
  }
}

console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️K번 최댓값으로 이동하기⭐️ | X | 25.03.19 🔍
 * - 이해하지 못했다!
 */
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const grid = input.slice(1, 1 + n).map((line) => line.split(" ").map(Number));
let [r, c] = input[1 + n].split(" ").map(Number);
// 배열 인덱스는 0부터 시작하므로 r-1, c-1해주기
r--;
c--;

const visited = Array.from({ length: n }, () => Array(n).fill(0));
// 상하좌우
const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function inRange(x, y) {
  return 0 <= x && x < n && 0 <= y && y < n;
}

function bfs(x, y) {
  // visited 배열 초기화
  for (let i = 0; i < n; i++) visited[i].fill(0);

  // queue에 시작점을 추가한 후, 방문 표시
  let queue = [[x, y]];
  visited[x][y] = 1;

  // 최댓값과 최대값의 위치를 기록한다.
  let maxVal = -1;
  let maxPos = [-1, -1];

  while (queue.length) {
    // 현재 위치를 뽑아준 후
    const [cx, cy] = queue.shift();

    // 현재 위치와 인접한 4방향을 탐색한다.
    for (const [dx, dy] of directions) {
      let nx = cx + dx;
      let ny = cy + dy;

      if (inRange(nx, ny) && !visited[nx][ny] && grid[nx][ny] < grid[x][y]) {
        // 시작점에 있는 값보다 작은 값일때만 OK
        visited[nx][ny] = 1;
        queue.push([nx, ny]);

        // 최대값 찾기
        // - grid[nx][ny]가 최댓값보다 크거나, 최댓값과 같고 행이 더 작거나 열이 더 작은 경우, 최댓값에 대한 정보를 갱신한다.
        if (
          grid[nx][ny] > maxVal ||
          (grid[nx][ny] === maxVal &&
            (nx < maxPos[0] || (nx === maxPos[0] && ny < maxPos[1])))
        ) {
          maxVal = grid[nx][ny];
          maxPos = [nx, ny];
        }
      }
    }
  }
  return maxVal === -1 ? null : maxPos;
}

// 현재 위치
let currentPos = [r, c];

for (let move = 0; move < k; move++) {
  const nextPos = bfs(currentPos[0], currentPos[1]);

  // nextPos가 없다면 바로 종료한다.
  if (!nextPos) {
    console.log(currentPos[0] + 1, currentPos[1] + 1);
    process.exit();
  }

  currentPos = nextPos;
}

// k번 이동을 모두 수행한 후에도 출력
console.log(currentPos[0] + 1, currentPos[1] + 1);
