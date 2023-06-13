"use strict";

/**
 * [DP, LCS 문제]
 * - LCS (Longest Common Subsequence, 최장 공통 부분 수열)
 *   - 두 수열이 주어졌을 때, 모두의 부분 수열이 되는 수열 중 가장 긴 것을 찾는 것
 *   - 2차원 배열과 DP를 이용해 풀 수 있다.
 *   - 부분 수열은 연속된 값이 아니므로 이전의 최대 공통 부분 수열의 값이 계속 유지된다.
 *     - 현재 문자를 비교하는 과정의 이전 과정이 LCS[i-1][j], LCS[i][j-1]이 된다.
 */
const [s1, s2] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (s1, s2) => {
  const n = s1.length;
  const m = s2.length;
  const LCS = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

  for (let i = 0; i < n; i++) {
    let char = s1[i]; // s1의 i번째 값과 s2를 비교한다.
    for (let j = 0; j < m; j++) {
      if (char === s2[j]) LCS[i + 1][j + 1] = LCS[i][j] + 1;
      else LCS[i + 1][j + 1] = Math.max(LCS[i][j + 1], LCS[i + 1][j]);
    }
  }
  return LCS[n][m]; // 최댓값은 LCS[n][m]에 저장되어있다.
};
console.log(solution(s1, s2));
