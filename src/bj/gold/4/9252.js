"use strict";

/**
 * [2차원 DP 문제]
 * - 전에 비슷한 문제를 풀어봤던 것 같은데, 이번에도 감이 잡히질 않아 풀이 방법을 찾아보았다.
 *
 * - 풀이 방법
 *   - 행은 s1, 열은 s2에 대한 문자열에 대한 정보를 나타낸다.
 *   - dp[row][col]은 s1 row의 길이, s2 col의 길이에 해당하는 문자열로 만들 수 있는 공통부분 수열이다.
 *   - s1과 s2의 길이를 이용해 2차원 for문을 돈다.
 *     - s1의 i번째와 s2의 j번째 문자를 비교한다.
 *       if 일치한다면 => dp[i][j] = dp[i-1][j-1] + 문자
 *       else 일치하지 않는다면 => dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
 *
 * cf. (https://velog.io/@ckstn0778/%EB%B0%B1%EC%A4%80-9252%EB%B2%88-LCS-2-X-1)
 */
const [s1, s2] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (s1, s2) => {
  const dp = Array.from({ length: s1.length + 1 }, () =>
    Array(s2.length + 1).fill("")
  );

  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + s2[j - 1];
      } else {
        dp[i][j] =
          dp[i - 1][j].length > dp[i][j - 1].length // 둘 중 길이가 더 긴 것을 넣는다.
            ? dp[i - 1][j]
            : dp[i][j - 1];
      }
    }
  }

  return dp[s1.length][s2.length].length === 0
    ? 0
    : `${dp[s1.length][s2.length].length}\n${dp[s1.length][s2.length]}`;
};

console.log(solution(s1, s2));
