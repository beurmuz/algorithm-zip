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
 * 🔍 겹치지 않는 사각형의 넓이 | O | 24.05.28 🔍
 *
 * [시뮬레이션1 - 사각형 칠하기]
 */
const rects = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map((v) => +v));
const MAX_V = 2000;
const OFFSET = 1000;

const arr = Array.from({ length: MAX_V + 1 }, () => Array(MAX_V + 1).fill(0));

// 1. 사각형 채우기
rects.forEach((rect, i) => {
  let [x1, y1, x2, y2] = rect;

  x1 += OFFSET;
  y1 += OFFSET;
  x2 += OFFSET;
  y2 += OFFSET;

  if (i === 0 || i === 1) {
    for (let x = x1; x < x2; x++) {
      for (let y = y1; y < y2; y++) {
        arr[x][y] = 1;
      }
    }
  } else {
    for (let x = x1; x < x2; x++) {
      for (let y = y1; y < y2; y++) {
        arr[x][y] = 2;
      }
    }
  }
});

let answer = 0;
for (let i = 0; i < MAX_V + 1; i++) {
  for (let j = 0; j < MAX_V + 1; j++) {
    if (arr[i][j] === 1) answer += 1;
  }
}

console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 색종이의 총 넓이 합 | △ | 24.05.28 🔍
 *
 * [시뮬레이션1 - 사각형 칠하기]
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const rects = inputs.splice(1, N + 1);
const OFFSET = 100;
const MAX_V = 200;

// 1. 사각형 그리기
const arr = Array.from({ length: MAX_V + 1 }, () => Array(MAX_V + 1).fill(0));
rects.forEach((rect) => {
  let [x1, y1] = rect.split(" ").map((v) => +v);
  let [x2, y2] = [x1 + 8, y1 + 8];

  // OFFSET 작업
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

// 2. 직사각형의 총 넓이합 구하기
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
