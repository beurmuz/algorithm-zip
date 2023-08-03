"use strict";
/**
 * N이 15이므로 완전탐색으로 풀어야할 것 같지만.. 몇가지 경우의 수를 구해보면 규칙이 보인다.
 * 해당 단계의 점의 개수 = 한 변의 점의 개수^2
 *     ex) 0단계 => 2, 1단계 => 3, 2단계 => 5, 3단계 => 9개 ...
 * 그리고 각 단계의 한 변에 있는 점의 개수는
 */

const N = require("fs").readFileSync("/dev/stdin").toString().trim();

const solution = (N) => {
  const MAX_SIZE = 15;
  const dp = Array.from({ length: MAX_SIZE + 1 }, () => 0);
  dp[0] = 2; // start 지점의 한 변의 점 개수

  for (let i = 1; i <= N; i++) {
    dp[i] = dp[i - 1] * 2 - 1;
  }

  //   return dp[N]**2
  return Math.pow(dp[N], 2);
};

console.log(solution(+N));
