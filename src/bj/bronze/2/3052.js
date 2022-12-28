"use strict";

/**
 * 문제 풀이
 * 1) 42로 나눈 나머지 구하기
 * 2) new Set()으로 중복 제거한 후, set의 size return
 */
let inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

function solution(inputs) {
  let rests = [];
  for (let x of inputs) {
    rests.push(x % 42);
  }
  let answer = new Set(rests);
  return answer.size;
}

console.log(solution(inputs));
