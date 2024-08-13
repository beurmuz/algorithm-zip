// ----------------------------------------------------------------------
/**
 * 🔍 두 선분 | O | 24.08.13
 */
const [x1, x2, x3, x4] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// 내가 푼 풀이
const arr = Array.from({ length: 100 }, () => 0);
for (let i = x1; i <= x2; i++) {
  arr[i] += 1;
}
for (let i = x3; i <= x4; i++) {
  arr[i] += 1;
}

let answer = "nonintersecting";
for (let i = 0; i <= 100; i++) {
  if (arr[i] >= 2) {
    answer = "intersecting";
    break;
  }
}
console.log(answer);

// 해설
// x1 <= x2, x3 <= x4일때 두 선분이 서로 겹치지 않는 경우를 생각하면 편함
function overlap(x1, x2, x3, x4) {
  // 겹치지 않는 경우에 대한 처리를 먼저 진행
  if (x2 < x3 || x4 < x1) return false;
  else return true; // 나머지는 전부 겹치는 경우
}

if (overlap(x1, x2, x3, x4)) console.log("intersecting");
else console.log("nonintersecting");

// ----------------------------------------------------------------------
/**
 * 🔍 두 직사각형 | O | 24.08.13
 */
const [line1, line2] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [x1, y1, x2, y2] = line1.split(" ").map(Number);
const [a1, b1, a2, b2] = line2.split(" ").map(Number);

if (x2 < a1 || a2 < x1 || b2 < y1 || y2 < b1) {
  console.log("nonoverlapping");
} else console.log("overlapping");
