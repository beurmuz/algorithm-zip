// ----------------------------------------------------------------------
/**
 * 🔍 주어진 수까지의 곱 | O | 24.09.08 🔍
 */
let [a, b] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let answer = 1;
for (let n = a; n <= b; n++) {
  answer *= n;
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 친근하지 않은 수 | O | 24.09.09 🔍
 */
const N = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let answer = 0;
for (let i = 1; i <= N; i++) {
  if (i % 2 === 0 || i % 3 === 0 || i % 5 === 0) continue;
  answer += 1;
}
console.log(answer);
