"use strict";

/**
 * 홀수 번째 줄의 홀수 번째 칸, 짝수(0, 2, 4, 6) 번째 줄의 짝수 번째 칸은 흰색
 * => 흰색 칸의 가로 세로 인덱스를 더한 값은 항상 짝수
 */
const board = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/);

const solution = (board) => {
  let count = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if ((i + j) % 2 === 0 && board[i][j] === "F") count++;
    }
  }
  return count;
};

console.log(solution(board));
