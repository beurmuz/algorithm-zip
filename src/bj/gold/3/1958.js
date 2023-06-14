"use strict";

/**
 * [DP 문제]
 * - 9251의 LCS를 응용한 문제이다.
 * - 문자의 개수가 3개이므로, 3차원 배열을 이용하면 쉽다.
 */
const [s1, s2, s3] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (s1, s2, s3) => {
  // 1. 3차원 배열 만들기
  const LCS = [...Array(s1.length + 1)].map((_) =>
    [...Array(s2.length + 1)].map((_) => new Array(s3.length + 1).fill(0))
  );

  for (let i = 1; i < s1.length + 1; i++) {
    for (let j = 1; j < s2.length + 1; j++) {
      for (let k = 1; k < s3.length + 1; k++) {
        if (s1[i - 1] === s2[j - 1] && s2[j - 1] === s3[k - 1])
          // 부분 수열이 가능한 경우
          LCS[i][j][k] =
            LCS[i - 1][j - 1][k - 1] +
            1; // 이전의 값에 1을 더한 값으로 갱신한다.
        else
          LCS[i][j][k] = Math.max(
            // 3개의 값 중 최댓값으로 갱신한다.
            LCS[i - 1][j][k],
            LCS[i][j - 1][k],
            LCS[i][j][k - 1]
          );
      }
    }
  }
  return LCS[s1.length][s2.length][s3.length];
};

console.log(solution(s1, s2, s3));
