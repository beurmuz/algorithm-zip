"use strict";

let inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function solution(inputs) {
  let testcase = +inputs.shift();
  for (let i = 0; i < testcase; i++) {
    let [n, alphabets] = inputs[i].split(" ");
    let result = "";
    for (let x of alphabets) {
      result += x.repeat(n); // repeat을 이용해서 n만큼 반복한 후 그 값을 result에 더해준다.
    }
    console.log(result);
  }
}
solution(inputs);
