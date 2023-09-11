"use strict";

/**
 * [hash + DFS(재귀) 문제]
 * - 그냥 단순 연산이지만 memoization도 사용해야한다..
 */

const [N, P, Q] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

const solution = (N, P, Q) => {
  const sequence = {};
  dict[0] = 1;

  const dfs = (i) => {
    dict[i] = dfs(Math.floor(i / P)) + dfs(Math.floor(i / Q));
  };

  return dfs[N];
};

console.log(solution(N, P, Q));
