// ----------------------------------------------------------------------
/**
 * 🔍 모이자 | O | 24.06.10 🔍
 *
 * [완전탐색1 - 자리 수 단위로 완전탐색]
 * - 문제를 제대로 이해하고 풀자!
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const arr = inputs[1].split(" ").map((v) => +v);

let answer = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < N; i++) {
  let distSum = 0;
  for (let j = 0; j < N; j++) {
    // 거리 차 * 명 수
    distSum += Math.abs(j - i) * arr[j];
  }
  answer = Math.min(answer, distSum);
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 괄호 쌍 만들어주기3 | O | 24.06.10 🔍
 *
 * [완전탐색1 - 자리 수 단위로 완전탐색]
 */

