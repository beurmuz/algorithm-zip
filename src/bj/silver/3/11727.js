"use strict";

const n = require("fs").readFileSync("/dev/stdin").toString();

/**
 * 11726 2xn 타일링 2버전 문제.
 * dp (다이나믹 프로그래밍) 문제이다.
 */
const solution = (n) => {
  const dp = Array.from({ length: n + 1 }, () => 0);
  dp[1] = 1;
  dp[2] = 3;

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2] * 2) % 10007;
  }
  //   console.log(dp);
  return dp[n];
};

console.log(solution(+n));
