"use strict";

const [N, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" "));

const solution = (N, input) => {
  let answer = [];
  let company = new Map(input.map((v) => [v[0], v[1]]));

  for (let key of company.keys()) {
    if (company.get(key) !== "leave") answer.push(key);
  }
  answer = answer.sort().reverse();
  return answer.join("\n");
};

console.log(solution(N, input));
