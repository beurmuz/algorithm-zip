// ----------------------------------------------------------------------
/**
 * 🔍 정수 n개의 합2 | O | 24.09.02
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, K] = inputs[0].split(" ").map(Number);
const arr = [0].concat(inputs[1].split(" ").map(Number));
const prefixSum = Array.from({ length: N + 1 }, () => 0);

for (let i = 1; i <= N; i++) {
  prefixSum[i] = prefixSum[i - 1] + arr[i];
}

let answer = Number.MIN_SAFE_INTEGER;
for (let i = 0; i <= N - K; i++) {
  answer = Math.max(answer, prefixSum[i + K] - prefixSum[i]);
}
console.log(answer);
