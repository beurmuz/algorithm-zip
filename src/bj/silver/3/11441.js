"use strict";

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (input) => {
  const N = +input[0];
  const M = +input[2];
  const terms = input[1].split(" ").map((v) => +v);
  const sum = Array.from({ length: M }, () => 0);

  for (let m = 0; m < M; m++) {
    let [a, b] = input[m + 3].split(" ").map((v) => +v); // i~j를 구해서

    for (let i = a; i <= b; i++) {
      sum[m] += terms[i - 1]; // 해당 범위에 맞게 sum에 누적합한다.
    }
  }
  const answer = sum.join("\n");
  return answer;
};

console.log(solution(input));
