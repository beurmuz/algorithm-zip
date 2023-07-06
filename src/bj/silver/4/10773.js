"use strict";
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);
let n = input.shift();
let arr = [];
let answer = 0;
for (let i = 0; i < n; i++) {
  if (input[i] === 0) {
    arr.pop();
  } else {
    arr.push(input[i]);
  }
}

for (let x of arr) {
  // reduce를 쓰는 것보다 시간이 덜 소요된다.
  answer += x;
}

console.log(answer);
