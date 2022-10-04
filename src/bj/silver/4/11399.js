"use strict";

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
