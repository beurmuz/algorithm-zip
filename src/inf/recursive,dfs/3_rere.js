"use strict";

function solution(v, n) {
  // v*2 왼쪽
  // v*2+1이 오른쪽
  function dfs(v) {
    if (v > 7) return;
    else {
      // 1. 전위 순회
      console.log(v);
      dfs(v * 2);
      dfs(v * 2 + 1);
    }
  }
  dfs(v);
}

console.log(solution(1, 7));
