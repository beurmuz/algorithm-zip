"use strict";

const [n, k] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

function solution(n, k) {
  const memo = Array.from(Array(N + 1), () => Array(N + 1).fill(0));

  for (let i = 0; i <= N; i++) {
    for (let j = 0; j <= i; j++) {
      if (i === j || j === 0) memo[i][j] = 1;
      else memo[i][j] = memo[i - 1][j - 1] + (dy[i - 1][j] % 10007);
    }
  }
}
console.log(solution(n, k));
