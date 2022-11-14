"use strict";

function solution(n, m) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);

  function dfs(L) {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 1; i <= n; i++) {
        tmp[L] = i;
        dfs(L + 1);
      }
    }
  }
  dfs(0);
  return answer.length;
}

console.log(solution(3, 2));
