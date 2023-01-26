"use strict";

/**
 * dp (다이나믹 프로그래밍) 문제
 *
 * - dp[i]는 dp[i-1][j-1]과 dp[i-1][j]값을 비교해 둘 중 큰 값을 기반으로 합산하면 된다.
 * - 점화식: dp[i][j] = 원본[i][j-1] + Math.max(dp[i-1][j-1], dp[i-1][j])
 */
const [n, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (n, inputs) => {
  const tri = inputs.map((value) => value.split(" ").map(Number));
  const dp = Array.from({ length: n }, (_, index) => Array(index + 3).fill(0)); // 각 줄의 왼쪽과 오른쪽 끝에 0을 놔두고 시작하는 것이 좋다.

  dp[0][1] = tri[0][0]; // dp배열의 맨 윗줄 가운데에 tri[0][0]의 값을 넣고 시작한다.
  for (let i = 1; i < n; i++) {
    for (let j = 1; j <= i + 1; j++) {
      dp[i][j] = tri[i][j - 1] * 1 + Math.max(dp[i - 1][j - 1], dp[i - 1][j]); // 현재 dp[i][j]는 이전 줄의 대각선 두 값 중 큰 값을 tri[i][j-1]과 더해주면 된다.
    }
  }
  //   console.log(dp);
  return Math.max(...dp[n - 1]);
};

console.log(solution(+n, inputs));
