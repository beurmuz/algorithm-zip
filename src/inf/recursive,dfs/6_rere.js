"use strict";

function solution(c, arr) {
  let answer = 0;

  function dfs(L, sum) {
    // c를 넘으면 return
    if (sum > c) return;
    if (L === arr.length) answer = Math.max(answer, sum);
    else {
      // 바둑이를 태움
      dfs(L + 1, sum + arr[L]);

      // 태우지 않음
      dfs(L + 1, sum);
    }
  }
  dfs(0, 0);
  return answer;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
