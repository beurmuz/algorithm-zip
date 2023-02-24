"use strict";

/**
 * LCS 알고리즘
 * - cf. [LCS 설명](https://velog.io/@emplam27/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B7%B8%EB%A6%BC%EC%9C%BC%EB%A1%9C-%EC%95%8C%EC%95%84%EB%B3%B4%EB%8A%94-LCS-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-Longest-Common-Substring%EC%99%80-Longest-Common-Subsequence)
 */
const [str1, str2] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (str1, str2) => {
  const n = str1.length;
  const m = str2.length;
  const lcsDP = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

  for (let i = 0; i < n; i++) {
    let char = str1[i];
    for (let j = 0; j < m; j++) {
      if (char === str2[j]) lcsDP[i + 1][j + 1] = lcsDP[i][j] + 1;
      else lcsDP[i + 1][j + 1] = Math.max(lcsDP[i][j + 1], lcsDP[i + 1][j]);
    }
  }
  return lcsDP[n][m];
};

console.log(solution(str1, str2));
