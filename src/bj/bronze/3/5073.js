"use strict";

/**
 *
 */

const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (inputs) => {
  inputs.pop();
  const answer = inputs.map((line) => {
    const arr = line
      .split(" ")
      .map((v) => +v)
      .sort((a, b) => a - b);

    if ((arr[0] === 0) & (arr[1] === 0) & (arr[2] === 0)) {
    } else if (arr[2] >= arr[0] + arr[1]) {
      return "Invalid";
    } else if (arr.every((i) => i === arr[0])) {
      return "Equilateral";
    } else if (arr[0] !== arr[1] && arr[0] !== arr[2] && arr[1] !== arr[2]) {
      return "Scalene";
    } else if (arr[0] ^ arr[1] ^ arr[2]) {
      return "Isosceles";
    } else if (arr[0] !== arr[1] && arr[0] !== arr[2] && arr[1] !== arr[2]) {
      return "Scalene";
    }
  });

  return answer.join("\n").trim();
};

console.log(solution(inputs));
