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
