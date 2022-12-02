"use strict";

function solution(size, arr) {
  let answer = [];
  arr.forEach((nowValue) => {
    let pos = -1;
    for (let i = 0; i < size; i++) {
      if (nowValue === answer[i]) pos = i; // 캐시 히트인 경우 index를 pos에 저장
    }
    if (pos === -1) {
      // 캐시 미스인 경우
      answer.unshift(nowValue);
      if (answer.length > size) answer.pop();
    } else {
      // 캐시 히트인 경우
      answer.splice(pos, 1);
      answer.unshift(nowValue);
    }
  });
  return answer;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
