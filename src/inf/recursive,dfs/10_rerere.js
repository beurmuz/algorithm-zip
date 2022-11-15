"use strict";

function solution(arr, m) {
  let answer = [];
  let checked = Array.from({ length: arr.length }, () => 0);
  let printArr = Array.from({ length: m }, () => 0); // [ , ]

  function dfs(L) {
    if (L === m) {
      answer.push(printArr.slice());
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (checked[i] === 0) {
          checked[i] = 1;
          printArr[L] = arr[i];
          dfs(L + 1);
          // 백트래킹
          checked[i] = 0;
        }
      }
    }
  }
  dfs(0);
  return answer.length;
}

let arr = [2, 4, 7];
console.log(solution(arr, 2));
