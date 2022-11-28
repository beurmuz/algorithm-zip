"use strict";

function solution(n, board) {
  let answer = 0;
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];

  for (let i = 0; i < n; i++) {
    // 격자판 탐색 (1인 곳 찾기)
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        // 섬 발견!
        answer++;
        dfs(i, j);
        // console.log("dfs end");
      }
    }
  }

  function dfs(x, y) {
    board[x][y] = 0; // 방문 했으니 0으로 바꿔줌

    for (let k = 0; k < 8; k++) {
      // 8방향 탐색 시작
      let nx = x + dx[k];
      let ny = y + dy[k];

      if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
        // console.log(nx, ny);
        dfs(nx, ny);
      }
    }
  }
  return answer;
}

let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

console.log(solution(7, arr));
