"use strict";

/**
 * [그래프 탐색, BFS 문제]
 * - 왜 이렇게 풀어야하지??? 이해하지 못하였다
 */
const [n, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (n, inputs) => {
  const step = inputs[0].split(" ").map((v) => +v);
  const [start, end] = inputs[1].split(" ").map((v) => +v - 1);

  const bfs = (start) => {
    const visited = Array.from({ length: n }, () => false);
    const queue = [[start, 0]]; // [시작 지점, 점프 횟수]
    visited[start] = true; // 방문 표시

    while (queue.length) {
      const [nowPos, count] = queue.shift();
      if (nowPos === end) return count;
      if (step[nowPos] === 1) return count + 1; // 현재 위치가 1이면 count배수 + 1한 값이 정답이된다.

      for (let next = nowPos - step[nowPos]; next >= 0; next -= step[nowPos]) {
        if (next === end) return count + 1;
        if (!visited[next]) {
          visited[next] = true;
          queue.push([next, count + 1]);
        }
      }
      for (let next = nowPos + step[nowPos]; next <= n; next += step[nowPos]) {
        if (next === end) return count + 1;
        if (!visited[next]) {
          visited[next] = true;
          queue.push([next, count + 1]);
        }
      }
    }
    return -1;
  };

  return bfs(start);
};

console.log(solution(+n, inputs));
