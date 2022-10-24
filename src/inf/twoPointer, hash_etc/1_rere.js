"use strict";

function solution(arr1, arr2) {
  let arr = arr1.concat(arr2);
  return arr.sort((a, b) => a - b);
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
