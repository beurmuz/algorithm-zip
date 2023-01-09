"use strict";

/**
 * DP로 풀어야하는 문제
 * - 가능한 건 오직 3으로 나누기, 2로 나누기, 1 빼기 뿐
 */
const n = require("fs").readFileSync("/dev/stdin").toString();

const solution = (n) => {
  const dp = Array.from({ length: n + 1 }, () => 0);

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + 1; // 2와 3의 배수가 아니면 이전 값에서 +1을 해준 것과 같다.
    if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1); // 1을 더해준 것과 /2를 하고 1을 더한값 중 더 작은 값으로 갱신한다.
    if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }
  return dp[n];
};

console.log(solution(+n));
