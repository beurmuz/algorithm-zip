"use strict";

function count(arr, capacity) {
  let sum = 0;
  let count = 1;

  for (let x of arr) {
    if (sum + x > capacity) {
      count++;
      sum = x;
    } else {
      sum += x;
    }
  }
  return count;
}

function solution(arr, m) {
  let answer = 0; // 최소 용량
  let minCapacity = Math.max(...arr); // 최소 용량
  let maxCapacity = arr.reduce((sum, x) => sum + x);

  while (minCapacity <= maxCapacity) {
    let dvdCapacity = Math.floor((minCapacity + maxCapacity) / 2); // dvd 1장 용량
    if (count(arr, dvdCapacity) <= m) {
      answer = dvdCapacity;
      maxCapacity = dvdCapacity - 1;
    } else {
      minCapacity = dvdCapacity + 1;
    }
  }
  return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(arr, 4));
