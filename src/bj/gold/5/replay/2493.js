"use strict";

/**
 * [stack 문제]
 * - input size N을 결정하는 것은 탑의 수이다. 탑의 개수 범위가 5 * 10^5 이므로 O(n) 이하의 코드가 되도록 구현해야한다.
 */
const [N, ...tops] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map((v) => +v);

const solution = (N, tops) => {
  const answer = Array.from({ length: N }, () => 0);
  let stack = [N - 1]; // stack에는 index 값을 저장한다.

  for (let i = N; i >= 0; i--) {
    let nowHeight = tops[i];

    while (stack.length && tops[stack[stack.length - 1]] < nowHeight) {
      // stack의 상단에 저장된 탑의 순서에 해당하는 탑의 높이보다 현재 탑의 높이가 더 큰 경우, stack의 상단 값을 pop한다.
      answer[stack.pop()] = i + 1; // pop한 순서에 있는 탑은 i+1번째 (= 현재 타워)로 신호를 보낸다.
    }
    stack.push(i);
  }

  return answer.join(" ");
};

console.log(solution(N, tops));
