"use strict";

// 처음에 제출한 코드
/*
    pow한 후에 10으로 나누게되면, (7, 100)은 시간초과가 발생하기도 하고 경우에 따라 NaN값이 나오기도 한다.
    생각해보면 매 값을 제곱해줄 때마다 %10을 해주면 그 값은 늘 같게 나온다는 점을 활용하면 시간 초과 문제를 해결할 수 있다.
*/
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const T = input.shift("") * 1;

const result = input.map((v) => {
  const [a, b] = v.split(" ");
  let value = Math.pow(a, b);
  return value % 10 === 0 ? 10 : value % 10;
});
console.log(result.join("\n"));

// 최종 제출 코드
input.map((v) => {
  const [a, b] = v.split(" ");
  let pow = 1;
  for (let i = 0; i < b; i++) {
    pow = (pow * a) % 10; // 10으로 나눈 나머지 값(1의 자리)는 항상 같다
  }
  console.log(pow === 0 ? 10 : pow);
});
