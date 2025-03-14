// ----------------------------------------------------------------------
/**
 * 🔍 그래프 탐색 | O | 25.03.13 🔍
 */
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const edges = [];
for (let i = 1; i <= m; i++) {
  edges.push(input[i].split(" ").map(Number));
}

const graph = Array.from({ length: n + 1 }, () => []);
edges.forEach(([s, e]) => {
  graph[s].push(e);
  graph[e].push(s);
});

const visited = Array.from({ length: n + 1 }, () => 0);

let answer = 0;

function dfs(v) {
  graph[v].forEach((currentV) => {
    if (!visited[currentV]) {
      visited[currentV] = 1;
      dfs(currentV);
    }
  });
}

visited[1] = 1;
dfs(1); // 1번 정점에서 시작한다.

// 1번 정점 자기 자신에 도달하는 경우는 가지수에서 제외한다.
console.log(visited.reduce((acc, v) => acc + v, 0) - 1);

// ----------------------------------------------------------------------
/**
 * 🔍 두 방향 탈출 가능 여부 판별하기 | O | 25.03.14 🔍
 */
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const grid = input.slice(1, n + 1).map((row) => row.split(" ").map(Number));

const visited = Array.from({ length: n }, () => Array(m).fill(0));
const dx = [1, 0];
const dy = [0, 1];

function inRange(x, y) {
  return 0 <= x && x < n && 0 <= y && y < m;
}

function canGo(x, y) {
  if (!inRange(x, y)) return false;
  if (visited[x][y] || grid[x][y] === 0) return false;
  return true;
}

function dfs(x, y) {
  for (let k = 0; k < 2; k++) {
    let nx = x + dx[k];
    let ny = y + dy[k];

    if (canGo(nx, ny)) {
      visited[nx][ny] = 1;
      dfs(nx, ny);
    }
  }
}
dfs(0, 0);

console.log(visited[n - 1][m - 1]);

// ----------------------------------------------------------------------
/**
 * 🔍 마을 구분하기 | O | 25.03.14 🔍
 */
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map((line) => line.split(" ").map(Number));
const visited = Array.from({ length: n }, () => Array(n).fill(0));

let peopleList = [];

function dfs(x, y) {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  for (let k = 0; k < 4; k++) {
    let nx = x + dx[k];
    let ny = y + dy[k];

    if (
      0 <= nx &&
      nx < n &&
      0 <= ny &&
      ny < n &&
      !visited[nx][ny] &&
      grid[nx][ny] === 1
    ) {
      visited[nx][ny] = 1;
      count += 1;
      dfs(nx, ny);
    }
  }
  return;
}

let count = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (grid[i][j] === 1 && !visited[i][j]) {
      count = 1;
      visited[i][j] = 1;
      dfs(i, j);
      peopleList.push(count);
    }
  }
}

console.log(peopleList.length);
peopleList.sort((a, b) => a - b).forEach((v) => console.log(v));

// ----------------------------------------------------------------------
/**
 * 🔍 안전 지대 | O | 25.03.15 🔍
 */
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const grid = input
  .slice(1, 1 + Number(n))
  .map((line) => line.split(" ").map(Number));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

// 격자 내 최댓값을 찾는다.
let maxHeight = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (grid[i][j] > maxHeight) maxHeight = grid[i][j];
  }
}

// DFS 탐색 함수
function dfs(x, y, k) {
  // 인접한 4방향 탐색
  for (let d = 0; d < 4; d++) {
    let nx = x + dx[d];
    let ny = y + dy[d];

    if (
      0 <= nx &&
      nx < n &&
      0 <= ny &&
      ny < m &&
      grid[nx][ny] > k &&
      !visited[nx][ny]
    ) {
      visited[nx][ny] = 1;
      dfs(nx, ny, k);
    }
  }
  return;
}

// k를 1씩 증가시키며 최대 안정영역의 수를 구한다.
let [answerK, answerMaxCount] = [1, 0];
let visited;

for (let k = 1; k <= maxHeight; k++) {
  visited = Array.from({ length: n }, () => Array(m).fill(0));
  let nowCount = 0;

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < m; y++) {
      if (grid[x][y] > k && !visited[x][y]) {
        dfs(x, y, k);
        nowCount += 1;

        if (nowCount > answerMaxCount) {
          answerMaxCount = nowCount;
          answerK = k;
        }
      }
    }
  }
}
console.log(answerK, answerMaxCount);

// ----------------------------------------------------------------------
/**
 * 🔍 뿌요뿌요 | O | 25.03.14 🔍
 */
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map((row) => row.split(" ").map(Number));
const visited = Array.from({ length: n }, () => Array(n).fill(0));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let maxBombs = 0; // 최대 블럭의 크기를 갱신해 저장하는 변수
let bombCount = 0; // 터지게 되는 블럭 수

function dfs(x, y, now) {
  // 인접한 칸 검사
  for (let k = 0; k < 4; k++) {
    let nx = x + dx[k];
    let ny = y + dy[k];

    if (
      0 <= nx &&
      nx < n &&
      0 <= ny &&
      ny < n &&
      grid[nx][ny] === now &&
      !visited[nx][ny]
    ) {
      sameCount += 1;
      visited[nx][ny] = 1;
      dfs(nx, ny, now);
    }
  }
  return;
}

let sameCount;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (!visited[i][j]) {
      visited[i][j] = 1;
      sameCount = 1;
      dfs(i, j, grid[i][j]);
      if (sameCount >= 4) bombCount++;
      maxBombs = Math.max(maxBombs, sameCount);
    }
  }
}

console.log(bombCount, maxBombs);
