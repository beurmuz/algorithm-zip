// ----------------------------------------------------------------------
/**
 * 🔍 블럭쌓는 명령2 | O | 24.05.24 🔍
 *
 * [시뮬레이션 - 구간 칠하기]
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, K] = inputs[0].split(" ").map((v) => +v);

const blocks = Array.from({ length: N + 1 }, () => 0);

// 블럭쌓기 시작!
for (let i = 1; i <= K; i++) {
  let [s, e] = inputs[i].split(" ").map((v) => +v);
  for (let j = s; j <= e; j++) {
    blocks[j] += 1;
  }
}

console.log(Math.max(...blocks));

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️최대로 겹치는 구간⭐️ | O | 24.05.24 🔍
 *
 * [시뮬레이션 - 구간 칠하기]
 * - ⭐️ 음수의 범위가 나왔을 경우, offset 설정이 중요하다.⭐️
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = +inputs[0];

// 1. 시작점과 끝점 분리하기
const starts = [];
const ends = [];
for (let i = 1; i <= N; i++) {
  let [s, e] = inputs[i]
    .trim()
    .split(" ")
    .map((v) => +v);
  starts.push(s);
  ends.push(e);
}

// 2. 가장 작은 시작점과 가장 큰 마지막 지점을 찾고, 시작값의 부호에 따라 offset을 설정한다.
let [lt, rt] = [Math.min(...starts), Math.max(...ends)];
let offset = 0;
if (lt < 0) offset += Math.abs(lt);

// 3. offset을 추가해 구간 배열을 생성한 후, 겹치는 지점을 찾는다.
const arr = Array(rt + offset + 1).fill(0);
for (let i = 0; i < N; i++) {
  // 총 N개의 선분
  for (let j = starts[i] + offset; j < ends[i] + offset; j++) {
    arr[j] += 1;
  }
}

// 4. 가장 많이 겹치는 선분 개수
console.log(Math.max(...arr));

// ----------------------------------------------------------------------
/**
 * 🔍 최대로 겹치는 지점 | O | 24.05.25 🔍
 *
 * [시뮬레이션 - 구간 칠하기]
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = +inputs[0];

const starts = [];
const ends = [];

for (let i = 1; i <= N; i++) {
  let [s, e] = inputs[i].split(" ").map((v) => +v);
  starts.push(s);
  ends.push(e);
}

const arr = Array.from({ length: Math.max(...ends) + 1 }, () => 0);
for (let i = 0; i < N; i++) {
  for (let j = starts[i]; j <= ends[i]; j++) {
    arr[j] += 1;
  }
}

console.log(Math.max(...arr));

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️왔다 갔던 구역 2⭐️ | X | 24.05.25 🔍
 *
 * [시뮬레이션 - 구간 칠하기]
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = +inputs[0];

const counts = [];
const direction = [];

for (let i = 1; i <= N; i++) {
  let [n, d] = inputs[i].split(" ");
  counts.push(+n);
  direction.push(d);
}

// Array를 2001크기로 잡고 푼다.
const arr = Array(2001).fill(0);
let now = 1000;

for (let i = 0; i < N; i++) {
  if (direction[i] === "L") {
    for (let j = now; j > now - counts[i]; j--) {
      arr[j] += 1;
    }
    now -= counts[i];
  } else {
    for (let j = now; j < now + counts[i]; j++) {
      arr[j] += 1;
    }
    now += counts[i];
  }
}

let count = 0;
for (let i = 0; i < 2002; i++) {
  if (arr[i] >= 2) count++;
}

console.log(count);

// ----------------------------------------------------------------------
/**
 * 🔍  | O | 24.05.25 🔍
 *
 * [시뮬레이션 - 구간 칠하기]
 */

// ----------------------------------------------------------------------
/**
 * 🔍  | O | 24.05.25 🔍
 *
 * [시뮬레이션 - 구간 칠하기]
 */
