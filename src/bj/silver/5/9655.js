"use strict";

const n = require("fs").readFileSync("/dev/stdin").toString();

const solution = (n) => {
  const sol = (n) => {
    return n % 2 === 0 ? "CY" : "SK";
  };
  return sol(n);
};

console.log(solution(+n));
