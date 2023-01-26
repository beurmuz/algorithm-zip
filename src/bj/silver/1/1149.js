"use strict";

/**
 * dp (다이나믹 프로그래밍) 문제
 * -
 */
const [n, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const solution = (n, inputs) => {
  const rgb = inputs.map((cost) => cost.split(" ").map(Number));
  const dp = Array.from({ length: n + 1 }, () => Array(3).fill(0));

  dp[1] = rgb[0]; // 첫번째 집의 RGB 각 색의 비용을 넣는다.
  for (let i = 2; i <= n; i++) {
    // dp[i][j]는 n번째 집을 j색으로 칠했을 때 전체 비용의 최솟값을 의미한다.
    dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + rgb[i - 1][0]; // 이전 dp[i-1][1] (G)와 dp[i-1][2] (B)의 중 최솟값을 찾아 rgb[i-1][0] (R)값과 더해준다.
    dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + rgb[i - 1][1]; // R와 B비교 + G
    dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + rgb[i - 1][2]; // R과 G비교 + B
    // console.log(dp)
  }
  return Math.min(...dp[n]); // 각 R, G, B에 저장된 비용들 중 최솟값을 return한다.
};

console.log(solution(+n, inputs));
