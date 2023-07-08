"use strict";

/**
 * [stack 문제]
 * - 10^5이니까 O(n)이하의 시간복잡도가 되도록 해야한다.
 * - O(n)시간복잡도가 걸린다.
 *
 * - 이전 풀이에 비해 메모리는 약 3/4으로 줄였고, 시간은 9/10로 줄였다.
 */
const [N, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

const solution = (N, inputs) => {
  let stack = [];
  let answer = "";
  let num = 1;

  for (let i = 0; i < N; i++) {
    // O(n)
    let number = inputs[i];
    while (num <= number) {
      // num이 number보다 작거나 같은 동안 stack에 num을 push한다.
      stack.push(num++);
      answer += "+\n";
    }

    const popValue = stack.pop(); // 최상단의 값을 pop한다.
    if (number !== popValue) return "NO"; // 최상단의 값과 inputs[i]의 값이 다르다면 불가능한 경우이다.
    answer += "-\n";
  }
  return answer.trim();
};

console.log(solution(N, inputs));
