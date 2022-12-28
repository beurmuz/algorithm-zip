"use strict";

let [n, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function solution(n, inputs) {
  let arr = inputs[0].split("");
  let sum = 0;
  for (let x of arr) {
    sum += +x;
  }
  return sum;
}
console.log(solution(n, inputs));
