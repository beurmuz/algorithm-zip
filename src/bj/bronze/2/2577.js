"use strict";

let inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function solution(inputs) {
  let sum = "" + inputs.reduce((acc, v) => acc * +v, 1);
  let result = Array.from({ length: 10 }, () => 0); // 길이가 10인 배열을 만들어 후에 각 숫자의 개수를 세서 저장한다.
  for (let x of sum) {
    result[x]++; // x를 인덱스로 갖는 배열의 값을 1 증가시킨다.
  }
  for (let x of result) {
    console.log(x);
  }
}
solution(inputs);
