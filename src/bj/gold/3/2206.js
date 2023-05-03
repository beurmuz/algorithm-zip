"use strict";

/**
 * bfs로 풀기..
 */
const [input, ...board] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (input, board) => {
  const [n, m] = input.split(" ").map((v) => +v);
  const grid = board.map((line) => line.split("").map((v) => +v));
  const dx = [-1, 1, 0, 0]; // 상하좌우
  const dy = [0, 0, -1, 1];
};

console.log(solution(input, board));
