"use strict";

/**
 * 틀렸다아아아
 */
const [n, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (n, inputs) => {
  const visited = Array.from({ length: n }, () => Array(n).fill(0));
  const input = inputs.map((v) => v.split(vv));

  let answer = 0; // 구역 개수를 count할 변수

  const dfs = (x, y, color) => {
    visited[x][y] = 1; // 방문 표시
    const dx = [-1, 1, 0, 0]; // 상, 하, 좌, 우
    const dy = [0, 0, -1, 1];

    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];

      if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
      if (input[nx][ny] === color && visited[nx][ny] === 0) {
        dfs(nx, ny, color);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (visited[i][i] === 0) {
        let nowColor = input[i][j]; // 현재 색상을 함께 넘긴다.
        dfs(i, j, nowColor);
        answer++;
      }
    }
  }
  console.log(answer);
};

console.log(solution(+n, inputs));
