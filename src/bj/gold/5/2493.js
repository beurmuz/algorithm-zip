"use strict";

/**
 * [stack 문제]
 * - 처음에 푼 풀이대로 하면 시간초과가 발생한다.
 * - 왜 굳이 stack으로 풀어야만하는거지?
 */
const [N, ...tops] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map((v) => +v);

// 1. 시간초과가 발생하는 풀이
const solution_old = (N, tops) => {
  let answer = Array.from({ length: N }, () => 0);

  for (let i = 1; i < N; i++) {
    let now = tops[i];
    for (let j = i - 1; j >= 0; j--) {
      if (tops[j] > now) {
        answer[i] = j + 1;
        break;
      }
    }
  }
  return answer.join(" ");
};

console.log(solution_old(N, tops));

// 2. 놀랍게도 for문 내부에 for문이 아닌 while문을 쓰면 통과한다.
const solution = (N, tops) => {
  const answer = Array.from({ length: N }, () => 0);
  const stack = [];

  for (let i = N; i >= 0; i--) {
    while (stack.length > 0 && tops[stack[stack.length - 1]] < tops[i]) {
      answer[stack.pop()] = i + 1;
    }
    stack.push(i);
  }
  return answer.join(" ");
};
