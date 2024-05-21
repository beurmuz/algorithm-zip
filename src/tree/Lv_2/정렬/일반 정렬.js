// ----------------------------------------------------------------------
/**
 * 🔍 오름 내림차순 정렬 | O | 24.05.21 🔍
 *
 * [정렬]
 */
let [N, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
arr = arr[0].split(" ").map((v) => +v);

console.log(...arr.sort((a, b) => a - b));
console.log(...arr.sort((a, b) => b - a));

// ----------------------------------------------------------------------
/**
 * 🔍 문자열 정렬 | O | 24.05.21 🔍
 *
 * [정렬]
 */
let str = require("fs").readFileSync("/dev/stdin").toString().trim().split("");

console.log(str.sort().join(""));

// ----------------------------------------------------------------------
/**
 * 🔍 단어 정렬 | O | 24.05.21 🔍
 *
 * [정렬]
 */
let [N, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
arr = arr.sort();

for (let v of arr) {
  console.log(v);
}

// ----------------------------------------------------------------------
/**
 * 🔍 Top K 숫자 구하기 | O | 24.05.21 🔍
 *
 * [정렬]
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let [N, k] = inputs[0].split(" ").map((v) => +v);
let arr = inputs[1]
  .split(" ")
  .map((v) => +v)
  .sort((a, b) => a - b);

console.log(arr[k - 1]);

// ----------------------------------------------------------------------
/**
 * 🔍 두 개의 동일한 수열 | O | 24.05.21 🔍
 *
 * [정렬]
 * - 처음에 A, B 각각의 배열에 trim()을 추가해주지않아 틀렸었다.
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = +inputs[0];
let A = inputs[1]
  .trim()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let B = inputs[2]
  .trim()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

function same() {
  for (let i = 0; i < N; i++) {
    if (A[i] !== B[i]) return false;
  }
  return true;
}
same() ? console.log("Yes") : console.log("No");

// ----------------------------------------------------------------------
/**
 * 🔍 2개씩 그룹 짓기 | O | 24.05.21 🔍
 *
 * [정렬]
 * - 최댓값은 항상 최솟값과 묶는 것이 최선이다.
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let N = +inputs[0];
let arr = inputs[1]
  .split(" ")
  .map((v) => +v)
  .sort((a, b) => a - b);

let answer = 0;
for (let i = 0; i < N; i++) {
  answer = Math.max(answer, arr[i] + arr[2 * N - 1 - i]);
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 순서를 바꾸었을 때 같은 단어인지 판별하기 | O | 24.05.21 🔍
 *
 * [정렬]
 */
let [a, b] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
a = a.split("").sort().join("");
b = b.split("").sort().join("");

a === b ? console.log("Yes") : console.log("No");

// ----------------------------------------------------------------------
/**
 * 🔍 k번째로 신기한 문자열 | O | 24.05.21 🔍
 *
 * [정렬]
 */
let [inputs, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let [n, k, T] = inputs.split(" ");
arr.sort();

function includeT(value) {
  for (let i = 0; i < T.length; i++) {
    if (value[i] !== T[i]) return false;
  }
  return true;
}

let includeArr = [];
for (let i = 0; i < +n; i++) {
  if (includeT(arr[i])) includeArr.push(arr[i]);
}

console.log(includeArr[Number(k) - 1]);

// ----------------------------------------------------------------------
/**
 * 🔍 중앙값 계산 2 | O | 24.05.21 🔍
 *
 * [정렬]
 * - 다시한번 풀면 좋을 것 같다!
 */
let [N, arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

N = +N;
arr = arr.split(" ").map((v) => +v);

let ableNums = [];
let answer = [];
for (let i = 0; i < N; i++) {
  ableNums.push(arr[i]);
  if (ableNums.length % 2 === 1) {
    ableNums.sort((a, b) => a - b);
    answer.push(ableNums[Math.ceil(0 + i) / 2]);
  }
}
console.log(answer.join(" "));
