"use strict";

function solution(n) {
  let answer = "";
  function dfs(n) {
    if (n === 0) return; // n이 0이 되면 끝까지 나눈 것
    else {
      dfs(Math.floor(n / 2));
      answer += "" + Math.floor(n % 2);
    }
  }
  dfs(n);
  return answer * 1;
}

console.log(solution(11));
