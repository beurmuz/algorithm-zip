"use strict";

/**
 * DP (Dynamic Programming) 문제
 */
const solution = (board) => {
  let answer = 0;
  const r = board.length;
  const c = board[0].length;

  if (r <= 1 || c <= 1) return 1;

  for (let i = 1; i < r; i++) {
    for (let j = 1; j < c; j++) {
      if (board[i][j] > 0) {
        const minValue = Math.min(
          board[i - 1][j - 1],
          board[i - 1][j],
          board[i][j - 1]
        ); // 대각선 위, 바로 위, 왼쪽의 값 중 가장 작은 값을 찾는다.
        board[i][j] = minValue + 1; // 최솟값에 +1을 해준다.
        answer = Math.max(answer, board[i][j]); // 최댓값으로 갱신한다.
      }
    }
  }
  return answer * answer; // 넓이를 출력한다.
};

let input = [
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [0, 0, 1, 0],
];
console.log(solution(input));
