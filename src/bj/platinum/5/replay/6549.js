"use strict";

const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (inputs) => {
  inputs.pop();
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
