"use strict";

/*
    - dfs (깊이 우선 탐색), 인접행렬로 노드의 개수 구하기
*/
let [computerNum, connetNum, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
[computerNum, connetNum] = [+computerNum, +connetNum];
let graph = Array.from(Array(computerNum + 1), () =>
  Array(computerNum + 1).fill(0)
);
let visited = [];

function solution(n, graph) {
  // 방문 노드 초기화
  visited = new Array(n + 1).fill(0);

  // 노드 1로 dfs 시작
  dfs(n, 1);

  // 모든 방문이 끝나면 1번을 통해 바이러스에 걸리게 되는 컴퓨터 수 세기(1은 제외해야함)
  let count = 0;
  for (let i = 2; i <= n; i++) {
    if (visited[i] === 1) count++;
  }
  console.log(count);
}

function dfs(n, start) {
  // 현재 노드 방문처리
  visited[start] = 1;

  for (let i = 0; i <= n; i++) {
    // 그래프에서 현재 노드에 해당하는 인접 행렬을 탐색해 연결 노드가 있고 아직 방문처리 되지 않았으면 방문하기
    if (graph[start][i] === 1 && visited[i] === 0) dfs(n, i);
  }
}

// 인접행렬로 연결 표시
for (let line of input) {
  let [x, y] = line.split(" ").map((v) => +v);
  graph[x][y] = 1;
  graph[y][x] = 1;
}
solution(computerNum, graph);
