"use strict";

function count(arr, capacity) {
  let count = 1;
  let sum = 0;
  for (let x of arr) {
    if (sum + x > capacity) {
      // 용량을 초과하면 새롭게 x부터 누적합 시작
      count++;
      sum = x;
    } else {
      sum += x;
    }
  }
  return count;
}

function solution(arr, m) {
  let answer = 0;
  let min = Math.max(...arr); // dvd의 최소 용량
  let max = arr.reduce((a, b) => a + b); // dvd의 최대 용량 (누적합)

  while (min <= max) {
    let limit = Math.floor((min + max) / 2); // dvd 한 장의 용량
    if (count(arr, limit) <= m) {
      answer = limit;
      max = limit - 1;
    } else {
      min = limit + 1;
    }
  }
  return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(arr, 4));
