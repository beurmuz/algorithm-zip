"use strict";

function solution(k, tangerine) {
  let answer = 0;

  // tangerine Count
  let tSet = {};
  for (let x of tangerine) {
    tSet[x] = (tSet[x] || 0) + 1; // tSet[x]가 있으면 tSet[x] + 1을, 없으면 0 + 1을 해줌
  }

  // Set value Sort
  let tValueArray = Object.values(tSet).sort((a, b) => b - a);

  // Count the tangerine's kind
  for (let value of tValueArray) {
    answer++;
    k -= value;
    if (k <= 0) break;
  }
  return answer;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3]));
