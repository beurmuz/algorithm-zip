// ----------------------------------------------------------------------
/**
 * 🔍 구간 중 최대합 | O | 24.06.17 🔍
 *
 * [완전탐색1 - 구간 단위로 완전탐색]
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, K] = inputs[0].split(" ").map((v) => +v);
const arr = inputs[1].split(" ").map((v) => +v);

let answer = 0;

for (let i = 0; i <= N - K; i++) {
  let sums = 0;
  for (let j = i; j < i + K; j++) {
    sums += arr[j];
  }
  answer = Math.max(answer, sums);
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 G or H 3 |  | 24.06. 🔍
 *
 * [완전탐색1 - 구간 단위로 완전탐색]
 */
