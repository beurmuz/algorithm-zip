"use strict";

/**
 * [다이나믹 프로그래밍, dp 문제]
 * - 그림을 그려보고 어떻게 풀어야하나 고민했는데, dp로 풀어야한다고 한다.
 *
 * - 이 문제가 왜 dp이며, 어떻게 접근해야할까?
 *   - DP는 이전 결과가 다음 결과에 영향을 미쳐야함
 *   - DP를 풀 때 변수를 어떻게 정할지가 중요
 *   - 이전 결과값을 가져다 쓰기 위해서는 초기화가 중요
 *
 * - 해당 문제에서 고려해야 할 변수는 h, w => i와 j로 두고, 2차원 배열을 이용한다.
 */
const pill = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

const solution = (pill) => {
  pill.pop(); // 맨 마지막 값인 0을 제거한다.

  const MAX = Math.max(...pill); // 들어온 testcase들 중 가장 큰 값을 찾는다.
  const dp = Array.from({ length: MAX + 1 }, () => 0); // MAX 값을 기준으로 1차원 dp 배열을 만든다.

  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= MAX; i++) {
    // console.log(`--------- dp[${i}] 구하기 --------`)
    for (let j = 0; j < i; j++) {
      /**
       * 만약 dp[5]라면, dp[5]에 (dp[0]*dp[4]) + (dp[1]*dp[3]) + (dp[2]*dp[2]) + (dp[3]*dp[1]) + (dp[4]*dp[0])을 누적합한다.
       */
      dp[i] += dp[j] * dp[i - j - 1];
      //   console.log(`dp[${i}] += dp[${j}] * dp[${i-j-1}]`);
    }
  }

  const answer = [];
  pill.forEach((v) => {
    answer.push(dp[v]);
  });
  return answer.join("\n");
};

console.log(solution(pill));
