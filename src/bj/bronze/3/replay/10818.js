"use strict";

let [n, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function solution(n, inputs) {
  let arr = inputs[0].split(" ").map((v) => +v);
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  console.log(min + " " + max);
}
solution(n, inputs);
