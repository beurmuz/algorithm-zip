"use strict";

const [N, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (N, input) => {
  const arr = ("" + input)
    .split(" ")
    .map((v) => +v)
    .sort((a, b) => a - b);
  let answer = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j <= i; j++) {
      answer += arr[j];
    }
  }
  return answer;
};

console.log(solution(N, input));
