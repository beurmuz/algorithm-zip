"use strict";

const [n, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map((v) => +v);

const solution = (n, input) => {
  return input.sort((a, b) => a - b).join("\n");
};

console.log(solution(n, input));
