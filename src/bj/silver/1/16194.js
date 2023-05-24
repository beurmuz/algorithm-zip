"use strict";

/**
 * [dp문제]
 * - 점화식을 못세워서 풀이를 참고했다.
 * - 현재 값, 이전 값들을 적절히 조합하여 둘중 최소값을 구하면 된다.
 */
const [n, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (n, input) => {
  const card = input[0].split(" ").map((v) => +v);
  let dp = [0, ...card];

  for (let i = 2; i < dp.length; i++) {
    // console.log(`dp:  ${dp}`);
    for (let j = 1; j < i; j++) {
      // console.log(
      //   `dp[${i}]: ${dp[i]},  dp[${i - j}] + dp[${j}]: ${dp[i - j] + dp[j]}`
      // );
      dp[i] = Math.min(dp[i], dp[i - j] + dp[j]);
    }
    // console.log("\n");
  }
  return dp[n];
};

console.log(solution(+n, input));
