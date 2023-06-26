"use strict";

/**
 * [투 포인터 문제]
 * - 문제 풀이법을 제대로 이해하지 못했다.
 * - https://tesseractjh.tistory.com/297
 * - i와 j를 0에 둔 채 j를 증가시키면서 countMap에 각 숫자들이 등장한 횟수를 갱신한다.
 */
const [N, K, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map((v) => +v);

const solution = (N, K, arr) => {
  const countMap = {};
  let maxLength = 0;
  let i = 0;
  let j = 0;

  while (j >= i && j < N) {
    while (countMap[arr[j]] === K) {
      countMap[arr[i]]--;
      i++;
    }
    maxLength = Math.max(maxLength, j - i + 1);
    countMap[arr[j]] = (countMap[arr[j]] ?? 0) + 1;
    j++;
  }

  return maxLength;
};

console.log(solution(N, K, arr));
