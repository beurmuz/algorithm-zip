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

// ----------------------------------------------------------------------
/**
 * 🔍 사각형 내 직사각형 구간 숫자의 합 빠르게 구하기 | O | 24.09.03
 *
 * 2차원 배열에서도 누적합을 이용할 수 있다.
 * : S(i, j) = S(i-1, j) + S(i, j-1) - S(i, j) + A(i, j)
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, K] = inputs[0].split(" ").map(Number);
const arr = inputs.slice(1).map((line) => line.split(" ").map(Number));
const total = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    total[i][j] =
      total[i - 1][j] +
      total[i][j - 1] -
      total[i - 1][j - 1] +
      arr[i - 1][j - 1];
  }
}

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️정수 n개의 합 3⭐️ | △ | 24.09.03
 *
 * - 특정 구간 간의 합도 누적합으로 계산할 수 있다.
 *   만약 [x1, y1] ~ [x2 (= x1 + k), y2 (= y1 + k)]인 구간의 합을 구하려면
 *   : total[x2][y2] - total[x1 - 1][y2] - total[x2][y1 - 1] + total[x1 - 1][y1 - 1]
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, K] = inputs[0].split(" ").map(Number);
const arr = inputs.slice(1).map((line) => line.split(" ").map(Number));
const total = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

// 누적합 배열 만들기
total[0][0] = 0;
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    total[i][j] =
      total[i - 1][j] +
      total[i][j - 1] -
      total[i - 1][j - 1] +
      arr[i - 1][j - 1];
  }
}

// (x1, x2) ~ (y1, y2) 직사각형 구간 내의 원소의 합을 반환하는 함수
function getSum(x1, y1, x2, y2) {
  return (
    total[x2][y2] -
    total[x1 - 1][y2] -
    total[x2][y1 - 1] +
    total[x1 - 1][y1 - 1]
  );
}

// 모든 직사각형에 대해 합을 찾아 그 중 최댓값 갱신하기
let answer = Number.MIN_SAFE_INTEGER;
for (let i = 1; i <= N - K + 1; i++) {
  for (let j = 1; j <= N - K + 1; j++) {
    answer = Math.max(answer, getSum(i, j, i + K - 1, j + K - 1));
  }
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 부분 수열의 합이 K | O | 24.09.03
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, K] = inputs[0].split(" ").map(Number);
const arr = inputs[1].split(" ").map(Number);
const total = Array.from({ length: N + 1 }, () => 0);

for (let i = 1; i <= N; i++) {
  total[i] = total[i - 1] + arr[i - 1];
}

// 구간의 합을 구하는 함수
function getSum(x1, x2) {
  return total[x2] - total[x1 - 1];
}

let answer = 0;
// 구간(part)은 1부터 n까지로 잡을 수 있으며, 1씩 구간의 크기를 키워나간다.
for (let part = 1; part <= N; part++) {
  for (let x = 1; x <= N - part + 1; x++) {
    if (getSum(x, x + part - 1) === K) {
      // console.log(`${x} ~ ${x + part - 1} 구간 합은 ${K}`);
      answer += 1;
    }
  }
}
console.log(answer);
