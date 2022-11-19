"use strict";

function solution(input) {
  let answer = 0;
  let stack = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "(") stack.push("(");
    else if (input[i] === ")") {
      stack.pop();
      if (input[i - 1] === "(") answer += stack.length;
      else answer += 1; // ')'인 경우 한 막대기가 끝난 것이므로 +1
    }
  }
  return answer;
}

console.log(solution("(((()(()()))(())()))(()())"));
