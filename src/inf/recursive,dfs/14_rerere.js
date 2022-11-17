"use strict";

function solution(n, m) {
  let answer = [];
  let combi = Array.from({ length: m }, () => 0);

  function dfs(L, s) {
    if (L === m) answer.push(combi.slice());
    else {
      for (let i = s; i <= n; i++) {
        combi[L] = i;
        dfs(L + 1, i + 1);
      }
    }
  }
  dfs(0, 1);
  return answer;
}
console.log(solution(4, 2));
