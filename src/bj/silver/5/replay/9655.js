"use strict";

/**
 * dp (dynamic programming)
 * - 규칙을 찾으면 아주 단순하게 풀 수 있는 문제이다.
 *
 * 1 => SK(1)
 * 2 => SK(1), CY(1)
 * 3 => SK(3)
 * 4 => SK(3), CY(1)
 * 5 => SK(3), CY(1), SK(1)
 * ...
 *
 * 이렇게 n의 개수가 짝수개이면 CY가 이기고, 홀수개이면 SK가 이기는 것을 알 수 있다.
 *
 */
const n = require("fs").readFileSync("/dev/stdin").toString().trim();

const solution = (n) => {
  return n % 2 === 0 ? "CY" : "SK";
};

console.log(solution(+n));
