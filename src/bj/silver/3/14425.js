"use strict";

const [values, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (values, input) => {
  const [n, m] = values.split(" ").map((v) => +v);
  const list = input.slice(0, n);
  const candidate = input.slice(n);
    const listSet = new Set(list);

    let answer = 0;
    candidate.forEach((word) => {
        if(listSet.has(word)) answer++;
    })
    return answer;
};

console.log(solution(values, input));
