"use strict";

const [N, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map((v) => +v);

const solution = (N, arr) => {
  let answer = arr
    .map((num) => {
      return Number(num.split("").reverse().join(""));
    })
    .sort((a, b) => a - b);
  return answer.join("\n");
};

console.log(solution(N, arr));
