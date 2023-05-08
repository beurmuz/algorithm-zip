"use strict";

/**
 * 처음에 0~n-1까지의 for문 안에서 0~k번 for문을 돌렸다. -> 틀렸다고 나옴
 * 슬라이딩 윈도우로 풀었더니 더 간단하고 빠르게 답을 구할 수 있었다. => 정답!
 */
const [n, k, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map((v) => +v);

const solution = (n, k, arr) => {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }

  let index = 0;
  let max = sum;
  for (let i = k; i < n; i++) {
    sum += arr[i]; // 새로운 수 더하고
    sum -= arr[index++]; // 맨 앞 수 빼고
    max = Math.max(max, sum);
  }
  return max;
};

console.log(solution(n, k, arr));
