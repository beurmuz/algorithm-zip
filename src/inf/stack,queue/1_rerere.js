"use strict";

function solution(s) {
  let answer = "NO";
  let stack1 = [];
  let stack2 = [];

  for (let x of s) {
    if (x === "(") stack1.push("(");
    else stack2.push(")");
  }

  answer = stack1.length === stack2.length ? "YES" : "NO";
  return answer;
}

let a = "(())()";
console.log(solution(a));
