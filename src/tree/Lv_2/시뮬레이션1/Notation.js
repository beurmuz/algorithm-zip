// ----------------------------------------------------------------------
/**
 * 🔍 2진수로 변환하기 | O | 24.05.24 🔍
 *
 * [시뮬레이션 - Notation]
 */
let n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

let digits = [];
while (true) {
  if (n < 2) {
    digits.push(n); // 몫
    break;
  }
  digits.push(n % 2); // 나머지
  n = Math.floor(n / 2);
}
console.log(digits.reverse().join(""));

// ----------------------------------------------------------------------
/**
 * 🔍 10진수로 변환하기 | O | 24.05.24 🔍
 *
 * [시뮬레이션 - Notation]
 */
const binary = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("")
  .map((v) => +v);

// 십진수로 변환하여 출력하기
let num = 0;

for (let i = 0; i < binary.length; i++) {
  num = num * 2 + binary[i];
}
console.log(num);

// ----------------------------------------------------------------------
/**
 * 🔍 여러가지 진수 변환 | O | 24.05.24 🔍
 *
 * [시뮬레이션 - Notation]
 */
let [N, changeN] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

// 변환
function tenToChangeN(n, cn) {
  let newNum = [];
  while (true) {
    if (n < cn) {
      newNum.push(n);
      break;
    }
    newNum.push(n % cn);
    n = Math.floor(n / cn);
  }
  return newNum.reverse().join("");
}

console.log(tenToChangeN(N, changeN));

// ----------------------------------------------------------------------
/**
 * 🔍 10진수와 2진수2 | O | 24.05.24 🔍
 *
 * [시뮬레이션 - Notation]
 */
let digits = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("")
  .map((v) => +v);

// 2진수 => 10진수
function twoToTen(two) {
  let num = 0;
  for (let i = 0; i < two.length; i++) {
    num = num * 2 + two[i];
  }
  return num;
}

// 10진수 *17
function tenOperators(num) {
  return num * 17;
}

// 10진수 * 17을 다시 2진수로
function tenToTwo(n) {
  let digits = [];

  while (true) {
    if (n < 2) {
      digits.push(n);
      break;
    }
    digits.push(n % 2);
    n = Math.floor(n / 2);
  }
  return digits.reverse().join("");
}

let tenNums = twoToTen(digits);
let transferNums = tenOperators(tenNums);
console.log(tenToTwo(transferNums));

// ----------------------------------------------------------------------
/**
 * 🔍 진수 to 진수 | O | 24.05.24 🔍
 *
 * [시뮬레이션 - Notation]
 */
let inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let [a, b] = inputs[0].split(" ").map((v) => +v);
let n = inputs[1].split("").map((v) => +v);

// a진수 => 10진수로 변환
function aToTen(a, n) {
  let num = 0;
  for (let i = 0; i < n.length; i++) {
    num = num * a + n[i];
  }
  return num;
}

// 10진수 => b진수로 변환
function tenToB(n, b) {
  let newNums = [];

  while (true) {
    if (n < b) {
      newNums.push(n);
      break;
    }
    newNums.push(n % b);
    n = Math.floor(n / b);
  }
  return newNums.reverse().join("");
}

let tenNum = aToTen(a, n);
let answer = tenToB(tenNum, b);
console.log(answer);
