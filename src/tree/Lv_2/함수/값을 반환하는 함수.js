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
