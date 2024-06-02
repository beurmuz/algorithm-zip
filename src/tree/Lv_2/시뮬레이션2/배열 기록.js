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
 * 🔍 ⭐️좌우로 움직이는 로봇⭐️ | X | 24.06.02 🔍
 *
 * [시뮬레이션2 - 배열 기록]
 * - writeLog 함수에서 arr에 값이 없을 때, 현 시간에서 방향에 따라 +1 or -1을 하고 기록을 남기기 시작해야 한다.
 */
// 틀린 부분 고치기
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M] = inputs[0].split(" ").map((v) => +v);
const a = inputs.slice(1, N + 1);
const b = inputs.slice(N + 1);

// 1. 각 배열에 위치를 기록한다.
function writeLog(logs) {
  let arr = [];
  let time = 0;

  for (let i = 0; i < logs.length; i++) {
    let [c, d] = logs[i].split(" ");
    c = +c;

    for (let j = 0; j < c; j++) {
      if (!arr.length) {
        if (d === "R") arr.push(time + 1);
        else if (d === "L") arr.push(time - 1);
        time++;
        continue;
      }
      if (d === "R") arr.push(arr[arr.length - 1] + 1);
      else if (d === "L") arr.push(arr[arr.length - 1] - 1);
    }
  }
  return arr;
}
let aArr = writeLog(a);
let bArr = writeLog(b);

// 2. 배열 길이 맞추기 - 기록한 2개의 배열 중 더 큰 길이를 구한 후, 그 길이만큼 마지막 값으로 채워준다.
if (aArr.length > bArr.length) {
  let cnt = aArr.length - bArr.length;
  for (let i = 0; i < cnt; i++) {
    bArr.push(bArr[bArr.length - 1]);
  }
} else if (aArr.length < bArr.length) {
  let cnt = bArr.length - aArr.length;
  for (let i = 0; i < cnt; i++) {
    aArr.push(aArr[aArr.length - 1]);
  }
}

// 3. 바로 직전에는 a와 b가 서로 다른 위치였다가, 그 다음 번에 같은 위치에 오게 되는 경우의 수를 구한다.
let answer = 0;
for (let i = 1; i < aArr.length; i++) {
  if (aArr[i] === bArr[i] && aArr[i - 1] !== bArr[i - 1]) answer++;
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 악수와 전염병의 상관관계2 | O | 24.06.03 🔍
 *
 * [시뮬레이션2 - 배열 기록]
 */
