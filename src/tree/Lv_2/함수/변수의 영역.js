// ----------------------------------------------------------------------
/**
 * 🔍 함수를 이용한 부분 문자열의 위치 구하기 | O | 24.05.19 🔍
 *
 * [함수]
 */
let [a, b] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function matchStr() {
  for (let i = 0; i < a.length; i++) {
    let cnt = 0;
    if (a[i] === b[0]) {
      for (let j = 0; j < b.length; j++) {
        if (a[i + j] === b[j]) cnt++;
      }
      if (cnt === b.length) {
        return i;
      }
    }
  }
  return -1;
}

console.log(matchStr());

// ----------------------------------------------------------------------
/**
 * 🔍 나누고 빼면서 합하기 | O | 24.05.20 🔍
 *
 * [함수]
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [n, m] = inputs[0].split(" ").map((v) => +v);
let orders = inputs[1].split(" ").map((v) => +v);

function isOdd() {
  m = m - 1;
}

function isEven() {
  m = parseInt(m / 2);
}

let answer = 0;
while (m >= 1) {
  // A의 m번째 원소 더하기
  answer += orders[m - 1];
  if (m === 1) break;
  if (m % 2 === 0) isEven();
  else isOdd();
}

console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 특정 구간의 합 | O | 24.05.20 🔍
 *
 * [함수]
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = inputs[0].split(" ").map((v) => +v);
const arr = inputs[1].split(" ").map((v) => +v);

function sectionSum(a, b) {
  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += arr[i];
  }
  return sum;
}

for (let i = 2; i < inputs.length; i++) {
  let [a, b] = inputs[i].split(" ").map((v) => +v);
  console.log(sectionSum(a - 1, b - 1));
}
