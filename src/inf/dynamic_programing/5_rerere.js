"use strict";

function solution(m, arr) {
  let answer = 0;
  let dy = Array.from({ length: m + 1 }, () => 0);

  for (let [score, time] of arr) {
    for (let i = m; i >= time; i--) {
      dy[i] = Math.max(dy[i], dy[i - time] + score);
    }
  }
  return dy[m];
}

let arr = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
]; // [점수, 시간]
console.log(solution(20, arr));
