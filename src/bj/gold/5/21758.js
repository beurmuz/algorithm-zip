"use strict";

/**
 * [그리디 문제]
 * - 꿀통과 벌들을 어디에 위치시키느냐에 따라 for문을 나눠 순회하면 된다.
 */
const [N, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map((v) => +v);

const solution = (N, arr) => {
  const sum = Array.from({ length: N + 1 }, () => 0);
  let answer = 0;

  arr.unshift(0); // arr 맨 앞에 0을 추가해준다.

  for (let i = 1; i <= N; i++) {
    sum[i] = arr[i] + sum[i - 1];
  }

  // 1. 꿀통 - 벌 - 벌인 경우
  // : 꿀통을 맨 왼쪽, 두번째 벌을 맨 오른쪽에 고정시킨채 가운데 벌을 움직이며 최대합을 찾는다.
  for (let i = 2; i < N; i++) {
    answer = Math.max(answer, sum[N] - arr[N] - arr[i] + sum[i - 1]);
  }

  // 2. 벌 - 꿀통 - 벌
  for (let i = 2; i < N; i++) {
    answer = Math.max(answer, sum[N] - arr[1] - arr[i] + sum[N] - sum[i]);
  }

  // 3. 벌 - 벌 - 꿀통
  for (let i = 2; i < N; i++) {
    answer = Math.max(answer, sum[i] - arr[1] + sum[N] - sum[i - 1] - arr[N]);
  }
  return answer;
};

console.log(solution(N, arr));
