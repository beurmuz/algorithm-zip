"use strict";

const [T, ...testcase] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (T, testcase) => {
  let answer = [];

  for (let t = 0; t < T; t++) {
    let nums = testcase[t]
      .split(" ")
      .map(Number)
      .sort((a, b) => b - a);
    answer.push(nums[2]);
  }
  return answer.join("\n");
};

console.log(solution(T, testcase));
