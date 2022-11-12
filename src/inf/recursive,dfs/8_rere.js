"use strict";

function solution(n, m) {
  let answer = [];
  let line = Array.from({ length: m }, () => 0);

  function dfs(L) {
    if (L === m) {
      // m개 뽑음
      answer.push(line.slice());
    } else {
      for (let i = 1; i <= n; i++) {
        line[L] = i;
        dfs(L + 1);
      }
    }
  }
  dfs(0);
  console.log(...answer);
  console.log(answer.length);
}

console.log(solution(3, 2));
