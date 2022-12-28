"use strict";

let inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function solution(inputs) {
  inputs.pop();
  let arr = inputs;
  let answer = "";
  arr.map((v) => {
    let reverseV = v.split("").reverse().join("");
    if (v === reverseV) answer += "yes" + "\n";
    else answer += "no" + "\n";
  });
  return answer;
}
console.log(solution(inputs));
