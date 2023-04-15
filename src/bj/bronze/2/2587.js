"use strict";

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (input) => {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    sum += Number(input[i]);
  }

  const sorted = input.sort((a, b) => a - b);

  console.log(hap / input.length);
  console.log(sorted[2]);
};

solution(input);
