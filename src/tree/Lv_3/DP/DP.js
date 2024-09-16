// ----------------------------------------------------------------------
/**
 * 🔍 직각 삼각형 | O | 24.09.14 🔍
 * - 격자 안에서 한 칸씩 전진하는 DP
 * - arr[i][j]에서 arr[i + 1][j] or arr[i + 1][j + 1]로만 이동이 가능할 때 최대합 구하기
 */
let N = 5;
let arr = [[12], [10, 11], [13, 12, 11], [8, 7, 10, 11], [12, 11, 11, 10, 9]];
let dp = Array.from({ length: N }, () => Array(N).fill(0));

// 첫번째 열은 무조건 아래로만 이동이 가능하다.
dp[0][0] = arr[0][0];
for (let i = 1; i < N; i++) {
  dp[i][0] = dp[i - 1][0] + arr[i][0];
}

// 행과 열의 위치가 동일한 대각선에 대해서는 전부 대각선 방향으로 밖에 올 수 없다.
for (let i = 1; i < N; i++) {
  dp[i][i] = dp[i - 1][i - 1] + arr[i][i];
}

// 남은 칸들을 채워준다.
for (let i = 2; i < N; i++) {
  for (let j = 1; j < N; j++) {
    if (dp[i][j] > 0) continue;
    if (j > i) continue;
    dp[i][j] = Math.max(dp[i - 1][j] + arr[i][j], dp[i - 1][j - 1] + arr[i][j]);
  }
}
console.log(dp);

// ----------------------------------------------------------------------
/**
 * 🔍 삼각형 | O | 24.09.14 🔍
 * - 격자 안에서 한 칸씩 전진하는 DP
 * - arr[i][j]에서 arr[i + 1][j] or arr[i][j + 1]로만 이동이 가능할 때 최대합 구하기
 */
const arr = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));
const N = arr.length;
const dp = Array.from({ length: N }, () => Array(N).fill(0));

// 첫 행은 무조건 dp[0][i] = dp[0][i-1] + arr[0][i]이다.
dp[0][0] = arr[0][0];
for (let i = 1; i < N; i++) {
  dp[0][i] = dp[0][i - 1] + arr[0][i];
}

// 첫 열도 무조건 dp[i][0] = dp[i-1][0] + arr[i][0]이다.
for (let i = 1; i < N; i++) {
  dp[i][0] = dp[i - 1][0] + arr[i][0];
}

for (let i = 1; i < N; i++) {
  for (let j = 1; j < N; j++) {
    dp[i][j] = Math.max(dp[i - 1][j] + arr[i][j], dp[i][j - 1] + arr[i][j]);
  }
}

console.log(dp[N - 1][N - 1]);

// ----------------------------------------------------------------------
/**
 * 🔍 가장 긴 증가하는 부분 수열 | O | 24.09.15 🔍
 * - 조건에 맞게 선택적으로 전진하는 DP
 */
const arr = [20, 80, 10, 50, 55, 20, 60, 70, 5, 90];
const N = arr.length;
const dp = Array.from({ length: N }, () => 0);

for (let i = 0; i < N; i++) {
  let maxValue = 0;
  for (let j = 0; j < i; j++) {
    if (arr[j] < arr[i]) maxValue = Math.max(maxValue, dp[j]);
  }
  dp[i] = maxValue + 1;
}
console.log(Math.max(...dp));

// ----------------------------------------------------------------------
/**
 * 🔍 가장 긴 감소하는 부분 수열 | O | 24.09.15 🔍
 * - 조건에 맞게 선택적으로 전진하는 DP
 */
const arr = [60, 65, 50, 70, 63, 55, 45, 51, 45, 48, 54, 70, 61];
const N = arr.length;
const dp = Array.from({ length: N }, () => 0);

for (let i = 0; i < N; i++) {
  let maxValue = 0;
  for (let j = 0; j < i; j++) {
    if (arr[j] > arr[i]) maxValue = Math.max(maxValue, dp[j]);
  }
  dp[i] = maxValue + 1;
}
ß;
console.log(Math.max(...dp));

// ----------------------------------------------------------------------
/**
 * 🔍 은행 | O | 24.09.16 🔍
 * - 아이템을 적절히 고르는 문제
 * - 1, 4, 5, 9원의 동전으로 거스름돈 21원을 거슬러 주기 위해 필요한 최소 동전의 수 구하기
 */
const coins = [1, 4, 5, 9];
const N = 21;
const dp = Array.from({ length: N + 1 }, () => N);
dp[0] = 0;

for (let fee = 1; fee < N; fee++) {
  let minCount = fee;
  for (let coin of coins) {
    // 현재 금액 fee - 사용한 동전 값 coin이 양수값인 경우
    if (fee - coin >= 0) minCount = Math.min(minCount, dp[fee - coin]); // 기존의 동전 개수와 coin을 사용했을 때의 개수를 비교한다.
  }
  dp[fee] = minCount + 1; // 더 작은 값에서 동전 1개를 더 사용한 경우가 되므로 +1을 해준다.
}
console.log(dp);

// ----------------------------------------------------------------------
/**
 * 🔍 Knapsack | O | 24.09.16 🔍
 * - 아이템을 적절히 고르는 문제
 * - dp[i][j]는 i번째 보석까지 고려했고, 지금까지 선택한 보석 무게의 총 합이 j였을 때, 가능한 보석 가치의 최대 합
 * 
 * -> 점화식은 결국 i번째 보석까지 고민한 경우이므로 
 *    i번째 보석을 가방에 넣었는지/넣지 않았는지 여부로 나눠 점화식을 세울 수 있음 
 */
