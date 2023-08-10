"use strict";

const [NM, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (NM, inputs) => {
  const [N, M] = NM.split(" ").map((v) => +v);
  const graph = Array.from({ length: N + 1 }, () => []);
  const answer = [];

  for (let i = 0; i < N - 1; i++) {
    let [n1, n2, value] = inputs[i].split(" ").map((v) => +v);
    graph[n1].push([n2, value]);
    graph[n2].push([n1, value]);
  }

  const queries = [];

  for (let i = N - 1; i < inputs.length; i++) {
    queries.push(inputs[i].split(" ").map((v) => +v));
  }

  const bfs = (start, end) => {
    let queue = [[start, 0]];
    const visited = Array.from({ length: N + 1 }, () => false);

    while (queue.length) {
      const [now, accDistance] = queue.shift();

      if (end == now) return accDistance;

      for (let [next, distance] of graph[now]) {
        if (!visited[next]) {
          visited[next] = true;
          queue.push([next, accDistance + distance]);
        }
      }
    }
  };

  for (let [n1, n2] of queries) {
    answer.push(bfs(n1, n2));
  }
  return answer.join("\n");
};

console.log(solution(NM, inputs));
