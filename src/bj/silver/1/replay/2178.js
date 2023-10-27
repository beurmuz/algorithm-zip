"use strict";

/**
 * [BFS]
 * - 최단거리를 구해야하므로 BFS로 풀어야한다.
 * - 해당 문제에서는 입력값으로 주어진 MIRO에 최단거리를 계속 기록한다.
 */
const [values, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (values, inputs) => {
  const [N, M] = values.split(" ").map((v) => +v);
  const MIRO = inputs.map((v) => v.split("").map((vv) => +vv));

  const bfs = (N, M, MIRO) => {
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    const queue = [];
    queue.push([0, 0, 1]); // (x, y, 거리)

    while (queue.length) {
      const [x, y, distance] = queue.shift();

      for (let k = 0; k < 4; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];

        if (nx >= 0 && ny >= 0 && nx < N && ny < M && MIRO[nx][ny] === 1) {
          MIRO[nx][ny] = distance + 1; // 해당 지점에 지나온 위치의 길이를 저장한다.
          queue.push([nx, ny, distance + 1]);
        }
      }
    }
  };

  bfs(N, M, MIRO);
  return MIRO[N - 1][M - 1];
};

console.log(solution(values, inputs));
