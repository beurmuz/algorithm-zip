"use strict";

let inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

function solution(inputs) {
  let maxValue = -1;
  let maxIndex = -1;

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i] > maxValue) {
      maxValue = inputs[i];
      maxIndex = i;
    }
  }
  console.log(maxValue);
  console.log(maxIndex + 1);
}
solution(inputs);
