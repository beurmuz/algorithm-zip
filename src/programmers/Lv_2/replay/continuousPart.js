"use strict";

function solution(elements) {
  let sumSet = new Set();
  let n = elements.length;

  for (let i = 1; i <= n; i++) {
    let sum = 0;
    for (let j = 0; j < n; j++) {
      if (j === 0) {
        // 최초 한 번의 윈도우는 직접 구해놓기
        for (let k = 0; k < i; k++) sum += elements[k];
      } else {
        sum = sum - elements[j - 1] + elements[(j + i - 1) % n]; // elements[(j+i-1) % n]은 n길이 초과시 다시 elements의 앞부터 돌아가기 위함
      }
      sumSet.add(sum);
    }
  }
  return sumSet.size;
}

console.log(solution([7, 9, 1, 1, 4]));
