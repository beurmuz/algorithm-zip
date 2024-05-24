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
 * 🔍 DateTime to DateTime | O | 24.05.24 🔍
 *
 * [시뮬레이션 - 날짜와 시간]
 */
const [d, h, m] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

function numsOfMin(d, h, m) {
  let totalMin = 0;

  // 1. day 계산하기: (day - 1)까지는 완전히 모든 시간이 포함된다.
  totalMin += (d - 1) * 24 * 60;
  // 2. hour 계산하기
  totalMin += h * 60;
  // 3. m 더하기
  totalMin += m;
  return totalMin;
}

// 일, 시, 분만 계산하면 된다.
let startMin = numsOfMin(11, 11, 11);
let targetMin = numsOfMin(d, h, m);

targetMin - startMin >= 0 ? console.log(targetMin - startMin) : console.log(-1);

// ----------------------------------------------------------------------
/**
 * 🔍 요일 맞추기 | O | 24.05.24 🔍
 *
 * [시뮬레이션 - 날짜와 시간]
 * - m1, d1보다 m2, d2가 앞선 경우를 고려해야 한다.
 */
const [m1, d1, m2, d2] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

// 총 일수를 구하는 함수
function numOfDays(m, d) {
  const mDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let totalDays = 0;

  // (m-1)까지 모든 일수가 있음
  for (let i = 0; i < m; i++) {
    totalDays += mDays[i];
  }
  totalDays += d;
  return totalDays;
}

// 총 일수를 요일로 바꿔주는 함수
function getWeek(day) {
  let weeks = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  while (day < 0) {
    // 타겟 날짜가 시작 날짜보다 이전일 경우를 고려해서 day를 양수로 맞춰주어야 한다.
    day += 7;
  }

  let weeksIdx = day % 7;
  return weeks[weeksIdx];
}

let passDay = numOfDays(m2, d2) - numOfDays(m1, d1);
console.log(getWeek(passDay));

// ----------------------------------------------------------------------
/**
 * 🔍 그 요일은 | O | 24.05.24 🔍
 *
 * [시뮬레이션 - 날짜와 시간]
 * - 찾고자하는 요일의 idx를 파악하고, 그 idx를 기준으로 시작점을 잡는 것이 중요하다.
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [m1, d1, m2, d2] = inputs[0].split(" ").map((v) => +v);
const week = inputs[1];

// 총 일수를 구하는 함수
function numOfDays(m, d) {
  const mDays = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let totalDays = 0;

  // (m-1)까지 모든 일수가 있음
  for (let i = 0; i < m; i++) {
    totalDays += mDays[i];
  }
  totalDays += d;
  return totalDays;
}

// 총 일수를 바탕으로 요일 등장 횟수를 세는 함수
function getWeek(n, week) {
  let weeks = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  let weekIdx = 0;
  for (let i = 0; i < 7; i++) {
    if (weeks[i] === week) {
      weekIdx = i;
      break;
    }
  }

  let sDate = weekIdx;
  let count = 0;
  for (let i = weekIdx; i <= n; i++) {
    sDate += 7;
    count += 1;
    if (sDate > n) {
      break;
    }
  }
  return count;
}

let dayTerm = numOfDays(m2, d2) - numOfDays(m1, d1);
console.log(getWeek(dayTerm, week));
