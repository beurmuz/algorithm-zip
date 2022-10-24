"use strict";

function solution(m, arr) {
  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    let tmp = 0;
    for (let j = i; j < arr.length; j++) {
      tmp += arr[j];
      if (tmp > m) break;
      if (tmp === m) answer++;
    }
  }
  return answer;
}

let arr = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, arr));
