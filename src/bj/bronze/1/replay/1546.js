"use strict";

let [n, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let inputs = input[0].split(" ").map((v) => +v);

function solution(n, inputs) {
  let m = Math.max(...inputs); // 최댓값

  let newScore = inputs.reduce((acc, score) => acc + (score / m) * 100, 0); // acc에 각 점수를 누적합한다.
  return newScore / n; // 평균은 총합/n
}

console.log(solution(n, inputs));
