"use strict";

/**
 * 처음에 푼 풀이
 * - 지난번 토마토 (7576) 코드에서 위, 아래에 대한 방향을 추가해 6방향을 탐색하는 것 빼고는 다른 점이 없다.
 *
 * - 예제 테스트 케이스는 모두 다 맞지만, 채점을 돌리면 3%까지 채점하다가 틀렸다고 나온다.
 * => 찾아보니 3차원으로 푸는 문제!
 */
const [inputs, ...tomatos] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (inputs, tomatos) => {
  const [m, n, h] = inputs.split(" ").map(Number);
  const ds = [
    [n, 0], // 위
    [-n, 0], // 아래
    [0, -1],
    [0, 1],
    [1, 0],
    [-1, 0],
  ];
  const queue = [];
  const visited = Array.from({ length: n * h }, () => Array(m).fill(0));
  let total = m * n * h;
  let days = 0;

  // 현재 창고에서 익은 토마토만 queue에 넣기
  for (let i = 0; i < n * h; i++) {
    tomatos[i].split(" ").map((tomato, index) => {
      if (+tomato === 1) {
        visited[i][index] = 1; // 방문 표시
        queue.push([i, index, 0]);
        total--;
      } else if (+tomato === -1) {
        visited[i][index] = 1; // 빈 상자 방문 표시
        total--; // 빈 상자는 토마토가 익는 것과 관련이 없으므로 -1을 한다.
      }
    });
  }

  let qIndex = 0; // queueIndex
  while (queue.length !== qIndex) {
    const [x, y, day] = queue[qIndex];

    for (let k = 0; k < 6; k++) {
      let nx = x + ds[k][0];
      let ny = y + ds[k][1];

      if (nx < 0 || ny < 0 || nx >= n * h || ny >= m) continue;
      if (visited[nx][ny] === 0) {
        visited[nx][ny] = 1; // 방문 표시
        queue.push([nx, ny, day + 1]);
        total--;
      }
    }
    qIndex++;
    days = day; // days를 갱신한다.
  }
  return total ? -1 : days;
};
console.log(solution(inputs, tomatos));

/**
 * 다시 푼 풀이
 * - 3차원으로 푼다. [x, y, z]
 * - ✅ 3차원 배열 생성 방법?
 *      => [...Array(h)].map((v) => [...Array(n)].map((vv) => Array(m).fill(0))
 */
const [inputs, ...tomatos] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (inputs, tomatos) => {
  const [m, n, h] = inputs.split(" ").map(Number);
  const ds = [
    // [x, y, z]
    [-1, 0, 0],
    [1, 0, 0],
    [0, 1, 0],
    [0, -1, 0],
    [0, 0, 1],
    [0, 0, -1],
  ];
  const queue = [];
  const visited = [...Array(h)].map((v) =>
    [...Array(n)].map((vv) => Array(m).fill(0))
  );
  let total = m * n * h;
  let z = 0;
  let days = 0;

  // 현재 창고에서 익은 토마토만 queue에 넣기
  for (let i = 0; i < tomatos.length; i++) {
    tomatos[i].split(" ").map((tomato, index) => {
      if (+tomato === 1) {
        visited[z][i % n][index] = 1; // 방문 표시
        queue.push([i % n, index, z, 0]);
        total--;
      } else if (+tomato === -1) {
        visited[z][i % n][index] = 1; // 빈 상자 방문 표시
        total--; // 빈 상자는 토마토가 익는 것과 관련이 없으므로 -1을 한다.
      }
    });
    if ((i + 1) % n === 0) ++z;
  }

  let qIndex = 0; // queueIndex
  while (queue.length !== qIndex) {
    const [x, y, z, day] = queue[qIndex];

    for (let k = 0; k < 6; k++) {
      let nx = x + ds[k][0];
      let ny = y + ds[k][1];
      let nz = z + ds[k][2];

      if (nx < 0 || ny < 0 || nz < 0 || nx >= n || ny >= m || nz >= h) continue;
      if (visited[nz][nx][ny] === 0) {
        visited[nz][nx][ny] = 1; // 방문 표시
        queue.push([nx, ny, nz, day + 1]);
        total--;
      }
    }
    qIndex++;
    days = day; // days를 갱신한다.
  }
  return total ? -1 : days;
};
console.log(solution(inputs, tomatos));
