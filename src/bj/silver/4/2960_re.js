"use strict";

let [n, k] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

let arr = [];
let count = 0;

// 1~n까지의 배열 생성
for (let i = 0; i <= n; i++) {
  arr.push(i);
}

for (let i = 2; i <= n; i++) {
  for (let j = i; j <= n; j += i) {
    // j는 i배수씩 증가
    // console.log(arr);
    if (arr[j] === 0) continue; //
    arr[j] = 0;
    count += 1;
    if (count == k) {
      // k번째로 지워지는(0이되는) 경우
      console.log(j);
      break;
    }
  }
}
