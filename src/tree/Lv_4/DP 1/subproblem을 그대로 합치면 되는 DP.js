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
 * 🔍 사각형 채우기 | O | 25.01.02 🔍
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

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️사각형 채우기 3⭐️ | X | 25.01.02 🔍
 * - 머지? 중간까지밖에 이해하지 못했다
 */
const N = Number(
  require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
);
const dp = Array.from({ length: N + 1 }, () => 0);

const MOD = 1000000007;

dp[0] = 1;
dp[1] = 2;

for (let i = 2; i <= N; i++) {
  dp[i] = (dp[i - 1] * 2 + dp[i - 2] * 3) % MOD;

  for (let j = i - 3; j >= 0; j--) {
    dp[i] = (dp[i] + dp[j] * 2) % MOD;
  }
}

console.log(dp[N]);

// ----------------------------------------------------------------------
/**
 * 🔍 사각형 채우기 2 | O | 25.01.03 🔍
 * - i-1일 때 붙이는 방법은 2*1개짜리 1개
 * - i-2일 때 붙이는 방법은 1*2를 상하로 2개 붙이거나, 2*2를 1개 붙이면 됨
 *
 * => 점화식: dp[i] = dp[i-1] + (dp[i-2] * 2)
 */
const N = Number(
  require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
);
const dp = Array.from({ length: N + 1 }, () => 0);

const MOD = 10007;

dp[0] = 1;
dp[1] = 1;

for (let i = 2; i <= N; i++) {
  dp[i] = (dp[i - 2] * 2 + dp[i - 1]) % MOD;
}

console.log(dp[N]);

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️서로 다른 BST 개수 세기⭐️ | X | 25.01.05, 25.01.10 🔍
 */
// ✅ memoization
const N = Number(
  require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
);
const memo = Array.from({ length: N + 1 }, () => -1);

function getSumBst(n) {
  if (memo[n] !== -1) return memo[n];
  if (n <= 1) return 0;

  let eachNum = 0;
  for (let i = 0; i < n; i++) {
    eachNum += getSumBst(i) * getSumBst(n - i - 1);
  }

  memo[n] = eachNum;
  return memo[n];
}
console.log(getBstNums(N));

// ✅ Tabulation
const N = Number(
  require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
);
const dp = Array.from({ length: N + 1 }, () => 0);
dp[0] = 1;
dp[1] = 1;

function getSumBst(num) {
  let eachNums = 0;

  for (let i = 0; i < num; i++) {
    // 여기서 i를 root라고 보면 된다. 이 root를 기준으로 (왼쪽에 올 수 있는 자식의 수) * (오른쪽에 올 수 있는 자식의 수)
    eachNums += dp[i] * dp[num - i - 1];
  }
  return eachNums;
}

for (let i = 2; i <= N; i++) {
  dp[i] = getSumBst(i);
}
console.log(dp[N]);
