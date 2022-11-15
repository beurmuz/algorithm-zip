"use strict";

function solution(n, r) {
  let answer;
  let dy = Array.from(Array(35), () => Array(35).fill(0)); // 행, 열
  console.time("time");
  function dfs(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = dfs(n - 1, r - 1) + dfs(n - 1, r));
  }
  answer = dfs(n, r);
  console.timeEnd("time");
  return answer;
}

console.log(solution(33, 19));
