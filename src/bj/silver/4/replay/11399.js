"use strict";

/**
 * 그리디 알고리즘과 정렬을 이용하면 빠르게 풀 수 있는 문제이다.
 */
const [N, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (N, input) => {
  const arr = input
    .split(" ")
    .map((v) => +v)
    .sort((a, b) => a - b); // 받아온 input을 정렬한 뒤
  let answer = 0;

  for (let i = 0; i < N; i++) {
    // 각 사람이 돈을 인출할 때마다 걸리는 시간은 앞 사람의 인출시간을 누적합 한 것
    for (let j = 0; j <= i; j++) {
      answer += arr[j];
    }
  }
  return answer;
};

console.log(solution(N, input));
// console.log(solution(5, "3 1 4 3 2"));
