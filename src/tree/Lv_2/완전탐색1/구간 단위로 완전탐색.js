// ----------------------------------------------------------------------
/**
 * 🔍 구간 중 최대합 | O | 24.06.15 🔍
 *
 * [완전탐색1 - 구간 단위로 완전탐색]
 */
const input = require("fs").readFileSync(0).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const arr = input[1].trim().split(" ").map(Number);

let answer = 0;
for (let i = 0; i <= n - k; i++) {
  let intervalSum = 0;
  for (let j = i; j < i + k; j++) {
    intervalSum += arr[j];
  }

  answer = Math.max(answer, intervalSum);
}

console.log(answer);
