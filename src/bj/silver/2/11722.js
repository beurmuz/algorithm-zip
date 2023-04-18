"use strict";

/**
 * S2. 11053 친구문제
 * - 11053 문제에서 조건만 바꿔주면 된다.
 */
const [n, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map((v) => +v);

const solution = (n, arr) => {
  const dp = Array.from({ length: n }, () => 0);

  for (let i = 0; i < n; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j] && dp[j] > max) {
        // 일단 arr[i]보다 arr[j]가 작아야 감소하는 수열을 구하는 것이고, dp[j]가 max보다 크다는 것은, 감소하는 수열이 하나 더 가능하다는 뜻이므로 뒷 부분의 조건은 똑같이 두고 풀면 된다.
        max = dp[j];
      }
    }
    dp[i] = max + 1;
    //   console.log(dp)
  }
  return Math.max(...dp);
};

console.log(solution(n, arr));
