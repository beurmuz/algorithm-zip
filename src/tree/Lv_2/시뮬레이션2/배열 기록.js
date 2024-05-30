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

// ----------------------------------------------------------------------
/**
 * 🔍  | O | 24.05.30 🔍
 *
 * [시뮬레이션2 - 배열 기록]
 */
