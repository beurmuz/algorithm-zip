"use strict";

const [T, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (T, input) => {
  let inIdx = 0;
  const dx = [2, 2, -2, -2, 1, 1, -1, -1];
  const dy = [1, -1, 1, -1, 2, -2, 2, -2];

  for (let i = 0; i < T; i++) {
    let l = +input[inIdx];
    const board = Array.from({ length: l }, () => Array(l).fill(0));
    let [nowX, nowY] = input[inIdx + 1].split(" ").map((v) => +v);
    let [targetX, targetY] = input[inIdx + 2].split(" ").map((v) => +v);

    const bfs = () => {
      const queue = [[nowX, nowY, 0]];
      board[nowX][nowY] = 1;

      while (queue.length) {
        let [x, y, count] = queue.shift();
        if (x === targetX && y === targetY) return count;

        for (let k = 0; k < dx.length; k++) {
          let nx = x + dx[k];
          let ny = y + dy[k];

          if (nx < 0 || nx >= l || ny < 0 || ny >= l) continue;
          if (board[nx][ny] === 0) {
            board[nx][ny] = 1; // 방문 표시
            queue.push([nx, ny, count + 1]);
          }
        }
      }
    };
    console.log(bfs());
    inIdx += 3;
  }
};

solution(+T, input);
