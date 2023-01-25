"use strict";

/**
 * dp로 풀어야하는 문제
 * https://tesseractjh.tistory.com/121
 */
const n = require("fs").readFileSync("/dev/stdin").toString().trim();

const solution = (n) => {
  const dp = Array.from({ length: n + 1 }, () => 0);
  dp[1] = 1;
  for (let i = 2; i < n + 1; i++) {
    console.log(`dp[${i}]값 찾기 시작! -------- `);
    let min = 4;
    for (let j = 1; j * j <= i; j++) {
      console.log(`min: ${min}, dp[${i} - ${j} * ${j}]: ${dp[i - j * j]}`);
      min = Math.min(min, dp[i - j * j]);
    }
    console.log(`dp[${i}]는 ${min} + 1 = ${min - 1}\n`);
    dp[i] = min + 1;
  }
  return dp[n];
};

console.log(solution(+n));
