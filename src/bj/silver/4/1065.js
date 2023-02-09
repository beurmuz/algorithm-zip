"use strict";

const n = require("fs").readFileSync("/dev/stdin").toString();
const solution = (n) => {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    let nString = String(i);
    if (i < 100) {
      answer++;
      continue;
    }
    let a = +nString[0] - +nString[1];
    let b = +nString[1] - +nString[2];
    if (a === b) {
      answer++;
    }
  }
  return answer;
};

console.log(solution(+n));
