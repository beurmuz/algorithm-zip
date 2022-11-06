"use strict";

function solution(arr) {
  let answer = [];

  // 회의 종료 시간 기준으로 정렬
  arr.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });

  // 종료 시간보다 크거나 같은 시간만 찾기
  let pivot = 0;
  for (let [start, end] of arr) {
    if (start >= pivot) {
      answer.push([start, end]);
      pivot = end;
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
