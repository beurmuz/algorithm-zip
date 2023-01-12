"use strict";

/**
 * dfs로 풀어야하나 했으나, 최단거리를 구하는 문제라 bfs로 풀어야한다.
 */
const [values, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (values, inputs) => {
  const [n, m] = values.split(" ").map((v) => +v);
  const miro = inputs.map((v) => v.split("").map((vv) => +vv));

  const bfs = (n, m, miro) => {
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    const queue = [[0, 0, 1]]; // (0, 0) 위치, 거리 1을 넣고 시작한다.

    while (queue.length) {
      const [x, y, distance] = queue.shift();

      for (let k = 0; k < 4; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];
        if (nx >= 0 && ny >= 0 && nx < n && ny < m && miro[nx][ny] === 1) {
          miro[nx][ny] = distance + 1; // 그 지점에 위치를 저장한다.
          queue.push([nx, ny, distance + 1]);
        }
      }
    }
  };
  bfs(n, m, miro);
  return miro[n - 1][m - 1];
};

console.log(solution(values, inputs));
