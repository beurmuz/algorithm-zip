"use strict";

/*
  모든 경우를 고려해봐야 하므로 완전 탐색.
  n: 학생수
  total: 선생님이 가지고 있는 총 비용
  products: 학생들이 고른 선물 리스트(선물 가격, 배송비)
*/

function solution(n, total, products) {
  let answer = 0;

  // 학생들이 고른 선물 리스트(선물 가격 + 배송비의 합으로) 오름차순 정렬하기
  products.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  for (let i = 0; i < n; i++) {
    let change = total - products[i][0] / 2 + products[i][1]; // i번째 선물 반값 할인 가격, 배송비를 total에서 뺀 잔돈 구하기
    let count = 1;

    for (let j = 0; j < n; j++) {
      if (j !== i && products[j][0] + products[j][1] > change) break;
      if (j !== i && products[j][0] + products[j][1] <= change) {
        change -= products[j][0] + products[j][1];
        count++;
      }
    }
    answer = Math.max(answer, count); // count(물건을 더 많이 살 수 있는 경우)와 answer를 비교해 answer를 새롭게 업데이트
  }
  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(5, 28, arr));
