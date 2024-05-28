// ----------------------------------------------------------------------
/**
 * 🔍 사각형의 총 넓이2 | △ | 24.05.28 🔍
 *
 * [시뮬레이션1 - 사각형 칠하기]
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const rects = inputs
  .slice(1, N + 1)
  .map((line) => line.split(" ").map((v) => +v));

const OFFSET = 100;
const MAX_V = 200;

const arr = Array.from({ length: MAX_V + 1 }, () => Array(MAX_V + 1).fill(0));

// 1. rect 그리기
rects.forEach((rect) => {
  let [x1, y1, x2, y2] = rect;

  // OFFSET 더하기
  x1 += OFFSET;
  y1 += OFFSET;
  x2 += OFFSET;
  y2 += OFFSET;

  // 직사각형 칠하기
  for (let x = x1; x < x2; x++) {
    for (let y = y1; y < y2; y++) {
      arr[x][y] = 1;
    }
  }
});

// 2. 총 넓이 구하기
let answer = 0;
for (let x = 0; x < MAX_V + 1; x++) {
  for (let y = 0; y < MAX_V + 1; y++) {
    if (arr[x][y]) answer += 1;
  }
}

console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍  | O | 24.05.28 🔍
 *
 * [시뮬레이션1 - 사각형 칠하기]
 */

// ----------------------------------------------------------------------
/**
 * 🔍  | O | 24.05.28 🔍
 *
 * [시뮬레이션1 - 사각형 칠하기]
 */

// ----------------------------------------------------------------------
/**
 * 🔍  | O | 24.05.28 🔍
 *
 * [시뮬레이션1 - 사각형 칠하기]
 */
