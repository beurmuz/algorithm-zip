// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️최소 경로로 탈출 하기⭐️ | O | 25.03.20 🔍
 * - 정답이지만 한번 더 풀어보기!
 */
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const grid = input.slice(1, n + 1).map((line) => line.split(" ").map(Number));

// 최단거리 출력 문제
const dist = Array.from({ length: n }, () => Array(m).fill(-1));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function inRange(x, y) {
  return 0 <= x && x < n && 0 <= y && y < m;
}

function bfs(x, y) {
  while (queue.length) {
    let [cx, cy] = queue.shift();

    for (let d = 0; d < 4; d++) {
      let nx = cx + dx[d];
      let ny = cy + dy[d];

      // 격자 내에 있고, 뱀이 없으며, 아직 가지 않아서 -1인 경우
      if (inRange(nx, ny) && grid[nx][ny] === 1 && dist[nx][ny] === -1) {
        queue.push([nx, ny]);
        dist[nx][ny] = dist[cx][cy] + 1;
      }
    }
  }
}
let queue = [];
queue.push([0, 0]);
dist[0][0] = 0;
bfs(0, 0);

console.log(dist[n - 1][m - 1]);

// ----------------------------------------------------------------------
/**
 * 🔍 나이트 | O | 25.03.20 🔍
 */
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
let [r1, c1, r2, c2] = input[1].split(" ").map((v) => Number(v) - 1);

const dist = Array.from({ length: n }, () => Array(n).fill(-1));
const dx = [-2, -1, 1, 2, 2, 1, -1, -2];
const dy = [1, 2, 2, 1, -1, -2, -2, -1];

function inRange(x, y) {
  return 0 <= x && x < n && 0 <= y && y < n;
}

function bfs() {
  while (queue.length) {
    let [cx, cy] = queue.shift();

    for (let d = 0; d < 8; d++) {
      let nx = cx + dx[d];
      let ny = cy + dy[d];

      if (inRange(nx, ny) && dist[nx][ny] === -1) {
        queue.push([nx, ny]);
        dist[nx][ny] = dist[cx][cy] + 1;
      }
    }
  }
}

let queue = [];
queue.push([r1, c1]);
dist[r1][c1] = 0;
bfs();

console.log(dist[r2][c2]);
