"use strict";

const n = require("fs").readFileSync("/dev/stdin").toString().trim();

const solution = (n) => {
  let answer = 0;
  if (n === 1 || n === 3) return -1; // 거슬러줄 수 없으므로 -1을 출력한다.

  while (n > 0) {
    if (n % 2 === 1 || n % 5 === 0) {
      // n이 2로 나누었을 때의 나머지가 1이거나, 5로 나누었을 때의 나머지가 0인 경우
      answer += 1;
      n -= 5;
    } else if (n % 2 === 0) {
      // 2로 나누었을 때의 나머지가 0이라면
      answer += 1;
      n -= 2;
    }
  }
  return answer;
};

console.log(solution(+n));
