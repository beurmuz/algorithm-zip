"use strict";

function solution(n, str) {
  let arr = str.split(" ").map((v) => +v);
  let answer = 0;
  let max = 0;

  for (let i = 0; i < n; i++) {
    let sum = 0;
    let tmp = arr[i];
    while (tmp) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }
    if (sum > max) {
      max = sum;
      answer = arr[i];
    } else if (sum === max) {
      answer = answer > arr[i] ? answer : arr[i];
    }
  }
  return answer;
}
let str = "128 460 603 40 521 137 123";
console.log(solution(7, str));
