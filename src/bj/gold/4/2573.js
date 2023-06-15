"use strict";

/**
 * [구현 + 그래프 탐색 문제]
 * - 생각한 풀이
 *   1. board를 순회하면서 각 칸마다 바닷물과 접해있는 칸 수를 세어 1년 후의 모습을 구한다.
 *   2. 구해진 board를 탐색하며 빙산 덩어리가 2개 이상인지 검사한다.
 */
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
  let year = 0;

  // 빙산을 녹인다.
  const meltIsand = () => {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (board[i][j] > 0) {
          let count = 0;

          for (let k = 0; k < 4; k++) {
            const [nx, ny] = [i + dx[k], j + dy[k]];
            if (board[nx][ny] === 0) count++;
          }
          board[i][j] -= count;
          if (board[i][j] <= 0) board[i][j] = -1; // 빙산을 녹인 후 그 값이 0이하가 되면 -1로 채워준다.
        }
      }
    }
  };

  // 빙산의 갯수를 센다.
  const dfs = (x, y, visited) => {
    const stack = [[x, y]];

    while (stack.length) {
      const [x, y] = stack.pop();

      for (let k = 0; k < 4; k++) {
        const [nx, ny] = [x + dx[k], y + dy[k]];
        if (!visited[nx][ny] && board[nx][ny] > 0) {
          visited[nx][ny] = true; // 방문 표시
          stack.push([nx, ny]);
        }
      }
    }
  };

  // -1이 된 값들을 0으로 바꿔준다.
  const negativeToPositive = () => {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (board[i][j] === -1) board[i][j] = 0;
      }
    }
  };

  // 여기서부터 모든 로직 수행
  while (true) {
    const visited = Array.from({ length: N }, () => Array(M).fill(false));
    let island = 0;

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (!visited[i][j] && board[i][j] > 0) {
          visited[i][j] = true;
          dfs(i, j, visited);
          island++;
        }
      }
    }

    if (island >= 2) return year;
    else if (island === 0) return 0;

    meltIsand();
    negativeToPositive();
    year++;
  }
};

console.log(solution(input, board));
