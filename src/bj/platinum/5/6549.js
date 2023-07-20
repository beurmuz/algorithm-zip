"use strict";

/**
 * [stack 문제]
 * - 시간복잡도는 입력값 N(직사각형의 개수)에 영향을 받는다.
 * - 현재 최대 입력값의 크기는 10^5이므로 O(n)이하의 시간복잡도가 될 수 있도록 stack을 이용해 구현했다.
 *
 * - 분할 정복으로도 풀 수 있다.
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (inputs) => {
  inputs.pop(); // O(1)
  const T = inputs.length;
  let answer = [];

  for (let t = 0; t < T; t++) {
    const [N, ...arr] = inputs[t].split(" ").map((v) => +v);
    let stack = [];
    let maxArea = 0;

    for (let i = 0; i < N; i++) {
      let now = arr[i];
      let idx = i;

      while (stack.length > 0 && stack[stack.length - 1][0] >= now) {
        let temp = stack.pop();
        if (maxArea < temp[0] * (i - temp[1]))
          maxArea = temp[0] * (i - temp[1]);
        idx = temp[1];
      }
      stack.push([now, idx]);
    }
    while (stack.length > 0) {
      let temp = stack.pop();
      if (maxArea < temp[0] * (N - temp[1])) maxArea = temp[0] * (N - temp[1]);
    }
    answer.push(maxArea);
  }
  return answer.join("\n");
};

console.log(solution(inputs));
