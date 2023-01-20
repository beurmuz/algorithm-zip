"use strict";

/**
 * 그냥 반복문으로 start ~ end까지 합을 구하면 시간초과가 발생한다.
 * 그래서 sumArr를 만들어서 end-start까지의 값을 계산하면 된다.
 */
const [values, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (values, inputs) => {
  const [n, m] = values.split(" ").map(Number);
  const numbers = inputs.shift().split(" ").map(Number);
  const answer = [];
  const sumArr = Array.from({ length: n + 1 }, () => 0);
  numbers.forEach((v, i) => {
    sumArr[i + 1] = sumArr[i] + v;
  });

  for (let i = 0; i < m; i++) {
    let [start, end] = inputs[i].split(" ").map(Number);
    answer.push(sumArr[end] - sumArr[start - 1]);
  }
  return answer.join("\n");
};

console.log(solution(values, inputs));
