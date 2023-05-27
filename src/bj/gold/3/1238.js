"use strict";

const [inputs, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const dijkstra = (graph, N, X) => {
  const distance = Array.from({ length: N + 1 }, () => Infinity);

  const queue = [[X, 0]];
  distance[X] = 0; // 자기 자신으로 가는 건 0이다.

  while (queue.length > 0) {
    const [start, time] = queue.shift();

    for (let i = 0; i < graph[start].length; i++) {
      const [nx, nt] = graph[start][i];
      if (distance[nx] > time + nt) {
        // 최소 시간을 찾으면
        distance[nx] = time + nt;
        queue.push([nx, distance[nx]]);
      }
    }
  }
  return distance;
};

const solution = (inputs, arr) => {
  const [N, M, X] = inputs.split(" ").map((v) => +v);
  const goGraph = Array.from({ length: N + 1 }, () => []); // 가는 지점
  const backGraph = Array.from({ length: N + 1 }, () => []); // 오는 지점을 따로 저장한다.

  arr.forEach((line) => {
    const [start, end, time] = line.split(" ").map((v) => +v);
    goGraph[start].push([end, time]);
    backGraph[end].push([start, time]);
  });

  // 오고 가는 것의 최단 거리를 구하고
  const backDist = dijkstra(backGraph, N, X);
  const goDist = dijkstra(goGraph, N, X);

  let max = 0;
  for (let i = 1; i <= N; i++) {
    max = Math.max(max, backDist[i] + goDist[i]); // 더해서 가장 큰 값이 정답이 된다.
  }
  return max;
};

console.log(solution(inputs, arr));
