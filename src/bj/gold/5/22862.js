"use strict";

/**
 * [투 포인터]
 * - 문제는 쉬운듯 했으나, 정답 풀이는 그게 아니었던 문제이다.
 * - 홀수인 경우가 k개이하로 포함되도록 하는 부분수열의 최대길이를 구하는 문제
 */

const [N, K, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map((v) => +v);

const solution = (N, K, arr) => {
  let answer = 0;
  let count = 0;
  let left = 0;

  for (let right = 0; right < N; right++) {
    if (arr[right] % 2 === 1) count++;

    while (count > K) {
      if (arr[left] % 2 === 1) count--;
      left++;
    }
    if (count <= K) answer = Math.max(answer, right - left - count + 1);
  }
  return answer;
};

console.log(solution(N, K, arr));
