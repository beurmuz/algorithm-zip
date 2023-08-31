"use strict";

/**
 * [stack, 수식의 괄호쌍 문제]
 */

const [N, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (N, arr) => {
  let answer = 0;

  for (let i = 0; i < N; i++) {
    const stack = [];
    const str = arr[i].split("");

    for (let j = 0; j < str.length; j++) {
      const top = stack[stack.length - 1];
      const now = str[j];
      if (top === now) stack.pop();
      else stack.push(now);
    }

    answer = stack.length ? answer : answer + 1;
  }
  return answer;
};

console.log(solution(+N, arr));
