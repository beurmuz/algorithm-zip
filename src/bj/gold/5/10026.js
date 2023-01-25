"use strict";

/**
 * 틀린줄 알았는데 아니었다!
 * - 다만 dfs를 두번 돌리려고 했었는데, bfs를 두번 돌리면 되는 것이었다.
 */
const [n, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (n, inputs) => {
  const visited = Array.from({ length: n }, () => Array(n).fill(0)); // 방문 여부를 표시할 visited 배열 선언
  const input = inputs.map((v) => v.split(""));
  const dx = [-1, 1, 0, 0]; // 상, 하, 좌, 우
  const dy = [0, 0, -1, 1];

  let original = 0; // 정답1) RGB의 구역 개수
  let change = 0; // 정답2) RG의 구역 개수

  // 1. RGB 구역 개수 구하면서 R을 G로 바꾸기
  const bfs = (x, y, color) => {
    let queue = [];
    queue.push([x, y]); // 일단 현재 지점을 queue에 넣고
    visited[x][y] = 1; // 방문 표시

    while (queue.length) {
      let [posX, posY] = queue.shift();
      for (let k = 0; k < 4; k++) {
        let nx = posX + dx[k];
        let ny = posY + dy[k];

        if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
        if (!visited[nx][ny] && input[nx][ny] === color) {
          visited[nx][ny] = 1; // 방문 표시
          queue.push([nx, ny]);
        }
      }
    }
  };

  // 2. RGB 구역 개수 Counting
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j]) {
        bfs(i, j, input[i][j]);
        original++;
      }
    }
  }

  // 3. G->R로 바꾸기
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (input[i][j] === "G") input[i][j] = "R";
    }
  }

  // 3. visited 배열 초기화
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      visited[i][j] = 0;
    }
  }
  // 4. RB 구역 개수 Counting
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j]) {
        bfs(i, j, input[i][j]);
        change++;
      }
    }
  }

  return `${original} ${change}`;
};

console.log(solution(+n, inputs));
