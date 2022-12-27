"use strict";

let n = require("fs").readFileSync("/dev/stdin").toString() * 1;

function solution(n) {
  for (let i = 1; i <= n; i++) {
    // repeat으로 n-i번, i번 반복하여 출력하기
    console.log(" ".repeat(n - i) + "*".repeat(i));
  }
}

solution(n);
