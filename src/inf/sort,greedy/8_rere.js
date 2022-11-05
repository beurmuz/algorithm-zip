"use strict";

function solution(arr) {
  let answer = [];

  arr.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });

  let endTime = 0;
  for (let x of arr) {
    if (x[0] >= endTime) {
      answer.push(x);
      endTime = x[1];
    }
  }
  return answer.length;
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
console.log(solution(arr));
