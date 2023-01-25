"use strict";

/**
 * 원래 풀이와 다른 풀이
 * - 각 정점에서 시작해 DFS로 갈 수 있는 모든 칸을 방문하고, 방문이 가능한지의 여부를 인접행렬 형태로 출력한다.
 * - DFS로 탐색하면서 노드(i) 별로 노드(j)를 방문할 때마다 answer[i][j]를 1로 만들어준다.
 * - 🚨 여기서 answer[i][i] (j === i)인 경우는 항상 1이 아니라, 다른 정점을 통해 정점 i를 방문할 수 있는 경우를 의미한다.
 *  - (이로인해 23번 줄에서 방문 여부를 표현한 것)
 */
const [n, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (n, inputs) => {
  const graph = inputs.map((v) => v.split(" ").map(Number));
  const answer = Array.from({ length: n }, () => Array(n).fill(0));

  const dfs = (node, start, visited) => {
    for (let i = 0; i < n; i++) {
      if (graph[node][i] && !visited[i]) {
        visited[i] = 1; // dfs 내부에서 바로 방문 여부를 갱신하지 않고, 방문 가능한 다른 정점들부터 방문 여부를 갱신한다.
        answer[start][i] = 1;
        dfs(i, start, visited);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    let visited = Array.from({ length: n }, () => 0);
    dfs(i, i, visited);
  }

  // 출력
  for (let i = 0; i < answer.length; i++) {
    console.log(answer[i].join(" "));
  }
};

solution(+n, inputs);
