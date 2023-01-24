"use strict";

const [inputs, ...values] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (inputs, values) => {
  const [n, m] = inputs.split(" ").map(Number);
  const passwordMap = new Map();
  for (let i = 0; i < n; i++) {
    let [site, password] = values[i].split(" ");
    passwordMap.set(site, password);
  }

  const answer = [];
  let questionIndex = n;
  for (let i = questionIndex; i < questionIndex + m; i++) {
    answer.push(passwordMap.get(values[i]));
  }
  return answer.join("\n");
};

console.log(solution(inputs, values));
