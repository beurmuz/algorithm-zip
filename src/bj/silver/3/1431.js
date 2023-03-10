"use strict";

const [N, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const sum = (str) => {
  return str.match(/[\d]/g)?.reduce((a, c) => a + +c, 0) || 0;
};

const solution = (N, input) => {
  const answer = input.sort((a, b) => {
    if (a.length != b.length) return a.length - b.length;
    let sum1 = sum(a),
      sum2 = sum(b);
    if (sum1 == sum2) return a.localeCompare(b);
    return sum1 - sum2;
  });
  return answer.join("\n");
};

console.log(solution(N, input));
