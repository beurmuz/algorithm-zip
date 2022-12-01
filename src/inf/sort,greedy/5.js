"use strict";

function solution(size, arr) {
  let answer = Array.from({ length: size }, () => 0);
  arr.forEach((nowValue) => {
    let pos = -1;
    for (let i = 0; i < size; i++) {
      if (nowValue === answer[i]) pos = i; // 캐시 히트인 경우 index를 pos에 저장
    }
    if (pos === -1) {
      // 캐시 미스인 경우
      for (let i = size - 1; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    } else {
      // 캐시 히트인 경우
      for (let i = pos; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    }
    answer[0] = nowValue;
  });
  return answer;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
