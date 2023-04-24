"use strict";

const [n, ...grid] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (n, grid) => {
  grid = grid.map((line) => line.split(" ").map((v) => +v));
  let answer = 0;
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  const dfs = (x, y, height, visited) => {
    for (let k = 0; k < 4; k++) {
      let [nx, ny] = [x + dx[k], y + dy[k]];
      if (nx >= 0 && ny >= 0 && nx < n && ny < n && !visited[nx][ny]) {
        visited[nx][ny] = 1; // 방문 표시
        dfs(nx, ny, height, visited);
      }
    }
  };

  for (let height = 0; height <= 100; height++) {
    let count = 0;
    const visited = [...Array(n)].map(
      (_, x) => [...Array(n)].map((_, y) => grid[x][y] <= height) // grid[x][y]가 height보다 작거나 같으면 이미 방문 한걸로 표시한다.
    );
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (!visited[i][j]) {
          visited[i][j] = 1;
          dfs(i, j, height, visited);
          count++;
        }
      }
    }
    answer = Math.max(answer, count);
  }
  return answer;
};

console.log(solution(+n, grid));
