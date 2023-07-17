"use strict";

/**
 * [stack 문제]
 * - 최대 입력값의 크기가 10^6이므로 시간복잡도가 O(n)이하가 되도록 stack을 이용해 풀어야한다.
 */
const [N, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map((v) => +v);

const solution = (N, arr) => {
  let stack = [];
  let answer = Array.from({ length: N }, () => -1);

  for (let i = 0; i < N; i++) {
    while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
      // index를 push, pop 하는 것이라 stack[stack.length-1]에 있는 인덱스 값을 arr에서 찾는 것이다.
      answer[stack.pop()] = arr[i];
    }
    // 위의 조건에 부합하지 않으면
    stack.push(i);
  }

  return answer.join(" ");
};

console.log(solution(N, arr));

// 개선 코드
const solution2 = (N, arr) => {
  let stack = [];

  for (let i = 0; i < N; i++) {
    while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
      arr[stack.pop()] = arr[i];
    }
    stack.push(i);
  }

  while (stack.length) {
    arr[stack.pop()] = -1; // 어차피 이미 pop한거라 arr의 남은 값들에 영향을 주지 않으므로 arr에 바로 정답을 넣는다.
  }

  return arr.join(" ");
};

console.log(solution2(N, arr));
