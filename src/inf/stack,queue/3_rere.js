"use strict";

function solution(board, moves) {
  let answer = 0;
  let stack = [];

  moves.forEach((pos) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][pos - 1] !== 0) {
        // 인형뽑기 가능
        let now = board[i][pos - 1];
        board[i][pos - 1] = 0;
        if (now === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else stack.push(now);
        break;
      }
    }
    console.log(stack);
  });

  return answer;
}

let board = [
  [0, 0, 0, 0, 0],
  [0, 1, 1, 0, 3],
  [0, 2, 5, 5, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
let moves = [1, 2, 3, 3, 4, 2, 2, 5, 5, 4];

console.log(solution(board, moves));
