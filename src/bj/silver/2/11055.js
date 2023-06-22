"use strict";

/**
 * [가장 큰 증가하는 부분 수열, DP 문제]
 * - 원리?라고 해야하나 약간 9252번 LCS2 문제의 1차원 배열 버전 느낌이 컸다. 이걸 안풀어봐서 LCS2 문제의 접근법을 몰랐나 싶기도하고..ㅎ
 * - 근데 코드 짜기 어렵다 (https://leylaoriduck.tistory.com/527)
 */
const [A, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map((v) => +v);

const solution = (A, arr) => {
  const dp = Array.from({ length: A }, () => 0);

  for (let i = 0; i < A; i++) {
    let max = 0;
    let maxIdx = -1;

    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i] && dp[j] > max) {
        // arr[j]가 arr[i]보다 작으면서, dp[j]에 저장된 값이 max보다 크면
        max = dp[j]; // max를 갱신한다.
        maxIdx = j; // max를 갱신했으나 idx도 갱신한다.
      }
    }
    dp[i] = maxIdx === -1 ? arr[i] : arr[i] + dp[maxIdx];
  }
  return Math.max(...dp);
};

console.log(solution(A, arr));
