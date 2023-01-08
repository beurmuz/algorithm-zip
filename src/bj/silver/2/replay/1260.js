"use strict";

let [info, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let [n, m, v] = info.split(" ").map((v) => +v);

// 인접 행렬 생성
let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
for (let v of input) {
  let [x, y] = v.split(" ").map((el) => +el);
  graph[x][y] = 1;
  graph[y][x] = 1;
}

function dfs(v) {
  dfsVisited[v] = 1;
  dfsAnswer.push(v);
  for (let i = 1; i < graph.length; i++) {
    if (graph[v][i] === 1 && dfsVisited[i] === 0) {
      // graph에 1이 있고 아직 방문하지 않았다면
      dfs(i);
    }
  }
}

function bfs(v) {
  // 시작 노드 큐에 넣기
  let queue = [];
  queue.push(v);
  bfsAnswer.push(v);

  // 큐에 값이 있는 동안 계속 반복
  while (queue.length !== 0) {
    let value = queue.shift();
    bfsVisited[value] = 1; // 방문처리

    // 큐에서 뺀 노드를 반복하며 노드와 연결된 다른 노드들 중 1이 있고 방문하지 않았다면
    for (let i = 1; i < graph.length; i++) {
      if (graph[value][i] === 1 && bfsVisited[i] === 0) {
        bfsVisited[i] = 1;
        queue.push(i);
        bfsAnswer.push(i);
      }
    }
  }
}

// 방문 체크
let dfsVisited = Array.from({ length: n + 1 }, () => 0);
let bfsVisited = Array.from({ length: n + 1 }, () => 0);

// 답 체크
let dfsAnswer = [];
let bfsAnswer = [];

dfs(v);
bfs(v);
console.log(dfsAnswer.join(" "));
console.log(bfsAnswer.join(" "));
