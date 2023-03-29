"use strict";

/**
 * n개의 퀸이 서로를 공격할 수 없도록 배치하기
 * -> 서로 공격할 수 없다? => 퀸의 일직선, 대각선 상에 아무것도 놓여서는 안된다.
 */
function checkValid(board, row) {
  for (let i = 1; i < row; i++) {
    if (board[i] === board[row]) {
      // 바로 옆칸이 같은 값인 경우
      return false; // N-Queen 실패
    }
    if (Math.abs(board[i] - board[row]) === Math.abs(i - row)) {
      // 대각선 차이 계산
      return false;
    }
  }
  return true;
}

const solution = (n) => {
  let answer = 0; // 정답 개수를 셀 변수

  const dfs = (board, row) => {
    if (row === n) {
      // row가 n에 도달하면 answer를 1 증가시키고 빠져나온다.
      answer++;
      return;
    }
    for (let i = 1; i <= n; i++) {
      // i는 1부터 n까지
      board[row + 1] = i;
      if (checkValid(board, row + 1)) {
        dfs(board, row + 1);
      }
    }
  };

  for (let i = 1; i <= n; i++) {
    // 1부터 n까지 순회한다.
    let board = Array(n + 1).fill(0); // board 대한 배열을 만들고
    board[1] = i; // board[1]에 i를 넣는다.
    dfs(board, 1); // dfs로 탐색 시작
  }

  return answer;
};

console.log(solution(4));
