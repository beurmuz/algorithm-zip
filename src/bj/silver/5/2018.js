"use strict";

/**
 * 투포인터 문제
 */
const n = require("fs").readFileSync("/dev/stdin").toString().trim();

const solution = (n) => {
  let answer = 0;

  let sum = 1;
  let [lt, rt] = [1, 1];
  while (lt <= rt) {
    answer += sum === n ? 1 : 0;
    if (sum < n) {
      rt++;
      sum += rt;
    } else {
      sum -= lt;
      lt++;
    }
  }
  return answer;
};

console.log(solution(+n));
