"use strict";

const [n, ...grid] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (n, grid) => {
  grid = grid.map((line) => line.split(" ").map((v) => +v));
  let max_dp = Array(n).fill(0);
  let min_dp = Array(n).fill(0);
  let max_tmp = Array(n).fill(0);
  let min_tmp = Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    let [a, b, c] = grid[i];

    for (let j = 0; j < n; j++) {
      if (j === 0) {
        max_tmp[j] = a + Math.max(max_dp[j], max_dp[j + 1]);
        min_tmp[j] = a + Math.min(min_dp[j], min_dp[j + 1]);
      } else if (j === 1) {
        max_tmp[j] = b + Math.max(max_dp[j - 1], max_dp[j], max_dp[j + 1]);
        min_tmp[j] = b + Math.min(min_dp[j - 1], min_dp[j], min_dp[j + 1]);
      } else {
        max_tmp[j] = c + Math.max(max_dp[j], max_dp[j - 1]);
        min_tmp[j] = c + Math.min(min_dp[j], min_dp[j - 1]);
      }
    }

    for (let j = 0; j < n; j++) {
      max_dp[j] = max_tmp[j];
      min_dp[j] = min_tmp[j];
    }
  }
  return `${Math.max(...max_dp)} ${Math.min(...min_dp)}`;
};

console.log(solution(+n, grid));
