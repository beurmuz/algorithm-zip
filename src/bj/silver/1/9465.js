"use strict";

/**
 * dp (다이나믹 프로그래밍) 문제
 * - '현재 값은 이전 값에 의해 결정된다'는 사실은 알았으나 2행 n열인 arr와 달리 n행 2열의 dp를 만들어 계산할 방법은 생각해내지 못했다.
 *  => 그냥 arr처럼 2행 n열으로 만들어도 될 것 같긴하다.
 */
const [t, ...testcase] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (t, testcase) => {
  let answer = [];
  let index = 0;

  for (let i = index; i < t; i++) {
    let n = +testcase[index];
    let arr = []; // 스티커 값이 들어있는 arr 배열 생성, 2행 n열
    arr.push(testcase[index + 1].split(" ").map(Number));
    arr.push(testcase[index + 2].split(" ").map(Number));

    // n길이의 dp 배열 생성
    let dp = Array.from({ length: n + 1 }, () => [0, 0]); // n행 2열

    dp[1][0] = arr[0][0];
    dp[1][1] = arr[1][0];

    for (let i = 2; i < n + 1; i++) {
      dp[i][0] = Math.max(dp[i - 1][1], dp[i - 2][1]) + arr[0][i - 1];
      dp[i][1] = Math.max(dp[i - 1][0], dp[i - 2][0]) + arr[1][i - 1];
    }
    // console.log(dp);
    answer.push(Math.max(...dp[n])); // dp[n][0], dp[n][1] 중 더 큰 값을 answer에 push한다.
    index = index + 3; // 다음 testcase로 넘기기 위해 index값을 갱신한다.
  }
  return answer.join("\n");
};

console.log(solution(+t, testcase));
