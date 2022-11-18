"use strict";

function solution(input) {
  let answer = 0;
  let stack = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "(") {
      stack.push(input[i]);
    } else if (input[i] === ")") {
      stack.pop();
      if (input[i - 1] === "(") {
        // 바로 앞이 (이면 레이저라는 뜻
        answer += stack.length;
      } else {
        answer += 1;
      }
    }
  }
  return answer;
}

let input = "()(((()())(())()))(())";

console.log(solution(input));
