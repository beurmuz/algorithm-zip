// ----------------------------------------------------------------------
/**
 * 🔍 Time to Time | O | 24.05.23 🔍
 *
 * [시뮬레이션 - 날짜와 시간]
 */
const [sh, sm, th, tm] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

function hourToMin(hour) {
  return hour * 60;
}

let targetMin = hourToMin(th) + tm;
let startMin = hourToMin(sh) + sm;

console.log(targetMin - startMin);

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️Date to Date⭐️ | O | 24.05.23 🔍
 *
 * [시뮬레이션 - 날짜와 시간]
 * - 다시 풀어보기!
 */
const [m1, d1, m2, d2] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

function numOfDays(m, d) {
  const mDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let totalDays = 0;

  // 1월부터 (m-1)월 까지는 전부 꽉 채워져 있다.
  for (let i = 1; i < m; i++) {
    totalDays += mDays[i];
  }

  // m월은 정확히 d일만 있다.
  totalDays += d;
  return totalDays;
}

let targetDay = numOfDays(m2, d2);
let startDay = numOfDays(m1, d1);

console.log(targetDay - startDay + 1);

// ----------------------------------------------------------------------
/**
 * 🔍  | O | 24.05.23 🔍
 *
 * [시뮬레이션 - 날짜와 시간]
 */

// ----------------------------------------------------------------------
/**
 * 🔍  | O | 24.05.23 🔍
 *
 * [시뮬레이션 - 날짜와 시간]
 */
