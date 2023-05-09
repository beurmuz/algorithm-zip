"use strict";

/**
 * 투포인터 문제!
 * - 이중 for문을 돌리는 방법이 있지만, 시간복잡도를 고려하면 배열을 정렬하고 투포인터를 사용하여 문제를 해결할 수 있다.
 * - 정렬은 O(nlogn), 탐색은 O(n)이 걸리므로 이중for문보다 시간복잡도가 줄어든다.
 */
const [n, m, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map((v) => +v);

const solution = (n, m, arr) => {
  let answer = 0;
  arr.sort((a, b) => a - b); // 투포인터를 이용하려면 배열이 항상 정렬되어 있어야 한다.

  let [lt, rt] = [0, n - 1];
  while (lt < rt) {
    let sum = arr[lt] + arr[rt];
    answer += sum === m ? 1 : 0;
    lt += sum <= m ? 1 : 0;
    rt -= sum >= m ? 1 : 0;
  }
  return answer;
};

console.log(solution(n, m, arr));
