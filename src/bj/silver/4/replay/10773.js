"use strict";

/**
 * [stack 문제]
 * - n의 범위가 1 ~ 10^5이므로 O(n log n), O(n) ... 등으로 풀어야 한다.
 * - O(n)
 */
const [K, ...nums] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

const solution = (K, nums) => {
  let stack = [];

  // O(n)
  nums.forEach((num) => {
    if (stack && num === 0) {
      stack.pop();
    } else stack.push(num);
  });

  // reduce 보다 일반 반복문을 이용하는 것이 시간이 덜 소요된다.
  let answer = 0;
  // O(n)
  for (let value of stack) {
    answer += value;
  }
  return answer;
};

console.log(solution(K, nums));
