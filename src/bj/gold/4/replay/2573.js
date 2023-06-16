"use strict";

const [input, ...board] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (input, board) => {
  const [N, M] = input.split(" ").map((v) => +v);
  board = board.map((line) => line.split(" ").map((v) => +v));
  const dx = [0, 0, 1, -1]; // 동서남북
  const dy = [1, -1, 0, 0];

  // 1. 빙산을 녹인다.
  const melt = () => {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (board[i][j] > 0) {
          let count = 0;
          for (let k = 0; k < 4; k++) {
            const [nx, ny] = [i + dx[k], j + dy[k]];
            if (board[nx][ny] === 0) count++;
          }
          board[i][j] -= count;
          if (board[i][j] <= 0) board[i][j] = -1;
        }
      }
    }
  };

  // 2. 빙산의 갯수를 센다.
  const dfs = (x, y, visited) => {
    const stack = [[x, y]];

    while (stack.length) {
      const [x, y] = stack.pop();
      for (let k = 0; k < 4; k++) {
        const [nx, ny] = [x + dx[k], y + dy[k]];
        if (!visited[nx][ny] && board[nx][ny] > 0) {
          visited[nx][ny] = true;
          stack.push([nx, ny]);
        }
      }
    }
  };

  // 3. 빙산에 있는 음수 값을 0으로 바꾼다.
  const changePositive = () => {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (board[i][j] === -1) board[i][j] = 0;
      }
    }
  };

  // 빙산이 분리되는 시점을 찾을 때까지 1, 2, 3 과정을 반복한다.
  let year = 0;
  while (true) {
    let visited = Array.from({ length: N }, () => Array(M).fill(false));
    let island = 0;

    // 현재 빙산의 개수를 센다.
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (board[i][j] > 0 && !visited[i][j]) {
          visited[i][j] = true;
          dfs(i, j, visited);
          island++;
        }
      }
    }

    // island가 2개 이상이면 이미 분리된 것이므로 year를 리턴하고, 0이면 불가능한 것이므로 0을 리턴한다.
    if (island >= 2) return year;
    if (island === 0) return 0;

    // 빙산을 녹이는 작업을 진행한다.
    melt();
    changePositive();
    year++;
  }
};

console.log(solution(input, board));
