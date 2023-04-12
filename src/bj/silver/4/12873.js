"use strict";

const n = require("fs").readFileSync("/dev/stdin").toString().trim();

/**
 * 처음에 푼 풀이
 * - slice를 이용해서 index값을 빼고 붙여 순서를 바꿔줬더니 메모리 초과문제가 발생했다.
 *
 * => 😀 문제를 해결하려면.. 시작점을 어떻게 index + 1 지점으로 옮기지?
 */
const solution_fail = (n) => {
  let term = 1;
  let circleQueue = Array.from({ length: n }, (_, index) => ++index);

  // 한명이 남으려면 n-1까지 반복해야 한다.
  for (let i = 0; i < n - 1; i++) {
    let index = (Math.pow(term, 3) % circleQueue.length) - 1; // 제거될 사람의 index를 찾는다.
    circleQueue = [
      ...circleQueue.slice(index + 1, circleQueue.length),
      ...circleQueue.slice(0, index),
    ];
    term++;
  }
  return circleQueue[0];
};

// 최종 풀이
const solution = (n) => {
  let start = 0;
  let circleQueue = Array.from({ length: n }, (_, index) => ++index);

  // 한명이 남으려면 n-1까지 반복해야 한다.
  for (let i = 1; i < n; i++) {
    let index = Math.pow(i, 3) % circleQueue.length; // 제거될 사람의 index를 찾는다.
    index = (index + start - 1) % circleQueue.length; // 이전의 시작점부터 연산될 수 있도록 한다.
    if (index < 0) index += circleQueue.length; // 만약 음수가 되면 circleQueue.length 만큼 더해준다.
    circleQueue.splice(index, 1); // 백준이 앞에 있는 원소를 삭제하고,
    start = index; // 새로운 index 지점을 시작점으로 바꿔준다.
  }
  return circleQueue[0];
};

console.log(solution(+n));
