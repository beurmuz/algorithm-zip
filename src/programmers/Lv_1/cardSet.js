"use strict";

/**
 * 1. goal을 순회하면서 cards1, cards2에 포함된 값들을 찾는다.
 * 2. 포함된 값들이 저장된 각 배열을 순회하면서 원본 배열 (cards1, cards2)와 같은 순서로 들어가있는지 확인한다.
 *   - 앞의 단어를 건너뛴 채 뒤의 단어를 사용할 수는 없다.
 */
function solution(cards1, cards2, goal) {
  let answer = "Yes";
  const CARDS1 = goal.filter((CARD) => cards1.includes(CARD));
  const CARDS2 = goal.filter((CARD) => cards2.includes(CARD));
  CARDS1.forEach((CARD, index) => {
    if (CARD !== cards1[index]) answer = "No";
  });
  CARDS2.forEach((CARD, index) => {
    if (CARD !== cards2[index]) answer = "No";
  });
  return answer;
}
