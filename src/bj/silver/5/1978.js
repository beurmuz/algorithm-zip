"use strict";

/**
 * 소수를 구하는 함수 prime을 따로 만들어서, 현재 값이 소수인지 아닌지를 판별한다.
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function prime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(inputs) {
  const n = +inputs.shift();
  const arr = inputs[0].split(" ").map((v) => +v);
  let answer = 0;

  for (let i = 0; i < n; i++) {
    if (prime(arr[i])) answer++;
  }
  return answer;
}
console.log(solution(inputs));
