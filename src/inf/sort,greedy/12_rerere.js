"use strict";

function count(arr, dist) {
  let count = 1;
  let latestPosition = arr[0]; // 가장 최근에 들어간 말의 위치
  for (let x of arr) {
    if (x - latestPosition >= dist) {
      count++;
      dist = x;
    }
  }
  return count;
}

function solution(c, arr) {
  let answer = 0;
  // 1. 마구간 정렬하기
  arr.sort((a, b) => a - b);

  let minDistance = arr[1] - arr[0];
  let maxDistance = arr[arr.length - 1];

  while (minDistance <= maxDistance) {
    let distance = Math.floor((minDistance + maxDistance) / 2);
    if (count(arr, distance) >= c) {
      answer = distance;
      minDistance = distance + 1;
    } else {
      maxDistance = distance - 1;
    }
  }
  return answer;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));
