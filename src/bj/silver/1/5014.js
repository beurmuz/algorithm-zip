"use strict";

/**
 * [bfs 문제]
 * - 갈 수 있는 범위가 정해져있고, 이동하는 간격이 정해져있으므로 bfs로 풀었다.
 */
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

const solution = (input) => {
  let [F, S, G, U, D] = [...input];
  D = -D;

  if (S === G) return 0;

  const bfs = () => {
    const visited = Array.from({ length: F + 1 }, () => false);
    const queue = [[S, 0]];

    while (queue.length) {
      const [now, count] = queue.shift();
      if (visited[now]) continue;
      if (now === G) return count;
      visited[now] = true;

      for (let nx of [now + U, now + D]) {
        if (nx > 0 && nx <= F && !visited[nx]) queue.push([nx, count + 1]);
      }
    }
  };

  let answer = bfs();
  return answer ? answer : "use the stairs";
};

console.log(solution(input));
