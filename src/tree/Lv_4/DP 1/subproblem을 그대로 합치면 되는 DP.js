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

// ✅ 방법 3 - 백트래킹 방법. (단, 시간초과 발생)
//    방법 2는 해당 풀이에서 memoization을 추가한 것이다.
function fibo(n) {
  if (n === 1 || n === 2) return 1;
  return fibo(n - 1) + fibo(n - 2);
}
console.log(fibo(N));

// ----------------------------------------------------------------------
/**
 * 🔍 계단 오르기 | △ | 25.01.02 🔍
 */
const N = Number(
  require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
);
const dp = Array.from({ length: N + 1 }, () => 0);

// 모듈러 연산을 사용해
// 1) 배열의 값이 커지는 것을 방지
// 2) 결과값을 특정 범위 (0~10006) 내로 유지
// 3) 연산 속도를 최적화하고, 메모리 사용을 줄이기 위함
const MOD = 10007;

dp[2] = 1;
dp[3] = 1;
for (let i = 4; i <= N; i++) {
  dp[i] = (dp[i - 2] + dp[i - 3]) % MOD; // 2계단 or 3계단을 점프해서 올라온 가지수
}

console.log(dp[N]);

// ----------------------------------------------------------------------
/**
 * 🔍 사각형 채우기 |  | 25.01.02 🔍
 */
const N = Number(
  require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
);
const dp = Array.from({ length: N + 1 }, () => 0);

const MOD = 10007;

dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= N; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % MOD;
}

console.log(dp[N]);
