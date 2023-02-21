"use strict";

/**
 * dp (dynamic Programming) 문제
 * - S2. 11053랑 비슷한 문제이다.
 * - 이 문제는 증가하는 수열 + 감소하는 수열의 길이의 합으로 풀면 된다.
 */
const [n, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (n, inputs) => {
  const input = inputs[0].split(" ").map(Number);
  const upDP = Array.from({ length: n }, () => 0); // 증가하는 dp
  const downDP = Array.from({ length: n }, () => 0); // 감소하는 dp

  // 1. 증가하는 수열의 DP구하기
  // 현재 index, 이전 index를 비교하며 현재 index값이 비교하는 index 값보다 큰 경우, 현재 count값과 비교 index의 upDP+1을 비교하여 큰 값을 count로 갱신한다.
  for (let i = 0; i < n; i++) {
    let count = 1;
    for (let j = 0; j < i; j++) {
      if (input[i] > input[j]) count = Math.max(count, upDP[j] + 1);
    }
    upDP[i] = count;
  }

  // 2. 감소하는 수열의 DP구하기
  // 현재 index, 이후의 index를 비교하며 현재 index값이 비교하는 index 값보다 큰 경우, 현재 count값과 비교 index의 downDP+1을 비교하여 큰 값을 count로 갱신한다.
  for (let i = n - 1; i >= 0; i--) {
    let count = 1;
    for (let j = i + 1; j < n; j++) {
      if (input[i] > input[j]) count = Math.max(count, downDP[j] + 1);
    }
    downDP[i] = count;
  }
  return (
    Math.max(...upDP.map((upDPValue, index) => upDPValue + downDP[index])) - 1
  );
};

console.log(solution(+n, inputs));
