"use strict";

/**
 * 처음에 푼 풀이
 */
const x = require("fs").readFileSync("/dev/stdin").toString();

const solution = (x) => {
  let count = 0;
  let sum = 64;
  let min = 64;
  while (x !== sum) {
    // 가지고 있는 막대 중 가장 짧은 것을 절반으로 자른다.
    min = min / 2; // 32
    // 만약 자른 막대의 절반 중 하나를 버리고 남아있는 막대의 길이 합이 x보다 크거나 같으면, 자른 막대 중 하나 버리기
    if (sum - min >= x) sum = sum - min;
    count++;
    console.log(`sum: ${sum}, min: ${min}`);
  }
  return count;
};
console.log(solution(+x));

/**
 * 다시 푼 풀이
 * - 비트로 풀어야한다.
 */
const x = require("fs").readFileSync("/dev/stdin").toString();

const solution = (x) => {
  let target = x;
  let count = 0;
  while (target > 0) {
    if (target & 1) {
      count++;
    }
    target >>= 1;
  }
  return count;
};
console.log(solution(+x));
