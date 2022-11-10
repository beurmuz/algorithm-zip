"use strict";

function solution(n) {
  let arr = [];
  let checkArr = Array.from({ length: n + 1 }, () => 0);

  // 부분집합 구하기
  function dfs(v) {
    if (v === n + 1) {
      let value = "";
      for (let i = 1; i <= n; i++) {
        if (checkArr[i] === 1) value += i + " ";
      }
      if (value.length > 0) arr.push(value.trim());
    } else {
      checkArr[v] = 1; // 포함 시킴
      dfs(v + 1); // 왼쪽
      checkArr[v] = 0; // 포함시키지 않음
      dfs(v + 1); // 오른쪽
    }
  }
  dfs(1);
  return arr;
}

console.log(solution(3));
