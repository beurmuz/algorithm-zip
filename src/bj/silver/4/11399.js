"use strict";

// 최소시간 구하기 문제, 최소 시간순서로 정렬 후 구하면 됨
let [N, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let arr = ("" + input)
  .split(" ")
  .map((v) => +v)
  .sort((a, b) => a - b);
let answer = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j <= i; j++) {
    answer += arr[j];
  }
}
console.log(answer);
