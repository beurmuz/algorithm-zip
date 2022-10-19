"use strict";

function solution(arr) {
  let answer = new Set(arr); // set으로 중복 제거 후
  console.log([...answer]); // set을 배열 형태로 바꾸어 출력한다.
}

let arr = ["good", "time", "good", "time", "student"];
console.log(solution(arr));
