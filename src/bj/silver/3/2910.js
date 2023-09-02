"use strict";

/**
 * [정렬 문제]
 * - 시간복잡도를 결정하는 것은 N. N의 최댓값은 10^3이므로 O(n^2)까지 가능하다.
 */

const [N, C, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map((v) => +v);

const solution = (N, C, arr) => {
  let answer = [];
  const countEl = new Map();

  // map으로 각 원소의 빈도수를 센다.
  for (let i = 0; i < N; i++) {
    if (countEl.has(arr[i])) countEl.set(arr[i], countEl.get(arr[i]) + 1);
    else countEl.set(arr[i], 1);
  }

  // map을 배열로 만들어준다.
  const countArr = [];
  for (let [key, value] of countEl) {
    countArr.push([key, value]);
  }

  // value값이 큰 순서대로 정렬한다.
  countArr.sort((a, b) => {
    if (a[0] === b[0])
      return a[1] - b[1]; // 카운트가 같다면 인덱스 순으로 정렬한다.
    else return b[1] - a[1]; // 카운트가 큰 순서로 정렬하기
  });

  for (let [key, value] of countArr) {
    for (let i = 0; i < value; i++) {
      answer.push(key);
    }
  }
  return answer.join(" ");
};

console.log(solution(N, C, arr));
