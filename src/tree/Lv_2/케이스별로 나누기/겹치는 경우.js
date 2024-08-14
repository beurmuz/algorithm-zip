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

// ----------------------------------------------------------------------
/**
 * 🔍 구역 청소 | O | 24.08.14
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [xa, xb] = inputs[0].split(" ").map(Number);
const [xc, xd] = inputs[1].split(" ").map(Number);

// 내 풀이
const arr = Array(101).fill(0);
for (let i = xa; i < xb; i++) {
  arr[i] += 1;
}
for (let i = xc; i < xd; i++) {
  arr[i] += 1;
}

let answer = 0;
for (let i = 0; i <= 101; i++) {
  if (arr[i] >= 1) answer += 1;
}
console.log(answer);

// 해설
// - 두 구역이 겹치는지 알기 위해 겹치지 않는 경우를 먼저 생각해보고 영역의 크기를 구하면 된다.
// 겹치는 경우 구역의 크기: max(y1, y2) - min(x1, x2)
// 겹치지 않을 때 구역의 크기: (y1 - x1) + (y2 - x2)
const overlap = (x1, x2, x3, x4) => {
  // 겹치지 않는 경우를 먼저 처리
  if (x2 < x3 || x4 < x1) return false;
  // 나머지는 전부 겹치는 경우
  else return true;
};

// 겹치는지 확인하기
if (overlap(xa, xb, xc, xd)) console.log(Math.max(xb, xd) - Math.min(xa, xc));
else console.log(xb - xa + (xd - xc));

// ----------------------------------------------------------------------
/**
 * 🔍 전부 겹치는 선분 | O | 24.08.14
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);

// 내 풀이
const arr = Array(101).fill(0);
for (let i = 1; i <= N; i++) {
  let [x1, x2] = inputs[i].split(" ").map(Number);
  for (let j = x1; j <= x2; j++) {
    arr[j] += 1;
  }
}

let answer = "No";
for (let i = 0; i < 101; i++) {
  if (arr[i] === N) {
    answer = "Yes";
    break;
  }
}
console.log(answer);

// 해설
// - 선분이 굉장히 많은 경우, 조건을 만족하지 않는 경우를 제외하는 방법 사용하기
// - 시작점 중 가장 뒤에 있는 좌표와 끝점 중 가장 앞에 있는 점의 좌표를 확인하여,
// - 어느 한 선분이라도 시작점이 다른 선분의 끝 점보다 뒤에 온다면 선분이 겹치는 지점이 생길 수 없음을 이용하기
let maxX1 = 0;
let minX2 = Number.MAX_SAFE_INTEGER;

// 시작점 중 가장 뒤에 있는 좌표와 끝점 중, 가장 앞에 있는 점의 좌표를 확인한다.
for (let i = 1; i <= N; i++) {
  let [x1, x2] = inputs[i].split(" ").map(Number);
  maxX1 = Math.max(maxX1, x1);
  minX2 = Math.min(minX2, x2);
}
// 만약 어느 한 선분이라도 시작점이 다른 선분의 끝점보다 뒤에 온다면, 선분이 겹칠 수 없다.
if (minX2 >= maxX1) console.log("Yes");
else console.log("No");

// ----------------------------------------------------------------------
/**
 * 🔍 전부 겹치는 선분 2 | O | 24.08.14
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const poses = inputs.slice(1).map((line) => line.split(" ").map(Number));

let answer = "No";
let flag = false;

for (let i = 0; i < N; i++) {
  let arr = Array(101).fill(0);

  for (let j = 0; j < N; j++) {
    if (i === j) continue;
    for (let k = poses[j][0]; k <= poses[j][1]; k++) {
      arr[k] += 1;
    }
  }

  for (let j = 0; j <= 100; j++) {
    if (arr[j] === N - 1) {
      answer = "Yes";
      flag = true;
      break;
    }
  }
  if (flag) break;
}
console.log(answer);
