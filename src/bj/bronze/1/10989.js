"use strict";

/**
 * 정답률도 낮고 뭔가 메모리 초과가 발생할 것 같아 찾아보니, JS로 풀 수 없다고 한다.
 * 일단 정답 코드는 작성해보았다.
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

function solution(inputs) {
  let n = inputs.shift();
  let input = inputs.sort((a, b) => a - b);
  let answer = "";
  for (let i = 0; i < n; i++) {
    answer += input[i] + "\n";
  }
  return answer.trim();
}

console.log(solution(inputs));
