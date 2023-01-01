"use strict";

/**
 * 계산식을 세워 풀면 된다.
 * - 우선 총 높이에서 밤을 제외한 값이 총 올라갈 높이이고,
 * - 낮에서 밤을 뺀 값이 달팽이가 순수하게 올라가는 높이를 의미한다.
 * - 만약 소수점 값이 나오면, 정상에 완전히 올라가기 위한 일수는 올림을 통해 구하면 된다.
 */
const [a, b, v] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ");

function solution(a, b, v) {
  let days = 0;
  days = Math.ceil((v - b) / (a - b)); // (총 높이 - 밤) / (낮 - 밤)
  return days;
}

console.log(solution(+a, +b, +v));
