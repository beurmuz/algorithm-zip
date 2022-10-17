"use strict";

let input = require("fs").readFileSync("/dev/stdin").toString().trim();
const n = input.length;
let arr = [];

for (let i = 1; i <= n; i++) {
  for (let j = 0; j < n; j++) {
    if (j + i <= n) {
      arr.push(input.slice(j, j + i));
    }
  }
}

let answer = new Set(arr);
console.log(answer.size);

// 다른 풀이
const input = require("fs").readFileSync("/dev/stdin").toString().trim();
let strSet = new Set(); // 애초에 빈 set을 만들어줌

for (let i = 0; i < input.length; i++) {
  for (let j = i; j < input.length; j++) {
    // 중첩 for문으로 모든 경우의 수 구하기 (=> 완전 탐색)
    strSet.add(input.substring(i, j + 1)); // 만든 문자열 set에 추가하기 (이때, 중복되는 문자열은 추가되지 않음)
    // console.log(input.substring(i, j+1))
  }
}

console.log(strSet.size);

// slice, substring, splice는 모두 자르는 방법이 다르다
