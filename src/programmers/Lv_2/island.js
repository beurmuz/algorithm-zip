"use strict";

// dfs로 푼 문제
function solution(maps) {
  let answer = [];
  let row = maps.length;
  let col = maps[0].length;
  let grid = maps.map((line) => line.split(""));
  const dx = [-1, 1, 0, 0]; // 상하좌우
  const dy = [0, 0, -1, 1];
  let sum = 0;

  const dfs = (x, y) => {
    sum += grid[x][y] * 1;
    grid[x][y] = "X"; // 방문 표시

    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];

      if (nx >= 0 && ny >= 0 && nx < row && ny < col && grid[nx][ny] !== "X") {
        dfs(nx, ny);
      }
    }
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] !== "X") {
        sum = 0;
        dfs(i, j);
        answer.push(sum);
      }
    }
  }

  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}
