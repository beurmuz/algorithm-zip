"use strict";

function solution(n, r) {
  let answer;
  let memo = Array.from(Array(35), () => Array(35).fill(0));

  function dfs(n, r) {
    if (memo[n][r] > 0) return memo[n][r];
    if (r === 0 || n === r) return 1;
    else return (memo[n][r] = dfs(n - 1, r - 1) + dfs(n - 1, r));
  }
  answer = dfs(n, r);
  return answer;
}
console.log(solution(20, 7));
