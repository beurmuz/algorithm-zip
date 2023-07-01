"use strict";

const [N, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map((v) => +v);

const solution = (N, arr) => {
  let stack = [];
  for (let i = 0; i < N; i++) {
    while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
      arr[stack.pop()] = arr[i];
    }
    stack.push(i);
  }
  while (stack.length) {
    arr[stack.pop()] = -1;
  }
  return arr.join(" ");
};

console.log(solution(N, arr));
