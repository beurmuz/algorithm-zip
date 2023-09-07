"use strict";

/**
 * [투포인터 문제]
 * - 투포인터, 이분탐색은 항상 정렬부터 하고 풀어야한다.
 */

const [N, M, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map((v) => +v);

const solution = (N, M, arr) => {
  arr.sort((a, b) => a - b);
  let minDiff = Number.MAX_SAFE_INTEGER;
  let [lt, rt] = [0, 0];

  while (lt <= rt && rt < N) {
    let nowDiff = arr[rt] - arr[lt];
    if (nowDiff < M) {
      rt++;
    } else {
      // M보다 크거나 같은 경우
      minDiff = Math.min(minDiff, nowDiff); // 갱신
      lt++;
    }

    if (minDiff === M) break; // 차이가 M과 같다면 더 작은 차이가 없으므로 반복문을 종료한다.
  }
  return minDiff;
};

console.log(solution(N, M, arr));
