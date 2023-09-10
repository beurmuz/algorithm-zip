"use strict";

/**
 * [이분 탐색]
 * - while문 내의 answer, sum을 비교하는 if문의 순서가 잘못되어 계속 틀렸다고 나왔었다.
 * - lt, rt를 먼저 바꿔준 후, 현재 sum과 answer를 비교해주어야 한다.
 */

const [N, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map((v) => +v);

const solution = (N, arr) => {
  let answer = arr[0] + arr[N - 1];
  let [lt, rt] = [0, N - 1];

  while (lt < rt) {
    let sum = arr[lt] + arr[rt];

    if (sum > 0) rt--;
    else if (sum < 0) lt++;
    else {
      answer = 0;
      break;
    }

    if (Math.abs(sum) < Math.abs(answer)) answer = sum;
  }

  return answer;
};

console.log(solution(N, arr));
