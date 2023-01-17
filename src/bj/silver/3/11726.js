"use strict";

const n = require("fs").readFileSync("/dev/stdin").toString();

/**
 * 첫번째 푼 풀이
 * - dp로 풀면 풀릴 것 같아 규칙을 찾아보니, dp[i] = dp[i-1] + dp[i-2]라는 식을 도출해낼 수 있었다.
 */
const solution = (n) => {
  const dp = Array.from({ length: n + 1 }, () => 0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
  }

  return dp[n];
};

console.log(solution(+n));
