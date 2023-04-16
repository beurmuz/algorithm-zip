"use strict";

const [n, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

const solution = (n, input) => {
  let answer = input.sort((a, b) => a - b);
  return answer.join("\n");
};

console.log(solution(n, input));
