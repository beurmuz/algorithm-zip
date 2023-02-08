"use strict";

/**
 * 핵심은 '최소 시간' 구하기 => 'BFS' 이용하기
 */
const [N, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (N, input) => {
  /**
   * 조건
   * 1. 아기 상어는 자신보다 큰 물고기가 있는 칸은 지나갈 수 없다.
   * 2. 아기 상어는 자신보다 크기가 큰 물고기만 먹을 수 있다.
   *  - 크기가 같은 물고기는 먹을 수 없지만, 그 물고기가 있는 칸은 지나갈 수 있다.
   *  - 먹을 수 있는 물고기가 1마리 => 그 물고기를 먹으러 간다.
   *  - 먹을 수 있는 물고기가 1마리 이상 => 가장 가까이에 있는 물고기를 먹으러 간다.
   *    - 아기 상어가 있는 칸에서 물고기가 있는 칸으로 이동할 때,
   **/
  const water = input.map((v) => v.split(" ").map(Number));
  const fishCount = [];
  let babySharkPos;
  water.forEach((row, x) =>
    row.forEach((size, y) => {
      if (size > 0 && size < 9) {
        fishCount[size] = (fishCount[size] ?? 0) + 1;
      } else if (size === 9) {
        babySharkPos = [x, y];
        water[x][y] = 0;
      }
    })
  );

  const offset = [
    [-1, 0],
    [0, -1],
    [0, 1],
    [1, 0],
  ];
  let babySharkSize = 2;
  let eaten = 0;
  const bfs = (size) => {
    const visited = [...Array(N)].map(() => Array(N).fill(false));
    const [defaultX, defaultY] = babySharkPos;
    visited[defaultX][defaultY] = true;
    let queue = [[defaultX, defaultY, 0]];
    let depth = 0;
    let nextPos;
    while (queue.length) {
      let stack = queue;
      queue = [];
      while (stack.length) {
        const [x, y, elapsed] = stack.pop();

        if (water[x][y] && water[x][y] <= size) {
          if (!depth) {
            depth = elapsed;
            nextPos = [x, y];
          } else {
            const [nx, ny] = nextPos;
            if (nx === x) {
              nextPos = ny < y ? nextPos : [x, y];
            } else {
              nextPos = nx < x ? nextPos : [x, y];
            }
          }
        }

        for (let i = 0; i < 4; i++) {
          const nx = x + offset[i][0];
          const ny = y + offset[i][1];
          if (
            nx >= 0 &&
            nx < N &&
            ny >= 0 &&
            ny < N &&
            !visited[nx][ny] &&
            water[nx][ny] <= babySharkSize
          ) {
            visited[nx][ny] = true;
            queue.push([nx, ny, elapsed + 1]);
          }
        }
      }
      if (depth) {
        break;
      }
    }

    if (nextPos) {
      const [nx, ny] = nextPos;
      fishCount[water[nx][ny]]--;
      water[nx][ny] = 0;
      babySharkPos = [nx, ny];
      eaten++;
      if (eaten === babySharkSize) {
        eaten = 0;
        babySharkSize++;
        edibleMaxSize++;
      }
    }

    return depth;
  };

  let time = 0;
  let edibleMaxSize = 1;
  while (fishCount.some((v, i) => i <= edibleMaxSize && v > 0)) {
    const elapsed = bfs(edibleMaxSize);
    if (elapsed) {
      time += elapsed;
    } else {
      break;
    }
  }
  return time;
};

console.log(solution(+N, input));
