// ----------------------------------------------------------------------
/**
 * 🔍 피보나치 수 | O | 25.01.02 🔍
 */
const N = Number(
  require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
);

// ✅ 내 풀이 - Tabulation (for문, bottom-up 방식)
const dp = Array.from({ length: N + 1 }, () => 0);

dp[1] = 1;
dp[2] = 1;

for (let i = 3; i <= N; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}
console.log(dp[N]);
