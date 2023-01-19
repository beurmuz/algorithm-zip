"use strict";

/**
 * 규칙을 알면 정답이 보인다 !
 * dp (다이나믹 프로그래밍)로 풀면 된다.
 */
const [T, ...testcase] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/);

const solution = (T, testcase) => {
  const answer = [];
  const dp = Array.from({ length: 100 }, () => 0); // 최대 길이가 100이니 100까지 잡는다.
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 1;
  dp[3] = 1;

  for (let i = 4; i <= 100; i++) {
    dp[i] = dp[i - 2] + dp[i - 3]; // 점화식을 세워 배열에 넣고
  }

  for (let t of testcase) {
    answer.push(dp[t]); // answer에 push해서
  }

  return answer.join("\n"); // 한번에 join해서 출력한다.
};

console.log(solution(+T, testcase));
