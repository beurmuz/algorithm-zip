"use strict";

const [H, W, N, M] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

const solution = (H, W, N, M) => {
  let row = Math.ceil(H / (N + 1));
  let col = Math.ceil(W / (M + 1));

  return row * col;
};

console.log(solution(H, W, N, M));
