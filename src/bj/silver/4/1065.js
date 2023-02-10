"use strict";

/**
 * n숫자만 계산하는 게 아니라, 1~n까지의 수를 찾는 문제이다.
 */
const n = require("fs").readFileSync("/dev/stdin").toString();
const solution = (n) => {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    let nString = String(i);
    if (i < 100) {
      answer++;
      continue;
    }
    let a = +nString[0] - +nString[1]; // 자릿 수 비교
    let b = +nString[1] - +nString[2]; // 자릿 수 비교
    if (a === b) {
      // 차이가 같으면 한수이다.
      answer++;
    }
  }
  return answer;
};

console.log(solution(+n));
