"use strict";

/**
 * 채점 결과가 X인 경우 문제 점수가 다시 0이 된다. => point!
 */
let [n, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function solution(inputs) {
  inputs.map((value) => {
    let sum = 0; // 총점을 저장할 변수
    let count = 0; // 문제당 점수를 저장할 변수
    for (let i = 0; i < value.length; i++) {
      if (value[i] === "X")
        count = 0; // 틀린 문제를 만나면 문제당 점수가 다시 0이 된다.
      else sum += ++count; // 그렇지 않은 경우 1점씩 계속 올라간 점수가 총점에 더해진다.
    }
    console.log(sum);
  });
}
solution(inputs);
