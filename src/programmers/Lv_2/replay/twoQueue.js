"use strict";

function solution(queue1, queue2) {
  let totalArr = [...queue1, ...queue2];
  let maxCount = totalArr.length * 2;
  let start = 0;
  let end = queue1.length;

  const sum = (arr) => arr.reduce((acc, val) => acc + val, 0);
  let total = sum(totalArr.slice(start, end)); // end자리의 값을 제외한 queue1의 합을 total에 넣어두고
  let half = sum(totalArr) / 2; // 두 큐의 총합 / 2 => 각 큐의 합은 half여야 함
  let count = 0;

  while (count <= maxCount) {
    if (total < half) {
      total += totalArr[end]; // 맨 뒤에 값을 하나 추가함
      end++;
    } else if (total > half) {
      total -= totalArr[start]; // 맨 앞 값을 pop함
      start++;
    } else if (total === half) {
      return count;
    }
    count++;
  }
  return -1;
}

console.log(solution([3, 2, 7, 2], [4, 6, 5, 1]));
console.log(solution([1, 2, 1, 2], [1, 10, 1, 2]));
console.log(solution([1, 5], [1, 1]));
