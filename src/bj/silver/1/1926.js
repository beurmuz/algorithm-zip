"use strict";

const [input, ...papers] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (input, papers) => {
  const [row, col] = input.split(" ").map((v) => +v);
  const grid = papers.map((line) => line.split(" ").map((v) => +v));
  let answer = [];
  let sum = 0;
  const dx = [-1, 1, 0, 0]; // 상하좌우
  const dy = [0, 0, -1, 1];

  const dfs = (x, y) => {
    sum += 1;
    grid[x][y] = 0; // 방문 표시

    for (let k = 0; k < 4; k++) {
      let [nx, ny] = [x + dx[k], y + dy[k]];
      if (nx >= 0 && ny >= 0 && nx < row && ny < col && grid[nx][ny] === 1) {
        dfs(nx, ny);
      }
    }
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) {
        sum = 0; // sum 초기화
        dfs(i, j);
        answer.push(sum);
      }
    }
  }
  console.log(answer.length === 0 ? 0 : answer.length);
  console.log(answer.length === 0 ? 0 : Math.max(...answer));
};

solution(input, papers);
