"use strict";

const input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const solution = (input) => {
  const numbers = input[1].split(" ").sort((a, b) => a - b);
  const maxnum = Math.max(...numbers);
  const minnum = Math.min(...numbers);
  let result = 0(numbers.length >= 2)
    ? (result = maxnum * minnum)
    : (result = minnum * minnum);
  return result;
};

console.log(solution(input));
