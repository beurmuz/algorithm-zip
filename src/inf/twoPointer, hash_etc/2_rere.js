"use strict";

function solution(arr1, arr2) {
  let arr = arr1.concat(arr2).sort((a, b) => a - b);
  let answer = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) answer.add(arr[i]);
  }
  return [...answer].join(" ");
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
