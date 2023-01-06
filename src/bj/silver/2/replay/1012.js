"use strict";

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
    let [m, n, k] = input[p].split(" ").map((v) => +v);
    let graph = Array.from({ length: m }, () => Array(n).fill(0)); // 배추 지도
    let visited = Array.from({ length: m }, () => Array(n).fill(0)); // 방문 여부 체크 지도

    // 현재 p(시작점)값을 tmp에 저장
    let start = p;

    // 들어온 input값으로 배추를 심는다.
    for (p = p + 1; p <= start + k; p++) {
      let [x, y] = input[p].split(" ");
      graph[x][y] = 1;
    }

    const dfs = (x, y) => {
      visited[x][y] = 1; // 그 지점에 오는 순간 방문처리를 한다.
      let dx = [-1, 0, 1, 0];
      let dy = [0, 1, 0, -1];

      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];

        if (
          nx >= 0 &&
          nx < m &&
          ny >= 0 &&
          ny < n &&
          visited[nx][ny] === 0 &&
          graph[nx][ny] === 1
        ) {
          dfs(nx, ny);
        }
      }
    };

    // m x n 그래프에서 배추의 개수 세기
    for (let x = 0; x < m; x++) {
      for (let y = 0; y < n; y++) {
        if (graph[x][y] === 1 && visited[x][y] === 0) {
          // 배추가 있고, 아직 방문을 안했다면
          dfs(x, y); // 깊이 우선 탐색 시작!
          answer++; // 찾고 나오면 answer의 갯수를 한 개 늘린다.
        }
      }
    }
    console.log(answer);
  }
}
solution(input, T);
