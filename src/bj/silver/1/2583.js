"use strict";

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (input) => {
  const [M, N, K] = input
    .shift()
    .split(" ")
    .map((v) => +v);
  let board = Array.from({ length: M }, () => Array(N).fill(0));
  for (let k = 0; k < K; k++) {
    let [y1, x1, y2, x2] = input[k].split(" ").map((v) => +v);
    for (let i = x1; i < x2; i++) {
      for (let j = y1; j < y2; j++) {
        if (!board[i][j]) board[i][j] = 1;
      }
    }
  }

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, 1, -1];
  let answer = [];
  let count = 0;
  const dfs = (x, y) => {
    board[x][y] = 1; // 방문 처리
    count++;

    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];

      if (nx >= 0 && ny >= 0 && nx < M && ny < N && board[nx][ny] === 0)
        dfs(nx, ny);
    }
  };

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (board[i][j] === 0) {
        // 직사각형 범위가 아니라면
        count = 0;
        dfs(i, j);
        answer.push(count);
      }
    }
  }
  console.log(answer.length);
  console.log(answer.sort((a, b) => a - b).join(" "));
};

solution(input);
