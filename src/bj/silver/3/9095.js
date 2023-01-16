"use strict";

const [T, ...testcases] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map((v) => +v);

const solution = (T, testcases) => {
  let answer = [];
  let dp = Array.from({ length: 11 }, () => 0);
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;

  // n이 10까지이므로 4~10까지만 저장한다.
  for (let i = 4; i < 11; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }

  // 정답 출력하기
  for (let t = 0; t < T; t++) {
    answer.push(dp[testcases[t]]);
  }
  return answer.join("\n");
};

console.log(solution(T, testcases));
