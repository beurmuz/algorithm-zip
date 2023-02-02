"use strict";

/**
 * 1. bfs로 푼 문제
 * - 시간초과 방지를 위해 b를 넘는 경우는 전부 건너뛰었으며,
 * - b+1개만큼 visited 배열을 생성하는 대신 방문한 번호를 visited에 넣고 includes로 방문 여부를 알아보았다.
 */
const [a, b] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

const solution = (a, b) => {
  let answer = 0;
  const visited = [];
  const bfs = () => {
    let queue = [[a, 1]];

    while (queue.length) {
      let [now, count] = queue.shift();
      if (visited.includes(now)) continue;
      visited.push(now);

      for (let next of [now * 2, parseInt("" + now + "1")]) {
        if (next <= b) queue.push([next, count + 1]);
        if (next === b) {
          answer = count + 1;
          return;
        }
      }
    }
  };
  bfs();
  return answer === 0 ? -1 : answer;
};

console.log(solution(a, b));
