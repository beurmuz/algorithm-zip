"use strict";

function solution(m, arr) {
  let dy = Array.from({ length: m + 1 }, () => 0); // 시간만큼 배열 생성

  for (let [score, time] of arr) {
    for (let i = m; i >= time; i--) {
      // 감소하면서 푸는 이유? 증가하면서 풀면 5분이 주어졌을 때 10점을 얻을 수 있고, 10분 주어지면 (10+10) 20점을 얻을 수 있다가 됨 => 즉 같은 문제를 중복해서 풀게된다는 것
      // dy[i]: i분 동안 얻을 수 있는 최대 점수
      dy[i] = Math.max(dy[i], dy[i - time] + score);
    }
    // console.log(`${score}점 문제까지 풀 수 있는 경우: ${[...dy]}`);
  }
  return dy[m];
}

let arr = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];
console.log(solution(20, arr));
