"use strict";

/**
 * 입력된 값이 5^n일 때마다 0의 개수는 n개 만큼 추가된다.
 */
const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const solution = (input) => {
  let answer = 0;
  if (input < 5) return 0;

  while (input >= 5) {
    answer += parseInt(input / 5);
    input /= 5;
  }
  return answer;
};

console.log(solution(+input));
