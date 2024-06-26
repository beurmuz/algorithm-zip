// ----------------------------------------------------------------------
/**
 * 🔍 좌표평면 위의 특정 구역 | X | 24.06.23, 06.24
 *
 * [완전탐색2 - 물체 단위로 완전탐색]
 */
const input = require("fs").readFileSync(0).toString().trim().split("\n");

const intMax = Number.MAX_SAFE_INTEGER;

// 변수 선언 및 입력
const N = Number(input.shift());
const points = input.slice(0, N).map((line) => line.split(" ").map(Number));

let answer = intMax;

for (let i = 0; i < N; i++) {
  let minX = intMax,
    maxX = 1;
  let minY = intMax,
    maxY = 1;
  for (let j = 0; j < N; j++) {
    // i번째 점은 제외합니다.
    if (j === i) {
      continue;
    }
    const [x, y] = points[j];

    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x);
    minY = Math.min(minY, y);
    maxY = Math.max(maxY, y);
  }

  answer = Math.min(answer, (maxX - minX) * (maxY - minY));
}

console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 가장 가까운 두 점 사이의 거리 | X | 24.06.22, 06.25
 *
 * [완전탐색2 - 물체 단위로 완전탐색]
 */
const input = require("fs").readFileSync(0).toString().trim().split("\n");
const N = Number(input[0]);
const points = input.slice(1, 1 + N).map((line) => line.split(" ").map(Number));

function dist(i, j) {
  const [x1, y1] = points[i];
  const [x2, y2] = points[j];
  return (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
}

let answer = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    answer = Math.min(answer, dist(i, j));
  }
}

console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 삼각형 만들기 | X | 24.06.26
 *
 * [완전탐색2 - 물체 단위로 완전탐색]
 */
const input = require("fs").readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const points = input.slice(1, 1 + n).map((line) => line.split(" ").map(Number));

function area(x1, y1, x2, y2, x3, y3) {
  return Math.abs(x1 * y2 + x2 * y3 + x3 * y1 - (x2 * y1 + x3 * y2 + x1 * y3));
}

let maxArea = 0;
for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    for (let k = j + 1; k < n; k++) {
      const [x1, y1] = points[i];
      const [x2, y2] = points[j];
      const [x3, y3] = points[k];
      if (
        (x1 === x2 || x1 === x3 || x2 === x3) &&
        (y1 === y2 || y1 === y3 || y2 === y3)
      ) {
        maxArea = Math.max(maxArea, area(x1, y1, x2, y2, x3, y3));
      }
    }
  }
}

console.log(maxArea);
