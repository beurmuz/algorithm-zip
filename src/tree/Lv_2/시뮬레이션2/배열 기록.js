// ----------------------------------------------------------------------
/**
 * 🔍 만나는 그 순간 | O | 24.05.30 🔍
 *
 * [시뮬레이션2 - 배열 기록]
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M] = inputs[0].split(" ").map((v) => +v);
let aMove = inputs.slice(1, N + 1);
let bMove = inputs.slice(N + 1);

function makeTimeTable(moves) {
  let pos = 0;
  let arr = [];
  moves.forEach((move) => {
    let [d, t] = move.split(" ");
    t = +t;

    if (d === "L") {
      // d: 'L'
      while (t !== 0) {
        pos -= 1;
        arr.push(pos);
        t -= 1;
      }
    } else {
      // d: 'R'
      while (t !== 0) {
        pos += 1;
        arr.push(pos);
        t -= 1;
      }
    }
  });
  return arr;
}

let aResult = makeTimeTable(aMove);
let bResult = makeTimeTable(bMove);

function findSec(a, b) {
  for (let i = 0; i < Math.min(a.length, b.length); i++) {
    if (a[i] === b[i]) {
      return i + 1;
    }
  }
  return -1;
}

console.log(findSec(aResult, bResult));

// ----------------------------------------------------------------------
/**
 * 🔍 벌금은 누구에게 | O | 24.05.30 🔍
 *
 * [시뮬레이션2 - 배열 기록]
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M, K] = inputs[0].split(" ").map((v) => +v);

const students = Array.from({ length: N + 1 }, () => 0); // 벌칙을 받는 횟수 저장
let answer = -1;
for (let i = 1; i <= M; i++) {
  let now = Number(inputs[i]);
  students[now] += 1;
  if (students[now] >= K) {
    answer = now;
    break;
  }
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️선두를 지켜라⭐️ | X | 24.05.30 🔍
 *
 * [시뮬레이션2 - 배열 기록]
 */
// 내가 푼 풀이
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M] = inputs[0].split(" ").map((v) => +v);
const aLog = inputs.slice(1, N + 1);
const bLog = inputs.slice(N + 1);

function timePerLog(logs) {
  let arr = [];
  // 어떤 속도로 몇시간동안 이동했는지
  for (let i = 0; i < logs.length; i++) {
    let [v, t] = logs[i].split(" ").map((v) => +v);
    // 거리 = 속력 x 시간
    // 속력 = 거리/시간
    // 거리는 항상 1씩 증가
    for (let j = 1; j <= t; j++) {
      if (arr.length) arr.push(arr[arr.length - 1] + v);
      else arr.push(v);
    }
  }
  return arr;
}
let aArr = timePerLog(aLog);
let bArr = timePerLog(bLog);

let win = aArr[0] > bArr[0] ? "a" : "b";
let answer = 0; // 바뀌는 횟수
for (let i = 1; i < aArr.length; i++) {
  let now = "";
  if (aArr[i] > bArr[i]) now = "a";
  else if (aArr[i] < bArr[i]) now = "b";

  if (now != win) {
    answer++;
    win = now;
  }
}
console.log(answer);

// 다른 풀이
const [[n, m], ...inputs] = `${require("fs").readFileSync(0)}`.trim().split`
`.map((row) => row.trim().split` `.map(Number));
const [a, b] = [inputs.slice(0, n), inputs.slice(n)];
const SIZE = 1001;
const time1 = Array.from({ length: SIZE }, () => 0);
const time2 = Array.from({ length: SIZE }, () => 0);
let offset = 0;
for (const [v, t] of a) {
  for (let i = 1; i <= t; i++) {
    time1[offset + i] = time1[offset + i - 1] + v;
  }
  offset += t;
}
offset = 0;
for (const [v, t] of b) {
  for (let i = 1; i <= t; i++) {
    time2[offset + i] = time2[offset + i - 1] + v;
  }
  offset += t;
}
let prevSign = Math.sign(time1[1] - time2[1]);
let cnt = 0;
for (let i = 1; i <= offset; i++) {
  const curSign = Math.sign(time1[i] - time2[i]);
  if (curSign && prevSign !== curSign) {
    prevSign = curSign;
    cnt++;
  }
}
console.log(cnt);

// ----------------------------------------------------------------------
/**
 * 🔍  | O | 24.05.30 🔍
 *
 * [시뮬레이션2 - 배열 기록]
 */

// ----------------------------------------------------------------------
/**
 * 🔍  | O | 24.05.30 🔍
 *
 * [시뮬레이션2 - 배열 기록]
 */
