"use strict";

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (input) => {
  const N = +input[0];
  const stack = [];
  let answer = 0;

  for (let i = 1; i <= N; i++) {
    const num = +input[i];
    while (stack.length !== 0 && stack[stack.length - 1] <= num) {
      stack.pop();
    }
    stack.push(num);
    answer += stack.length - 1;
  }
  return answer;
};

console.log(solution(input));
