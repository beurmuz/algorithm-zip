"use strict";

function solution(arr, change) {
  let answer = Number.MAX_SAFE_INTEGER;

  function dfs(L, sum) {
    if (sum > change) return;
    if (L >= answer) return;
    if (sum === change) answer = Math.min(L, answer);
    else {
      for (let i = 0; i < arr.length; i++) {
        dfs(L + 1, sum + arr[i]);
      }
    }
  }
  dfs(0, 0);
  return answer;
}

let arr = [1, 2, 5];
console.log(solution(arr, 15));
