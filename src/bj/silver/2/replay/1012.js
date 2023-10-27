"use strict";

/**
 * [DFS 문제]
 * - 덩어리를 찾는 문제는 DFS로 풀 수 있다.
 * - 단, 이때 dfs 함수 내에는 따로 해당 함수를 탈출하는 조건이 필요없다. 대신 방문 여부를 체크할 배열이 따로 필요하다.
 */

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const T = +input.shift();

function solution(input, T) {
  let p = 0;

  for (let t = 0; t < T; t++) {
    let answer = 0;
    let [M, N, K] = input[p].split(" ").map((v) => +v);
    let graph = Array.from({ length: M }, () => Array(N).fill(0)); // 배추 지도
    let checked = Array.from({ length: M }, () => Array(N).fill(false)); // 방문여부 체크

    // 현재 p(시작점)값을 tmp에 저장
    let start = p;

    // 들어온 input값으로 배추를 심는다.
    for (p = p + 1; p <= start + K; p++) {
      let [x, y] = input[p].split(" ");
      graph[x][y] = 1;
    }

    const dfs = (x, y) => {
      checked[x][y] = 1;
      let dx = [-1, 0, 1, 0];
      let dy = [0, 1, 0, -1];

      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];

        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < M &&
          ny < N &&
          !checked[nx][ny] &&
          graph[nx][ny] === 1
        ) {
          dfs(nx, ny);
        }
      }
    };

    // m x n 그래프에서 배추의 개수 세기
    for (let x = 0; x < M; x++) {
      for (let y = 0; y < N; y++) {
        if (graph[x][y] === 1 && !checked[x][y]) {
          // 배추가 심어져있고, 아직 방문하지 않았다면
          dfs(x, y); // 깊이우선 탐색 시작!
          answer++; // 덩어리를 찾았으니 벌레 개수 1개 증가
        }
      }
    }
    console.log(answer);
  }
}
solution(input, T);
