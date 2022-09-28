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
  answer += x;
}

console.log(answer);
