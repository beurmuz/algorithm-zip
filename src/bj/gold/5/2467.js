"use strict";

/**
 * [이분탐색 문제]
 * - 시간 복잡도: O(log N) 
 */

const [N, ...capacity] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map((v) => +v);

const solution = (N, capacity) => {
  let [left, right] = [0, N - 1];
  let diff = Math.abs(capacity[left] + capacity[right]);
  let [sol1, sol2] = [capacity[left], capacity[right]];

  while (left < right) {
    let sumValue = capacity[left] + capacity[right];
    if (Math.abs(sumValue) < diff) {
      diff = Math.abs(sumValue);
      sol1 = capacity[left];
      sol2 = capacity[right];
    }

    if (sumValue === 0) break; // 0이 되었다는 것은 0에 가장 근접한 것이므로 바로 나오면 된다.
    else if (sumValue > 0) right--;
    else left++;
  }
  return `${sol1} ${sol2}`;
};

console.log(solution(N, capacity));
