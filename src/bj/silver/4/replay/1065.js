"use strict";

const n = require("fs").readFileSync("/dev/stdin").toString();
const solution = (n) => {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (i < 100) {
      answer++;
      continue;
    }
    let nStr = i + "";
    let a = +nStr[0] - +nStr[1];
    let b = +nStr[1] - +nStr[2];

    if (a === b) answer++;
  }
  return answer;
};

console.log(solution(+n));
