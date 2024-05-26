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
 * 🔍 ⭐️왔다 갔던 구역 2⭐️ | O | 24.05.26 🔍
 *
 * [시뮬레이션 - 구간 칠하기]
 * - 처음엔 틀렸고, 다시 풀어서 맞았다.
 * - R방향으로 갈 때 시작 지점과 종료 지점에  +1씩 해주어야 한다. (그래야 제대로 경로 색칠이 가능하기 때문)
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
  // console.log(arr)
  if (direction[i] === "L") {
    for (let j = now; j > now - counts[i]; j--) {
      arr[j] += 1;
    }
    now -= counts[i];
  } else {
    for (let j = now + 1; j < now + counts[i] + 1; j++) {
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
 * 🔍 ⭐️흰검 칠하기⭐️ | X | 24.05.26 🔍
 *
 * [시뮬레이션 - 구간 칠하기]
 * - 예제는 다 맞는데, 일부 테케가 틀린다. 범위는 제대로 잡은거 같은데, W와 B의 순서때문에 틀린 듯 하다. 즉 단순히 숫자로만 W/B/G를 판단할 수 없다는 뜻이다.
 *
 * NOTE: '왔다 갔던 구역 2' 문제와 '흰검 칠하기' 문제의 범위 설정 방법
 *      => "최악의 상황 고려하기"
 *        - 문제에서 input 값들이 가장 크게 들어왔을 때를 고려해서 풀면 된다.
 *        - 최대 1000번의 명령, 최대 100회 이동이므로 100 * 1000 * (좌우)2 = 200000
 */
// 1. 내가 푼 풀이
let [N, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
N = +N;

const nums = [];
const directions = [];
for (let i = 0; i < N; i++) {
  let [n, d] = inputs[i].split(" ");
  nums.push(+n);
  directions.push(d);
}

// const arr = Array(20001).fill(0);
const arr = Array(21).fill(0);

// let now = 10000;
let now = 10;
for (let i = 0; i < N; i++) {
  if (directions[i] === "R") {
    for (let j = now; j < now + nums[i]; j++) {
      arr[j] += 1;
    }
    now += nums[i];
  } else {
    for (let j = now - 1; j > now - nums[i] - 1; j--) {
      arr[j] += 1;
    }
    now -= nums[i];
  }
  console.log(0, now);
}
// 숫자가 1 or 3이면 검정색 | 2이면 흰색 | 4이상이면 회색인 것
let answer = [0, 0, 0]; // [black, white, gray]
for (let i = 0; i < 20001; i++) {
  if (arr[i] === 1 || arr[i] === 3) answer[0] += 1;
  else if (arr[i] === 2) answer[1] += 1;
  else if (arr[i] >= 4) answer[2] += 1;
}

console.log(answer.join(" "));

// 2. 해설지
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let n = Number(input[0]);

const MAX_K = 100000;
let arr = Array(2 * MAX_K + 1).fill(0);
let black = Array(2 * MAX_K + 1).fill(0);
let white = Array(2 * MAX_K + 1).fill(0);

let now = MAX_K;
for (let i = 1; i <= n; i++) {
  let [x, c] = input[i].split(" ");
  x = Number(x);

  if (c === "L") {
    // x칸 왼쪽으로 칠합니다.
    while (x > 0) {
      arr[now] = 1;
      white[now] += 1;
      x -= 1;

      if (x) now -= 1;
    }
  } else {
    // x칸 오른쪽으로 칠합니다.
    while (x > 0) {
      arr[now] = 2;
      black[now] += 1;
      x -= 1;

      if (x) now += 1;
    }
  }
}

let b = 0,
  w = 0,
  g = 0;

for (let i = 0; i < 2 * MAX_K + 1; i++) {
  if (black[i] >= 2 && white[i] >= 2) g += 1; // 회색
  else if (arr[i] === 1) w += 1; // 흰색
  else if (arr[i] === 2) b += 1; // 검정색
}

console.log(`${w} ${b} ${g}`);

// ----------------------------------------------------------------------
/**
 * 🔍 신기한 타일 뒤집기 | O | 24.05.26 🔍
 *
 * [시뮬레이션 - 구간 칠하기]
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);

const MAX_VALUE = 100000;
const arr = Array(2 * MAX_VALUE + 1).fill(0);
// const l_white = Array(2 * MAX_VALUE + 1).fill(0); // 1
// const r_black = Array(2 * MAX_VALUE + 1).fill(0); // 2

let now = MAX_VALUE;

for (let i = 1; i <= N; i++) {
  let [n, d] = inputs[i].split(" ");
  n = +n;

  if (d === "L") {
    // L이면 W, 1
    while (n > 0) {
      arr[now] = 1;
      n -= 1;

      if (n) now -= 1;
    }
  } else {
    // R이면 B, 2
    while (n > 0) {
      arr[now] = 2;
      n -= 1;

      if (n) now += 1;
    }
  }
}

let answer = [0, 0]; // [W, B]
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 1) answer[0] += 1;
  else if (arr[i] === 2) answer[1] += 1;
}

console.log(answer.join(" "));
