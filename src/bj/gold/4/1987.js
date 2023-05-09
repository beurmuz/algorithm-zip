"use strict";

/**
 * dfs + 백트래킹
 */
const [inputs, ...board] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (inputs, board) => {
  const [r, c] = inputs.split(" ").map((v) => +v);
  board = board.map((line) => line.split(""));
  const visited = Array.from({ length: 26 }, () => false); // 사용한 알파벳을 기록한다.
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  let answer = 0;

  const dfs = (x, y, count) => {
    answer = Math.max(answer, count);
    for (let k = 0; k < 4; k++) {
      let [nx, ny] = [x + dx[k], y + dy[k]];
      if (nx >= 0 && nx < r && ny >= 0 && ny < c) {
        if (visited[board[nx][ny].charCodeAt() - 65] === false) {
          visited[board[nx][ny].charCodeAt() - 65] = true;
          dfs(nx, ny, count + 1);
          visited[board[nx][ny].charCodeAt() - 65] = false;
        }
      }
    }
  };
  visited[board[0][0].charCodeAt() - 65] = true; // 시작 지점 방문 표시
  dfs(0, 0, 1);

  return answer;
};

console.log(solution(inputs, board));
