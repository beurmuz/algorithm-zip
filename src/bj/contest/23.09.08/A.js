"use strict";

const [N, U, L] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

const solution = (N, U, L) => {
  let conditionSet = new Set();

  if (N >= 1000) conditionSet.add("1");
  if (U >= 8000 || L >= 260) conditionSet.add("2");

  if (conditionSet.size === 2) return "Very Good";
  else {
    if (conditionSet.size === 1 && conditionSet.has("1")) return "Good";
    else return "Bad";
  }
};

console.log(solution(N, U, L));
