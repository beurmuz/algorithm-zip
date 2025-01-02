// ----------------------------------------------------------------------
/**
 * 🔍 피보나치 수 | O | 25.01.02 🔍
 */
const N = Number(
  require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
);

// ✅ 내 풀이 - Tabulation (for문, bottom-up 방식)
//    중복되는 연산 없이 계산되는 방법
const dp = Array.from({ length: N + 1 }, () => 0);

dp[1] = 1;
dp[2] = 1;

for (let i = 3; i <= N; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}
console.log(dp[N]);

// ✅ 방법 2 - Memoization (재귀, top-down 방식)
//    백트래킹 하는 과정에서 중복되는 계산을 DP(Memoization)을 이용해 줄임
const N = Number(
  require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
);

const memo = Array.from({ length: N + 1 }, () => -1);

function fibo(n) {
  if (memo[n] !== -1) return memo[n];

  if (n === 1 || n === 2) return 1;
  memo[n] = fibo(n - 1) + fibo(n - 2);
  return memo[n];
}
console.log(fibo(N));
