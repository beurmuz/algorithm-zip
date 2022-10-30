"use strict";

function solution(arr) {
  let answer = [];
  let frontArr = [];
  let backArr = [];

  for (let x of arr) {
    if (x < 0) {
      frontArr.push(x);
    } else {
      backArr.push(x);
    }
  }

  answer = [...frontArr, ...backArr];
  return answer;
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
