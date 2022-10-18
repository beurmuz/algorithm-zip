"use strict";

const [N, M, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map((v) => +v);
let count = 0;
for (let i = 0; i < N; i++) {
  let sum = arr[i];
  let idx = i;
  while (sum < M && idx < N - 1) {
    idx++;
    sum += arr[idx];
  }
  if (sum === M) count++;
}
console.log(count);

// 수열을 순회하면서 인접한 수열의 합이 M 이상이 될 때까지 계속 더한 값이 정확히 M일때만 count로 세기
