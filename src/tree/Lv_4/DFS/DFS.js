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
