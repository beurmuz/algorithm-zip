"use strict";

function solution(s) {
  let stack = [];
  let count = 0;

  for (let x of s) {
    if (x === "(") count++;
    else if (x === ")") count--;
    else if (count === 0) stack.push(x);
  }

  return stack.join("");
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
