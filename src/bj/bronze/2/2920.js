"use strict";

let inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .join("");

function solution(inputs) {
  if (inputs === "12345678") return "ascending";
  else if (inputs === "87654321") return "descending";
  else return "mixed";
}

console.log(solution(inputs));
