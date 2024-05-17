/**
 * 🔍 1부터 특정 수까지의 합 | O | 24.05.15 🔍
 *
 * [함수]
 */
const N = require("fs").readFileSync("/dev/stdin").toString().trim();

function getDivideTen(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer += i;
  }
  return Math.floor(answer / 10);
}

console.log(getDivideTen(N));

// ----------------------------------------------------------------------
/**
 * 🔍 정수의 최솟값 | O | 24.05.15 🔍
 *
 * [함수]
 */
const arr = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

function findMin(arr) {
  arr.sort((a, b) => a - b);
  return arr[0];
}
console.log(findMin(arr));

// ----------------------------------------------------------------------
/**
 * 🔍 짝수이면서 합이 5의 배수인 수 | O | 24.05.15 🔍
 *
 * [함수]
 */
const N = require("fs").readFileSync("/dev/stdin").toString().trim();

function checkNum(n) {
  let partSum = String(n)
    .split("")
    .reduce((acc, v) => acc + Number(v), 0);
  if (n % 2 === 0 && partSum % 5 === 0) {
    return true;
  }
  return false;
}

if (checkNum(+N)) console.log("Yes");
else console.log("No");

// ----------------------------------------------------------------------
/**
 * 🔍 함수를 이용한 369 게임 | O | 24.05.15 🔍
 *
 * [함수]
 */
const [a, b] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

function find369(n) {
  let arr = String(n).split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "3" || arr[i] === "6" || arr[i] === "9") return true;
  }
  return false;
}

function find3x(n) {
  if (n % 3 === 0) return true;
  return false;
}

let answer = 0;
for (let i = a; i <= b; i++) {
  if (find369(i) || find3x(i)) answer++;
}

console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 함수를 이용한 소수 판별 | O | 24.05.15 🔍
 *
 * [함수]
 */
const [a, b] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

function checkPrime(n) {
  if (n === 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

let sum = 0;
for (let i = a; i <= b; i++) {
  if (checkPrime(i)) sum += i;
}

console.log(sum);

// ----------------------------------------------------------------------
/**
 * 🔍 함수를 이용한 윤년 판별 | O | 24.05.16 🔍
 *
 * [함수]
 */
const y = require("fs").readFileSync("/dev/stdin").toString().trim();

function isFourYear(n) {
  if (n % 4 !== 0 || (n % 100 === 0 && n % 400 !== 0)) {
    return false;
  }
  return true;
}

isFourYear(y) ? console.log("true") : console.log("false");

// ----------------------------------------------------------------------
/**
 * 🔍 두 수의 거듭제곱 | O | 24.05.16 🔍
 *
 * [함수]
 */
const [a, b] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

function calculate(a, b) {
  return a ** b;
}

console.log(calculate(a, b));

// ----------------------------------------------------------------------
/**
 * 🔍 사칙연산 함수 | O | 24.05.16 🔍
 *
 * [함수]
 */
const arr = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

function calculates(arr) {
  let [a, o, c] = arr;
  a = Number(a);
  c = Number(c);
  switch (o) {
    case "+":
      console.log(`${a} ${o} ${c} = ${a + c}`);
      break;
    case "-":
      console.log(`${a} ${o} ${c} = ${a - c}`);
      break;
    case "*":
      console.log(`${a} ${o} ${c} = ${a * c}`);
      break;
    case "/":
      console.log(`${a} ${o} ${c} = ${Math.floor(a / c)}`);
      break;
    default:
      console.log("False");
  }
}

calculates(arr);

// ----------------------------------------------------------------------
/**
 * 🔍 함수를 이용한 온전수 판별 | O | 24.05.16 🔍
 *
 * [함수]
 */
const [a, b] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

function isOnjeonsu(n) {
  if (n % 2 === 0) return false;
  if (n % 10 === 5) return false;
  if (n % 3 === 0 && n % 9 !== 0) return false;
  return true;
}

let answer = 0;
for (let i = a; i <= b; i++) {
  if (isOnjeonsu(i)) answer++;
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 함수를 이용한 합과 소수 판별 | O | 24.05.17 🔍
 *
 * [함수]
 */
const [a, b] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

function isPrime(n) {
  if (n === 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function isEven(n) {
  let sum = String(n)
    .split("")
    .reduce((acc, v) => acc + Number(v), 0);
  return sum % 2 === 0 ? true : false;
}

let answer = 0;
for (let i = a; i <= b; i++) {
  if (isPrime(i) && isEven(i)) answer++;
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 함수를 이용한 연속부분수열 여부 판단하기 | O | 24.05.17 🔍
 *
 * [함수]
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n1, n2] = inputs[0].split(" ").map((v) => +v);
const aSeq = inputs[1].split(" ").map((v) => +v);
const bSeq = inputs[2].split(" ").map((v) => +v);

function checkSeq(a, b) {
  let coinNum = 0; // 일치 횟수
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[0]) {
      for (let j = 0; j < b.length; j++) {
        if (a[i + j] === b[j]) coinNum += 1;
      }
      if (coinNum === b.length) return true;
      coinNum = 0;
    }
  }
  return false;
}

console.log(checkSeq(aSeq, bSeq) ? "Yes" : "No");

// ----------------------------------------------------------------------
/**
 * 🔍 2021 날짜의 유무 | O | 24.05.18 🔍
 *
 * [함수]
 */
const [M, D] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

function isMonth(m) {
  if (m > 12) return false;
  return true;
}

function isDay(m, d) {
  if (m === 2) {
    if (d >= 29) return false;
    else return true;
  } else if (m === 4 || m === 6 || m === 9 || m === 11) {
    if (d >= 31) return false;
    else return true;
  } else {
    // 1, 3, 5, 7, 8, 10, 12
    if (d >= 32) return false;
    else return true;
  }
}

console.log(isMonth(M) && isDay(M, D) ? "Yes" : "No");

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️그 계절, 그 날⭐️ | O | 24.05.18 🔍
 *
 * [함수]
 * - 윤년 판별 함수 ⭐️
 */
const [Y, M, D] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

// 존재하는 날짜인지 검사하는 함수
function isExist(y, m, d) {
  // year, month는 가능한 범위 내로 주어지므로, m에 따른 d만 검사하면 된다.
  if (m === 2) {
    if (isFourYear(y)) {
      // 윤년인 경우
      if (d >= 30) return false;
      else return true;
    } else {
      // 윤년이 아닌 경우
      if (d >= 29) return false;
      else return true;
    }
  } else if (m === 4 || m === 6 || m === 9 || m === 11) {
    if (d >= 31) return false;
    else return true;
  } else {
    // 1, 3, 5, 7, 8, 10, 12
    if (d >= 32) return false;
    else return true;
  }
}

// 윤년을 검사하는 함수
function isFourYear(n) {
  if (n % 4 !== 0 || (n % 100 === 0 && n % 400 !== 0)) {
    return false;
  }
  return true;
}

// 계절을 판단하는 함수
function checkSeason(m) {
  if (m >= 3 && m <= 5) return "Spring";
  else if (m >= 6 && m <= 8) return "Summer";
  else if (m >= 9 && m <= 11) return "Fall";
  else return "Winter";
}

if (isExist(Y, M, D)) {
  console.log(checkSeason(M));
} else {
  console.log(-1);
}
