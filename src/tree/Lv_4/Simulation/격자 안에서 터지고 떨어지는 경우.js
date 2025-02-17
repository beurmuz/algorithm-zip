// ----------------------------------------------------------------------
/**
 * 🔍 1차원 젠가 | O | 25.02.17 🔍
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
let blocks = inputs.slice(1, N + 1).map(Number);
const removeInfos = inputs
  .slice(N + 1)
  .map((line) => line.split(" ").map(Number));

let tmp;
removeInfos.forEach(([x, y]) => {
  tmp = [];
  // 1. 범위 내 숫자들을 제외하고 tmp에 push한다.
  for (let i = 0; i < blocks.length; i++) {
    if (x - 1 <= i && i <= y - 1) continue;
    tmp.push(blocks[i]);
  }
  // 2. tmp를 다시 blocks에 옮겨 저장한다.
  blocks = [];
  for (let i = 0; i < tmp.length; i++) {
    blocks.push(tmp[i]);
  }
});

if (blocks.length === 0) {
  console.log(0);
} else {
  console.log(blocks.length);
  blocks.forEach((v) => console.log(v));
}

// ----------------------------------------------------------------------
/**
 * 🔍 십자 모양 폭발 | O | 25.02.18 🔍
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
let grid = inputs
  .slice(1, N + 1)
  .map((line) => line.trim().split(" ").map(Number));
let [r, c] = inputs[inputs.length - 1].split(" ").map(Number);
let answer = Array.from({ length: N }, () => Array(N).fill(0));

let crossN = grid[r - 1][c - 1];
let dx = [0, 1, 0, -1];
let dy = [1, 0, -1, 0];

// 십자 모양 폭발 진행
for (let k = 0; k < 4; k++) {
  let x = r - 1;
  let y = c - 1;

  grid[x][y] = 0;

  // 총 crossN 크기까지 터진다.
  for (let i = 1; i < crossN; i++) {
    x += dx[k];
    y += dy[k];

    if (0 <= x && x < N && 0 <= y && y < N) grid[x][y] = 0;
  }
}

// 중력 작용
for (let col = 0; col < N; col++) {
  let tmpRowIdx = N - 1;
  for (let row = N - 1; row >= 0; row--) {
    if (grid[row][col] !== 0) {
      answer[tmpRowIdx][col] = grid[row][col];
      tmpRowIdx--;
    }
  }
}

// 출력
answer.forEach((line) => console.log(...line));
