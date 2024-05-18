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
 * 🔍 제목 | O | 24.05.18 🔍
 *
 * [함수]
 */
