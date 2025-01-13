// ----------------------------------------------------------------------
/**
 * 🔍 직각 삼각형 DP | O | 25.01.13 🔍
 */
const N = 4;
const arr = [[4], [6, 2], [3, 7, 9], [3, 4, 9, 9]];

const dp = Array.from({ length: N }, () => Array(N).fill(0));

// 초기화
dp[0][0] = arr[0][0];

// 세로 줄 초기화
for (let i = 1; i < N; i++) {
  dp[i][0] = dp[i - 1][0] + arr[i][0];
}

// 대각선 줄 초기화
for (let i = 1; i < N; i++) {
  dp[i][i] = dp[i - 1][i - 1] + arr[i][i];
}

// 남은 dp 채우기
for (let i = 2; i < N; i++) {
  for (let j = 1; j < i; j++) {
    dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1]) + arr[i][j];
  }
}
console.log(Math.max(...dp[N - 1]));
