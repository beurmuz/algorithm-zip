/**
 * 🔍 두 정수 값 교환하기 | O | 24.05.18 🔍
 *
 * [함수]
 */
let [n, m] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

function swap(a, b) {
  [a, b] = [b, a];
  return [a, b];
}

[n, m] = swap(n, m);
console.log(n, m);

// ----------------------------------------------------------------------
/**
 * 🔍 짝수만 2로 나누기 | O | 24.05.19 🔍
 *
 * [함수]
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const arr = inputs[1].split(" ").map((v) => +v);

function changeValue(arr) {
  for (let i = 0; i < N; i++) {
    if (arr[i] % 2 === 0) arr[i] = Math.floor(arr[i] / 2);
  }
}

changeValue(arr);
console.log(arr.join(" "));

// ----------------------------------------------------------------------
/**
 * 🔍 palindrome 여부 판단하기 | O | 24.05.19 🔍
 *
 * [함수]
 */
let str = require("fs").readFileSync("/dev/stdin").toString().trim();

function matchReverse(s1) {
  let reverseStr = s1.split("").reverse().join("");
  if (s1 !== reverseStr) return false;
  return true;
}

matchReverse(str) ? console.log("Yes") : console.log("No");

// ----------------------------------------------------------------------
/**
 * 🔍 두 정수에 대한 연산값 | O | 24.05.19 🔍
 *
 * [함수]
 */
let [a, b] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

function changeBigNum(n) {
  n = n + 25;
  return n;
}

function changeSmallNum(n) {
  n = n * 2;
  return n;
}

if (a > b) {
  console.log(`${changeBigNum(a)} ${changeSmallNum(b)}`);
} else {
  console.log(`${changeSmallNum(a)} ${changeBigNum(b)}`);
}

// ----------------------------------------------------------------------
/**
 * 🔍 절댓값으로 변경 | O | 24.05.19 🔍
 *
 * [함수]
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const arr = inputs[1].split(" ").map((v) => +v);

function changeOp(arr) {
  for (let i = 0; i < N; i++) {
    if (arr[i] < 0) {
      arr[i] = -arr[i];
    }
  }
}

changeOp(arr);
console.log(arr.join(" "));

// ----------------------------------------------------------------------
/**
 * 🔍 2개 이상의 알파벳 | O | 24.05.19 🔍
 *
 * [함수]
 */
let str = require("fs").readFileSync("/dev/stdin").toString().trim();

function countAlphabet(s) {
  let alphaSet = new Set();

  for (let v of s) {
    alphaSet.add(v);
  }
  return alphaSet.size;
}

countAlphabet(str) >= 2 ? console.log("Yes") : console.log("No");

// ----------------------------------------------------------------------
/**
 * 🔍 두 정수에 대한 연산값2 | O | 24.05.19 🔍
 *
 * [함수]
 */
let [a, b] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

function addFunc(n) {
  n += 10;
  return n;
}

function multiplyFunc(n) {
  n *= 2;
  return n;
}

if (a > b) {
  console.log(`${multiplyFunc(a)} ${addFunc(b)}`);
} else {
  console.log(`${addFunc(a)} ${multiplyFunc(b)}`);
}
