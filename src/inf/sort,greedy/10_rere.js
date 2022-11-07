"use strict";

function solution(arr, m) {
  let answer = 0;
  arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (m === arr[mid]) {
      answer += mid + 1;
      break;
    } else if (m < arr[mid]) right = mid + 1;
    else left = mid + 1;
  }
  return answer;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(arr, 32));
