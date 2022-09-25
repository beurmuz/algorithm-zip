"use strict";

let input = require("fs").readFileSync("/dev/stdin").toString().trim();
let addN = 0;
let count = 0;
let N = +input;
let isNotSame = true;
while (isNotSame) {
  addN = Math.floor(N / 10) + (N % 10); // 자릿수 더하기
  N = (N % 10) * 10 + (addN % 10); // input의 가장 오른쪽 값**10 + 새로 구한 수의 가장 오른쪽 값
  count++;
  if (N == input) {
    console.log(count);
    isNotSame = false;
  }
}
