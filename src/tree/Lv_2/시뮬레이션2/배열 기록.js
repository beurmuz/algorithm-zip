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
 * 🔍 ⭐️선두를 지켜라⭐️ | X | 24.05.30, 24.06.02 🔍
 *
 * [시뮬레이션2 - 배열 기록]
 */
// 처음에 푼 풀이 (틀림)
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

// 24.06.02 다시 푼 풀이
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M] = inputs[0].split(" ").map((v) => +v);
const a = inputs.slice(1, N + 1);
const b = inputs.slice(N + 1);

function timeLog(logs) {
  let arr = [];

  // 어떤 속도로 몇시간동안 이동했는지
  for (let i = 0; i < logs.length; i++) {
    let [v, t] = logs[i].split(" ").map((v) => +v);

    // 거리 = 속력 x 시간, 거리는 1씩 증가
    for (let j = 1; j <= t; j++) {
      // 1~t초 동안 1씩 이동
      if (arr.length) arr.push(arr[arr.length - 1] + v);
      // 마지막 지점에서 현재 속도를 더한다.
      else arr.push(v);
    }
  }
  return arr;
}

let aLog = timeLog(a);
let bLog = timeLog(b);

// 선두가 바뀌는 지점을 찾는다.
let winner = "";
let answer = 0;
for (let i = 0; i < aLog.length; i++) {
  if (aLog[i] > bLog[i]) {
    if (winner === "B") answer += 1;
    winner = "A";
  } else if (aLog[i] < bLog[i]) {
    if (winner === "A") answer += 1;
    winner = "B";
  }
}
console.log(answer);

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
