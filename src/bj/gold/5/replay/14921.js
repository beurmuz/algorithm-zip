"use strict";

/**
 * [이분탐색]
 * - mid 대신 sum을 이용해서 풀면 된다.
 * - 문제를 읽고 mid로 풀면 될지, sum으로 풀면될지 잘 생각해볼것!
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
