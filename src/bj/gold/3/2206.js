"use strict";

/**
 * 처음에 푼 풀이
 * - 반복문을 돌면서 벽인 부분을 1개씩 깼다 말았다를 반복하며 bfs를 계속 호출해주었다.
 * - 테스트케이스들은 전부 통과했는데(물론 히든은 모른다ㅎ), 채점해보니 메모리 초과가 발생했다.
 *      => 매번 tempGrid 배열에 벽을 부순 정보가 저장된 grid를 계속 깊은복사해서 메모리 초과가 발생한 듯 하다.
 */
const [input, ...board] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (input, board) => {
  const [n, m] = input.split(" ").map((v) => +v);
  const grid = board.map((line) => line.split("").map((v) => +v));
  let tempGrid = Array.from({ length: n }, () => Array(m).fill(0));
  const dx = [-1, 1, 0, 0]; // 상하좌우
  const dy = [0, 0, -1, 1];

  let answer = [];
  const bfs = (x, y, count, arr) => {
    tempGrid = arr.map((v) => [...v]);
    let queue = [[x, y, count]];

    while (queue.length) {
      let [x, y, count] = queue.shift();
      if (x === n - 1 && y === m - 1 && count !== 1) return count;
      else if (x === n - 1 && y === m - 1 && count === 1) return -1;

      tempGrid[x][y] = 1; // 방문 표시 (벽으로 만들기)

      for (let k = 0; k < 4; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];

        if (nx >= 0 && ny >= 0 && nx < n && ny < m && tempGrid[nx][ny] === 0) {
          queue.push([nx, ny, count + 1]);
        }
      }
    }
    if (count === 1) return -1;
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) {
        grid[i][j] = 0; // 문을 부셔서 길을 만들고
        let nowCount = bfs(0, 0, 1, grid);
        answer.push(nowCount);
        grid[i][j] = 1; // 다시 벽으로 만든다.
      }
    }
  }
  let plusAnswer = answer.filter((v) => v > 0);
  return plusAnswer.length === 0 ? -1 : Math.min(...plusAnswer);
};

console.log(solution(input, board));
