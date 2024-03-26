/**
 * [dfs, 백트래킹]
 * - dfs와 백트래킹으로 푸는 문제. 2개씩 묶어주는거라 백트래킹을 할 때에도 연결된 값 2개에 대해 함께 방문 표시를 해주어야 한다.
 * - 포인트는 상하좌우 탐색이 아닌 하우만 탐색하면 된다는 것!
 */

"use strict";

let [N, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (N, arr) => {
  arr = arr.map((line) => line.split(" ").map((v) => +v));
  const visited = Array.from({ length: N }, () => Array(N).fill(false));
  let answer = 0;
  let maxDepth = N === 2 ? 2 : 4; // N이 3, 4인 경우에는 4개까지 묶을 수 있다.
  const dx = [0, 1]; // [오른쪽, 아래]
  const dy = [1, 0];

  const dfs = (L, sum) => {
    if (L === maxDepth) {
      answer = Math.max(answer, sum);
      return;
    }

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (visited[i][j]) continue; // 방문했으면 건너뛰기

        for (let k = 0; k < 2; k++) {
          let nx = dx[k] + i;
          let ny = dy[k] + j;

          if (nx >= 0 && ny >= 0 && nx < N && ny < N && !visited[nx][ny]) {
            visited[i][j] = true; // 기준 값과
            visited[nx][ny] = true; // 연결된 값을 함께 방문표시 해주어야 한다.
            dfs(L + 1, sum + arr[i][j] + arr[nx][ny]);
            visited[i][j] = false;
            visited[nx][ny] = false;
          }
        }
      }
    }
  };

  dfs(0, 0);
  return answer;
};

console.log(solution(+N, arr));
