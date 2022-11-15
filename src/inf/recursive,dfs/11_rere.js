"use strict";

function solution(n) {
  let answer = 1;
  function dfs(n) {
    if (n === 1) return 1;
    else return n * dfs(n - 1);
  }
  answer = dfs(n);
  return answer;
}

console.log(solution(3));
