"use strict";

function solution(expression) {
  const prior = [
    ["-", "*", "+"],
    ["-", "+", "*"],
    ["*", "-", "+"],
    ["*", "+", "-"],
    ["+", "*", "-"],
    ["+", "-", "*"],
  ];
  let candidate = [];

  for (let operators of prior) {
    const temp = expression.split(/(\D)/);
    for (let op of operators) {
      while (temp.includes(op)) {
        const index = temp.indexOf(op);
        temp.splice(
          index - 1,
          3,
          eval(temp.slice(index - 1, index + 2).join(""))
        );
      }
    }
    candidate.push(Math.abs(temp[0]));
  }
  return Math.max(...candidate);
}

console.log(solution("100-200*300-500+20"));
