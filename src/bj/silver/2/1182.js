"use strict";

const [N, S, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map((v) => +v);

const solution = (N, S, arr) => {
  let answer = 0;

  const dfs = (i, sum) => {
    if (i === N) return;

    sum += arr[i];
    if (sum === S) answer++;

    dfs(i + 1, sum);
    dfs(i + 1, sum - arr[i]);
  };
  dfs(0, 0);
  return answer;
};

console.log(solution(N, S, arr));
