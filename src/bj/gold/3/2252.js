"use strict";

/**
 * [위상 정렬 문제]
 * 위상 정렬이란 사이클이 없는 방향 그래프의 모든 노드를, 방향성에 거스르지 않도록 순서대로 나열하는 것이다.
 *
 * 각 노드가 큐에 들어온 순서 = 위상 정렬의 수행 결과이다.
 * 1. 진입 차수가 0인 모든 노드를 큐에 넣는다.
 * 2. 큐가 빌 때까지 다음 과정을 반복한다.
 *   1) 큐에서 원소를 꺼내 해당 노드에서 나가는 간선을 그래프에서 제거한다.
 *   2) 새롭게 진입 차수가 0이 된 노드를 큐에 넣는다.
 */
const [input, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (input, arr) => {
  const [n, m] = input.split(" ").map((v) => +v);
  const graph = Array.from({ length: n + 1 }, () => []);
  const inDegrees = Array.from({ length: n + 1 }, () => 0);

  arr.forEach((line) => {
    let [prev, next] = line.split(" ").map((v) => +v);
    graph[prev].push(next);
    inDegrees[next] += 1;
  });

  const queue = [];
  for (let i = 1; i <= n; i++) {
    if (!inDegrees[i]) {
      if (!inDegrees[i]) queue.push(i);
    }
  }

  const result = [];
  while (queue.length) {
    const num = queue.pop();
    result.push(num);
    graph[num].forEach((v) => {
      inDegrees[v] -= 1;
      if (!inDegrees[v]) queue.push(v);
    });
  }
  return result.join(" ");
};

console.log(solution(input, arr));
