"use strict";

const [n, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (n, inputs) => {
  const input = inputs[0].split(" ").map((v) => +v);
  const dp = Array.from({ length: n }, () => 0);

  for (let i = 0; i < n; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
      if (input[i] > input[j] && dp[j] > max) {
        max = dp[j];
      }
    }
    dp[i] = max + 1;
  }
  return Math.max(...dp);
};

console.log(solution(+n, inputs));
