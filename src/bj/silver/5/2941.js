"use strict";

let input = require("fs").readFileSync("/dev/stdin").toString().trim();
const croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

function solution(input) {
  for (let alpha of croatia) {
    input = input.split(alpha).join("0");
  }

  return input.length;
}

console.log(solution(input));
