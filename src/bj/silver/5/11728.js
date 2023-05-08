"use strict";

/**
 * 처음에 푼 풀이
 * - 아주 간단하게 sort를 이용해서 풀었지만, 메모리 초과가 발생했다.
 */
const [n, m, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map((v) => +v);

const solution = (n, m, arr) => {
  return arr.sort((a, b) => a - b).join(" ");
};

console.log(solution(n, m, arr));

/**
 * 다시 푼 풀이
 * - a, b는 무조건 정렬된 상태로 들어오므로, a와 b배열을 비교해 정답에 넣어준 후 join하면 된다.
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (inputs) => {
  const [n, m] = inputs[0].split(" ").map((v) => +v);
  const a = inputs[1].split(" ").map((v) => +v);
  const b = inputs[2].split(" ").map((v) => +v);
  const answer = [];

  let [aIdx, bIdx] = [0, 0];
  while (aIdx < n || bIdx < m) {
    if (aIdx < n && bIdx < m) {
      if (a[aIdx] > b[bIdx]) answer.push(b[bIdx++]);
      else answer.push(a[aIdx++]);
    } else {
      if (aIdx < n) {
        answer.push(...a.slice(aIdx)); // aIdx부터 남은 것들을 전부 복사해온다.
        aIdx = n;
      } else {
        answer.push(...b.slice(bIdx));
        bIdx = m;
      }
    }
  }
  return answer.join(" ");
};

console.log(solution(inputs));
