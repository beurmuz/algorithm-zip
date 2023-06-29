"use strict";

/**
 * [stack 문제]
 * - stack의 길이를 이용해 푸는 문제이다. 생각보다 어려운 스택..
 * cf. (https://velog.io/@thguss/%EB%B0%B1%EC%A4%80-6198.-%EC%98%A5%EC%83%81-%EC%A0%95%EC%9B%90-%EA%BE%B8%EB%AF%B8%EA%B8%B0-with.-Python)
 */
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (input) => {
  const N = +input[0];
  const stack = [];
  let answer = 0;

  for (let i = 1; i <= N; i++) {
    const num = +input[i];
    while (stack.length !== 0 && stack[stack.length - 1] <= num) {
      stack.pop();
    }
    stack.push(num);
    answer += stack.length - 1;
  }
  return answer;
};

console.log(solution(input));
