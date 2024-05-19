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
