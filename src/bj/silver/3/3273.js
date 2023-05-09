"use strict";

/**
 * 투 포인터 문제
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (inputs) => {
  const n = +inputs[0];
  const arr = inputs[1]
    .split(" ")
    .map((v) => +v)
    .sort((a, b) => a - b);
  const x = +inputs[2];
  let answer = 0;

  let [lt, rt] = [0, n - 1];
  while (lt < rt) {
    let sum = arr[lt] + arr[rt];
    answer += sum === x ? 1 : 0;
    lt += sum <= x ? 1 : 0;
    rt -= sum >= x ? 1 : 0;
  }
  return answer;
};

console.log(solution(inputs));
