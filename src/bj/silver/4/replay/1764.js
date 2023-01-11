"use strict";

const [n, m, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/);

const solution = (n, m, inputs) => {
  const nameMap = new Map();
  const answer = [];

  inputs.map((name) => {
    // map을 빠르게 만드는 방법
    nameMap.set(name, (nameMap.get(name) || 0) + 1); // name을 key값으로 하여 만약 기존 name이 있다면 그 값에 + 1을, 없으면 0+1을 한다.
  });

  for (let [name, count] of nameMap) {
    if (count > 1) answer.push(name);
  }
  console.log(answer.length);
  console.log(answer.sort().join("\n"));
};

solution(+n, +m, inputs);
