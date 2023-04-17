"use strict";

const [n, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map((v) => +v);

const solution = (n, arr) => {
  const dp = Array.from({ length: n }, () => 0);

  for (let i = 0; i < n; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && dp[j] > max) {
        //   console.log(`arr[${i}]: ${arr[i]} arr[${j}]: ${arr[j]}   dp[${j}]: ${dp[j]}`);
        max = dp[j];
      }
    }
    dp[i] = max + 1;
  }
  return Math.max(...dp);
};

console.log(solution(n, arr));
