"use strict";

const [n, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

/**
 * dp(dynamic programming) 문제
 * - 파이프는 2칸을 차지하지만 오직 (1,2)에 있는 파이프만 생각하면 되는 문제이다.
 *   - 가로일 때 (x, y)에서 갈 수 있는 방법은 (x, y+1), (x+1, y+1)
 *   - 세로일 때 (x, y)에서 갈 수 있는 방법은 (x+1, y), (x+1, y+1)
 *   - 대각선 일 때 (x, y)에서 갈 수 있는 방법은 (x, y+1), (x+1, y), (x+1, y+1)
 *
 * - (x, y)에서 파이프가 놓여있는 위치에 따라 다음에 놓을 수 있는 방법이 결정되므로, 파이프가 놓여있는 모양을 구분해서 따로 DP 테이블에 채우면 된다.
 */
const solution = (n, input) => {
  const home = input.map((v) => v.split(" ").map(Number));
  const dp = Array.from(Array(n), () =>
    Array.from(Array(n), () => Array(3).fill(0))
  );
  dp[0][1] = [1, 0, 0]; // 수평, 대각선, 수직

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      if (x === 0 && y === 0) continue;
      const [h, d, v] = dp[x][y];

      // 1. 파이프가 가로 방향으로 놓여있을 때
      if (h > 0) {
        // 1) 가로 방향: (x, y) => (x, y+1)로 밀 수 있을 때
        if (y + 1 < n && home[x][y + 1] !== 1) dp[x][y + 1][0] += h;
        // 2) 대각선 방향: (x, y) => (x+1, y+1)로 밀 수 있을 때
        if (
          y + 1 < n &&
          home[x][y + 1] !== 1 &&
          x + 1 < n &&
          home[x + 1][y] !== 1 &&
          home[x + 1][y + 1] !== 1
        )
          dp[x + 1][y + 1][1] += h;
      }

      // 2. 파이프가 대각선 방향으로 놓여있을 때
      if (d > 0) {
        // 1) 가로 방향: (x, y) => (x, y+1)로 밀 수 있을 때
        if (y + 1 < n && home[x][y + 1] !== 1) dp[x][y + 1][0] += d;
        // 2) 대각선 방향: (x, y) => (x+1, y+1)로 밀 수 있을 때
        if (
          y + 1 < n &&
          home[x][y + 1] !== 1 &&
          x + 1 < n &&
          home[x + 1][y] !== 1 &&
          home[x + 1][y + 1] !== 1
        )
          dp[x + 1][y + 1][1] += d;
        // 3) 세로 방향: (x, y) => (x+1, y)로 밀 수 있을 때
        if (x + 1 < n && home[x + 1][y] !== 1) dp[x + 1][y][2] += d;
      }

      // 3. 파이프가 세로 방향으로 놓여있을 때
      if (v > 0) {
        // 1) 세로 방향: (x, y) => (x+1, y)로 밀 수 있을 때
        if (x + 1 < n && home[x + 1][y] !== 1) dp[x + 1][y][2] += v;
        // 2) 대각선 방향: (x, y) => (x+1, y+1)로 밀 수 있을 때
        if (
          y + 1 < n &&
          home[x][y + 1] !== 1 &&
          x + 1 < n &&
          home[x + 1][y] !== 1 &&
          home[x + 1][y + 1] !== 1
        )
          dp[x + 1][y + 1][1] += v;
      }
    }
  }

  let answer = dp[n - 1][n - 1].reduce((r, v) => r + v, 0);
  return answer;
};

console.log(solution(+n, input));
