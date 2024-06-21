// ----------------------------------------------------------------------
/**
 * 🔍 좌표평면 위의 특정 구역 | O | 24.06.22
 *
 * [완전탐색2 - 물체 단위로 완전탐색]
 */

// ----------------------------------------------------------------------
/**
 * 🔍 가장 가까운 두 점 사이의 거리 | O | 24.06.22
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
