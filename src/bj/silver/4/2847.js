"use strict";

/**
 * [그리디 문제]
 * - 어떤 기준으로 선행하는 수의 값을 줄여나가야할지 고민이었다.
 * - 방법은 간단했다. arr의 맨 뒤부터 순회하며, arr[i-1]이 arr[i]보다 크면 arr[i]-1을 해주면 된다.
 */
const [N, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map((v) => +v);

const solution = (N, arr) => {
  let answer = 0;

  for (let i = N - 1; i >= 0; i--) {
    if (arr[i - 1] >= arr[i]) {
      answer += arr[i - 1] - arr[i] + 1; // 몇번 -1을 했는지 계산해야하므로, arr[i-1] 값에서 arr[i] 값을 뺀 후, +1을 해주면 된다.
      arr[i - 1] = arr[i] - 1;
    }
  }
  return answer;
};

console.log(solution(N, arr));
