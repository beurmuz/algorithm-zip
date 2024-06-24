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
 * 🔍 가장 가까운 두 점 사이의 거리 | X | 24.06.22
 *
 * [완전탐색2 - 물체 단위로 완전탐색]
 */
const input = require("fs").readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const points = input.slice(1, 1 + n).map((line) => line.split(" ").map(Number));

// 두 점 사이의 거리의 제곱 값을 반환하는 함수
function dist(i, j) {
  const [x1, y1] = points[i];
  const [x2, y2] = points[j];
  return (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
}

// 모든 쌍에 대해서 거리 제곱값을 계산하여 최솟값 찾기
let minDist = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    minDist = Math.min(minDist, dist(i, j));
  }
}

console.log(minDist);
