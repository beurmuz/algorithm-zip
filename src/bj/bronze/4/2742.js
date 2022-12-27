"use strict";

/**
 * 1. 처음에 푼 풀이
 * - 시간초과 났다
 */
let n = require("fs").readFileSync("/dev/stdin").toString().trim() * 1;

function solution(n) {
  for (let i = n; i > 0; i--) {
    console.log(i);
  }
}
solution(n);

/**
 * 2. 다시 푼 풀이
 * 변수 만들고, 문자열 형태로 다 더한 뒤에 출력했다
 */

function solution(n) {
  let answer = "";
  for (let i = n; i > 0; i--) {
    answer += i + "\n";
  }
  return answer;
}
console.log(solution(n));
