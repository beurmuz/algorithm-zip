"use strict";

const input = +require("fs").readFileSync("/dev/stdin").toString().trim();
let answer = 0;
let num = 1;
let d = 10;
let s = 1;

while (num <= input) {
  if (Math.floor(num / d) === 0) {
    console.log(`${num}/${d} == 0`);
    num++;
    answer += s;
  } else {
    // 10으로 나누어 떨어질 경우 자릿수가 증가했다는 뜻
    d = d * 10;
    s++; // 자릿수를 하나 늘려서 저장
  }
}

console.log(answer);
