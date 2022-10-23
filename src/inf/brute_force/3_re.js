"use strict";

function solution(n, m, arr) {
  let answer = 0;
  let tmp = [];
  for (let i = 1; i <= n; i++) {
    // 멘토
    for (let j = 1; j <= n; j++) {
      // 멘티
      let cnt = 0;
      for (let k = 0; k < m; k++) {
        let pi = 0;
        let pj = 0;
        for (let s = 0; s < n; s++) {
          // s는 등수
          if (arr[k][s] === i) pi = s;
          if (arr[k][s] === j) pj = s;
        }
        if (pi < pj) cnt++;
      }
      if (cnt === m) {
        tmp.push([i, j]);
        answer++;
      }
    }
  }
  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(4, 3, arr));
