"use strict";

/**
 * 문제를 읽은 그대로 풀면 되는 문제였다.
 * 그치만 나는 answer %= m을 이해하지 못했었고..
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function solution(inputs) {
  let n = +inputs.shift();
  let arr = inputs[0].split("");
  let answer = 0;
  const alpha = "0abcdefghijklmnopqrstuvwxyz".split("");
  const m = 1234567891;
  let r = 1; // r은 31의 제곱으로, 31^0이 1이니 1로 초기화 해놓는다.

  for (let i = 0; i < n; i++) {
    answer += alpha.indexOf(arr[i]) * r;
    r *= 31; // 처음 31^0 후 31을 계속 제곱해 만들어야 한다.
    r %= m; // r이 m보다 커지는 것을 막기 위해 r을 곱하고, m으로 나눈 나머지로 r을 계속 바꾼다.
    answer %= m; // 해싱함수 식에서 시그마를 다 해준 후 m으로 나눈 나머지를 hash로 두라고 했기에 answer를 m으로 나눈 나머지를 answer에 저장한다.
  }
  return answer;
}
console.log(solution(inputs));
