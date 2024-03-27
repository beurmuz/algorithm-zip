/**
 * [dfs]
 * - 바이러스랑 비슷한 문제?
 * - bj 2667과 같은 문제이다.
 */

const [N, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (N, input) => {
  let grid = input.map((line) => line.split("").map((v) => +v));
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let answer = 0;
  let nowCnt = 0;
  let counts = [];

  // 방문 표시는 grid의 1 값을 0으로 바꿔줌으로써 해준다.
  const dfs = (x, y) => {
    grid[x][y] = 0;
    nowCnt++;

    for (let k = 0; k < 4; k++) {
      let nx = dx[k] + x;
      let ny = dy[k] + y;

      if (nx >= 0 && ny >= 0 && nx < N && ny < N && grid[nx][ny] === 1) {
        dfs(nx, ny);
      }
    }
  };
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (grid[i][j] === 1) {
        dfs(i, j);
        answer++;
        counts.push(nowCnt);
        nowCnt = 0;
      }
    }
  }
  console.log(answer);
  counts.sort((a, b) => a - b).forEach((v) => console.log(v));
};
solution(+N, input);
