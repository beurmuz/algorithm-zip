"use strict";

function solution(arr) {
  let answer = "NO";
  let flag = 0;
  let total = arr.reduce((sum, x) => sum + x, 0);

  function dfs(L, sum) {
    if (flag) return;
    if (L === arr.length) {
      if (total - sum === sum) {
        answer = "YES";
        flag = 1;
      }
    } else {
      // 포함하는 경우(왼쪽)
      dfs(L + 1, sum + arr[L]); // 합에 해당 노드를 더해 넘기기
      // 포함하지 않는 경우
      dfs(L + 1, sum); // 합 넘기기
    }
  }
  dfs(0, 0);
  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
