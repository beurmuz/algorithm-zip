"use strict";

function count(arr, dist) {
  let count = 1;
  let ep = arr[0]; // 가장 최근에 들어간 말의 위치
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - ep >= dist) {
      // 거리 계산
      count++;
      ep = arr[i]; // 여기에 말을 배치함
    }
  }
  return count;
}

function solution(c, arr) {
  let answer = 0;
  arr.sort((a, b) => a - b); // 마구간 정렬

  let min = arr[1] - arr[0]; // 두 말 사이의 최소 거리
  let max = arr[arr.length - 1];
  while (min <= max) {
    let dist = Math.floor((min + max) / 2);
    if (count(arr, dist) >= c) {
      answer = dist;
      min = dist + 1;
    } else {
      max = dist - 1;
    }
  }
  return answer;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));
