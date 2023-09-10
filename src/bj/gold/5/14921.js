"use strict";

const [N, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map((v) => +v);

const solution = (N, arr) => {
  let answer = Math.abs(arr[0] + arr[N - 1]);
  let [lt, rt] = [0, N - 1];

  while (lt < rt) {
    let sum = arr[lt] + arr[rt];

    if (Math.abs(sum) < answer) {
      answer = Math.abs(sum);
    }

    if (sum === 0) {
      answer = 0;
      break;
    } else if (sum > 0) {
      rt--;
    } else lt++;
  }

  return answer;
};

console.log(solution(N, arr));
