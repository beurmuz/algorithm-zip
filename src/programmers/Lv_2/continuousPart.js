"use strict";

// 1. 슬라이딩 윈도우와 set으로 푸는 법
function solution(elements) {
  const sumSet = new Set();
  const n = elements.length;

  for (let i = 1; i <= n; i++) {
    // i는 연속 부분 수열의 길이
    let sum = 0;
    for (let j = 0; j < n; j++) {
      // j는 elements의 0번~n-1번까지의 인덱스를 의미
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
console.log([7, 9, 1, 1, 4]);

/*
    - 슬라이딩 윈도우 이용하기
    - 원형 수열이므로 elements[(j+i-1)%n]으로 앞과 끝이 연결되어있다고 생각하기
*/
