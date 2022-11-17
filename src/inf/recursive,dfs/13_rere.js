"use strict";

function solution(n, f) {
  let answer;
  let flag = 0;
  let memo = Array.from(Array(11), () => Array(11).fill(0));
  let checked = Array.from({ length: n + 1 }, () => 0);
  let permutationArr = Array.from({ length: n }, () => 0);
  let combinationArr = Array.from({ length: n }, () => 0);

  function combination(n, r) {
    if (memo[n][r] > 0) return memo[n][r];
    if (r === 0 || n === r) return 1;
    else
      return (memo[n][r] = combination(n - 1, r - 1) + combination(n - 1, r));
  }

  for (let i = 0; i < n; i++) {
    combinationArr[i] = combination(n - 1, i);
  }

  function dfs(L, sum) {
    if (flag) return;
    if (L === n && sum === f) {
      answer = permutationArr.slice();
      flag = 1;
    } else {
      for (let i = 1; i <= n; i++) {
        if (checked[i] === 0) {
          checked[i] = 1;
          permutationArr[L] = i;
          dfs(L + 1, sum + combinationArr[L] * permutationArr[L]); // 조합 * 순열
          checked[i] = 0;
        }
      }
    }
  }
  dfs(0, 0);
  return answer;
}
console.log(solution(4, 16));
