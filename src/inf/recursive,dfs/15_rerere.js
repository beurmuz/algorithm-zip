"use strict";

function solution(n, k, arr, m) {
  let answer = 0;
  let combiArr = Array.from({ length: k }, () => 0);

  function dfs(L, sum, s) {
    if (L === k) {
      if (sum % m === 0) {
        console.log(sum, combiArr);
        answer++;
      }
    } else {
      for (let i = s; i < n; i++) {
        combiArr[L] = arr[i];
        dfs(L + 1, sum + arr[i], i + 1);
      }
    }
  }
  dfs(0, 0, 0);
  return answer;
}
let arr = [2, 1, 5, 7, 12];
console.log(solution(5, 3, arr, 2));
