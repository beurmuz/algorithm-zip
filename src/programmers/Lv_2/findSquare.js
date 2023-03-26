"use strict";

const solution = (board) => {
  let answer = 0;
  const row = board.length;
  const column = board[0].length;

  if (row <= 1 || column <= 1) return 1; // row와 column이 1보다 작거나 같으면 1을 return한다.

  for (let i = 1; i < row; i++) {
    // 모든 칸을 순회한다.
    for (let j = 1; j < column; j++) {
      if (board[i][j] > 0) {
        const up = board[i - 1][j]; // 위
        const left = board[i][j - 1]; // 왼쪽
        const cross = board[i - 1][j - 1]; // 대각선 값 중
        const minNum = Math.min(up, left, cross); // 가장 작은 값을 찾아서
        board[i][j] = minNum + 1; // 현재 위치에 가장 작은 값 + 1을 한다.
        answer = Math.max(answer, board[i][j]); // answer는 기존 값과 board[i][j]의 값 중 큰 값으로 갱신한다.
      }
    }
  }
  return answer * answer; // 넓이를 구해야하므로 곱한 값을 return한다.
};
