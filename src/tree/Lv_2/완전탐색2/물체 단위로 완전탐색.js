// ----------------------------------------------------------------------
/**
 * 🔍 좌표평면 위의 특정 구역 | X | 24.06.23, 06.27
 *
 * [완전탐색2 - 물체 단위로 완전탐색]
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let N = Number(inputs[0]);
let points = inputs.slice(1).map((line) => line.split(" ").map((v) => +v));

let answer = Number.MAX_SAFE_INTEGER;

// 하나의 점(i번 점) 빼기
for (let i = 0; i < N; i++) {
  // 직사각형의 최소 넓이를 구하려면 최소 x&y, 최대 x&y값을 구해야한다.
  let [minX, maxX] = [Number.MAX_SAFE_INTEGER, 1];
  let [minY, maxY] = [Number.MAX_SAFE_INTEGER, 1];

  for (let j = 0; j < N; j++) {
    if (j === i) continue; // i번째 점은 건너뛴다.

    let [x, y] = points[j];

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
 * 🔍 물체 두 개를 정하여 완전탐색 | O | 24.07.01
 *
 * [완전탐색2 - 물체 단위로 완전탐색]
 */
const n = 5;
const segments = [
  [1, 3],
  [2, 4],
  [5, 8],
  [6, 9],
  [7, 10],
];

let answer = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    let arr = Array(11).fill(0);

    for (let k = 0; k < n; k++) {
      if (k === i || k === j) continue;

      const [x1, x2] = segments[k];
      for (let part = x1; part <= x2; part++) {
        arr[part] += 1;
      }
    }
    let maxCnt = Math.max(...arr);
    answer = Math.min(answer, maxCnt);
  }
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 가장 가까운 두 점 사이의 거리 | X | 24.06.22, 07.01
 *
 * [완전탐색2 - 물체 단위로 완전탐색]
 */
const inputs = require("fs").readFileSync(0).toString().trim().split("\n");
const N = Number(inputs[0]);
const points = inputs.slice(1).map((line) => line.split(" ").map(Number));

// 두 점 사이의 거리를 계산하는 함수
function getDist(n1, n2) {
  let [nx1, ny1] = points[n1];
  let [nx2, ny2] = points[n2];

  return (nx1 - nx2) * (nx1 - nx2) + (ny1 - ny2) * (ny1 - ny2);
}

let answer = Number.MAX_SAFE_INTEGER;
for (let n1 = 0; n1 < N; n1++) {
  for (let n2 = n1 + 1; n2 < N; n2++) {
    answer = Math.min(answer, getDist(n1, n2));
  }
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 물체 세 개를 정하여 완전탐색 | O | 24.07.01
 *
 * [완전탐색2 - 물체 단위로 완전탐색]
 */
const n = 5;
const segments = [
  [1, 3],
  [2, 4],
  [5, 8],
  [6, 9],
  [7, 10],
];

function getMaxCnt(i1, i2, i3) {
  let arr = Array(11).fill(0);

  for (let i = 0; i < n; i++) {
    if (i === i1 || i === i2 || i === i3) continue;
    const [x1, x2] = segments[i];
    for (let part = x1; part <= x2; part++) {
      arr[part] += 1;
    }
  }
  return Math.max(...arr);
}

let answer = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    for (let k = j + 1; k < n; k++) {
      let maxCnt = getMaxCnt(i, j, k);
      answer = Math.min(answer, maxCnt);
    }
  }
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 삼각형 만들기 | X | 24.06.26, 24.07.01
 *
 * [완전탐색2 - 물체 단위로 완전탐색]
 */
const inputs = require("fs").readFileSync(0).toString().trim().split("\n");
const N = Number(inputs[0]);
const spots = inputs.slice(1).map((line) => line.split(" ").map((v) => +v));

// 넓이를 구한다. (삼각형의 넓이에 2를 곱한 값을 반환하기)
function getArea(x1, x2, x3, y1, y2, y3) {
  // 사선 공식, 신발끈 공식을 이용해 다각형의 면적을 구한다.
  return Math.abs(x1 * y2 + x2 * y3 + x3 * y1 - (x2 * y1 + x3 * y2 + x1 * y3));
}

let answer = 0; // 최대 넓이는 무조건 0 이상이다.
for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      let [x1, y1] = spots[i];
      let [x2, y2] = spots[j];
      let [x3, y3] = spots[k];

      // 세 점으로 이루어진 삼각형 중 한 면이 x축에 평행하려면, 적어도 두 점의 y좌표가 동일해야한다.
      // 세 점으로 이루어진 삼각형 중 한 면이 y축에 평행하려면, 적어도 두 점의 x좌표가 동일해야한다.
      // => 세 점 중 x좌표가 일치하는 쌍이 하나 이상, y좌표가 일치하는 쌍이 하나 있어야한다.
      if (
        (x1 === x2 || x1 === x3 || x2 === x3) &&
        (y1 === y2 || y1 === y3 || y2 === y3)
      ) {
        answer = Math.max(answer, getArea(x1, x2, x3, y1, y2, y3));
      }
    }
  }
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 운행되고 있는 시간 | O | 24.07.02
 *
 * [완전탐색2 - 물체 단위로 완전탐색]
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const timelines = inputs.slice(1).map((line) => line.split(" ").map(Number));

let answer = 0;
for (let i = 0; i < N; i++) {
  // i는 해고할 번호
  let arr = Array(1001).fill(0);
  for (let j = 0; j < N; j++) {
    if (i === j) continue;
    let [x1, x2] = timelines[j];

    for (let x = x1; x < x2; x++) {
      arr[x] = 1;
    }
  }
  let totalTime = arr.reduce((acc, v) => acc + v, 0);
  answer = Math.max(answer, totalTime);
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 겹치지 않는 선분2 | X | 24.07.02
 *
 * [완전탐색2 - 물체 단위로 완전탐색]
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const lines = inputs.slice(1).map((line) => line.split(" ").map(Number));

// 선분이 겹치는 경우 1) 지정한 하나의 선분이 비교할 선분보다 x1이 크고, x2가 작은 경우
// 선분이 겹치는 경우 2) 지정한 하나의 선분이 비교할 선분보다 x1이 작고, x2가 큰 경우
// => 즉, 지정한 하나의 선분 안에 비교할 선분이 속해있거나,
//       지정한 하나의 선분이 비교할 선분에 속해있는 경우

let answer = 0;
for (let i = 0; i < N; i++) {
  // i번째 선분이 다른 선분과 겹치지 않는지 확인하기
  let meet = false;
  for (let j = 0; j < N; j++) {
    if (j === i) continue;

    // 겹치는지 검사한다.
    if (
      (lines[i][0] <= lines[j][0] && lines[i][1] >= lines[j][1]) ||
      (lines[i][0] >= lines[j][0] && lines[i][1] <= lines[j][1])
    ) {
      meet = true; // 겹치는 경우 바로 반복문을 종료한다.
      break;
    }
  }

  // 겹치지 않은 경우 answer++
  if (!meet) answer += 1;
}
console.log(answer);
