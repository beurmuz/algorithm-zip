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
    let maxValue = 0;
    let maxIndex = -1;
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i] && dp[j] > maxValue) {
        // 기준 값보다 크고, maxValue값보다 큰 경우에만
        maxValue = dp[j];
        maxIndex = j;
      }
    }
    dp[i] = maxIndex === -1 ? arr[i] : arr[i] + dp[maxIndex];
  }
  return Math.max(...dp);
};

console.log(solution(n, arr));
