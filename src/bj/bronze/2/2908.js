"use strict";

let [a, b] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

function solution(a, b) {
  let reverseA = +a.split("").reverse().join("");
  let reverseB = +b.split("").reverse().join("");

  return reverseA > reverseB ? reverseA : reverseB;
}
console.log(solution(a, b));
