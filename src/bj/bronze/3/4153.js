"use strict";

/**
 * 중요한 건 어떤 테스트케이스가 들어올 지 모르니,
 * 반드시 들어온 세 변에 대해 오름차순으로 정렬해주어야 한다.
 */
let inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function solution(inputs) {
  inputs.pop();
  inputs.map((v) => {
    let [a, b, c] = v.split(" ").sort((a, b) => a - b);
    if (a ** 2 + b ** 2 === c ** 2) console.log("right");
    else console.log("wrong");
  });
}

solution(inputs);
