"use strict";

function solution(n, k, card) {
  // 3C10 (조합문제)
  let answer;
  let cardList = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        cardList.add(card[i] + card[j] + card[k]); // 중복을 제거하며 3개씩 뽑아내는 방법
      }
    }
  }

  // 내림차순 후 Array 형태로 바꾸기
  let cardArr = Array.from(cardList).sort((a, b) => b - a);
  answer = cardArr[k - 1];
  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
