"use strict";

/**
 * [이분 탐색]
 * - 여러 값들이 주어지고 ~에 근접한 최대 or 최솟값을 구하라고 하면 이분탐색을 떠올리자!
 * 이분탐색은 반드시 정렬이 된 상태에서 이루어져야 한다.
 */

const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (inputs) => {
  const N = +inputs[0];
  const arr = inputs[1]
    .split(" ")
    .map((v) => +v)
    .sort((a, b) => a - b); // 정렬은 필수
  const total = +inputs[2];
  let answer = -1;

  const [lt, rt] = [0, arr[N - 1]]; // 최소, 최댓값

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2); // 중간값을 구한다.

    let possible = 0; // 상한액이 mid이고, 이 상한액을 기준으로 가능한 총합을 구해본다.
    for (let num of arr) {
      if (num > mid) possible += mid; // 상한액보다 크면, 상한액만큼만 더해준다.
      else possible += x; // 상한액보다 작으면, 그 값 그대로 더해준다.
    }

    if (possible <= total) {
      // 가능한 총합이 실제 총합(total)보다 작으면,
      if (mid > answer) answer = mid; // 만약 mid가 answer보다 크면 answer를 새롭게 갱신한다.
      lt = mid + 1; // lt를 mid+1로 바꿔준다.
    } else {
      rt = mid - 1; // rt를 mid-1로 바꿔준다.
    }
  }
  return answer;
};

console.log(solution(inputs));
