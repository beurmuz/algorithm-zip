"use strict";

/**
 * 풀이 방법
 * - 공백을 기준으로 split 후, operation에 따른 연산을 수행한다.
 * - heap을 내림차순으로 정렬한다.
 * - 위의 과정들을 반복한 후, heap의 길이가 없다면 [0, 0]을, 있다면 [최댓값, 최솟값]을 return
 */
const solution = (operations) => {
  const heap = [];
  operations.forEach((v) => {
    // O(n)
    let [operation, value] = v.split(" ");

    if (operation === "I") {
      heap.push(+value);
    } else {
      if (+value < 0) {
        heap.pop();
      } else {
        heap.shift();
      }
    }
    heap.sort((a, b) => b - a); // 정렬 O(nlog n)
  });
  return heap.length ? [heap[0], heap[heap.length - 1]] : [0, 0];
};
