// ----------------------------------------------------------------------
/**
 * 🔍 연속되는 수 2 | △ | 24.05.29 🔍
 *
 * [시뮬레이션2 - 최장 연속 부분 수열]
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);
const N = inputs[0];
const arr = inputs.splice(1, N + 1).map((v) => +v);

let answer = 0;
count = 0;
for (let i = 0; i < N; i++) {
  if (i >= 1 && arr[i] === arr[i - 1]) count += 1;
  else count = 1;
  answer = Math.max(answer, count);
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 연속되는 수 3 | △ | 24.05.29 🔍
 *
 * [시뮬레이션2 - 최장 연속 부분 수열]
 * - arr[i]와 arr[i-1]의 곱이 -가 나오는 경우, 두 부호가 서로 다른 것임을 알 수 있다.
 */
const inputs = require("fs").readFileSync(0).toString().trim().split("\n");

const N = Number(inputs[0]);
const arr = inputs.slice(1, 1 + N).map(Number);

let answer = 0,
  count = 0;
for (let i = 0; i < N; i++) {
  if (i >= 1 && arr[i] * arr[i - 1] > 0) count += 1;
  else count = 1;
  answer = Math.max(answer, count);
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 연속되는 수 4 | O | 24.05.29 🔍
 *
 * [시뮬레이션2 - 최장 연속 부분 수열]
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const arr = inputs.splice(1, N + 1).map((v) => Number(v));

let count = 0;
let answer = 0;
for (let i = 0; i < N; i++) {
  if (i >= 1 && arr[i - 1] < arr[i]) count += 1;
  else count = 1;
  answer = Math.max(answer, count);
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 T를 초과하는 연속 부분 수열 | O | 24.05.29 🔍
 *
 * [시뮬레이션2 - 최장 연속 부분 수열]
 */
const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const [N, T] = inputs[0].trim().split(" ").map((v) => +v);
const arr = inputs[1].trim().split(" ").map((v) => +v);

let answer = 0;
let count = 0;

for(let i = 0; i < N; i++) {
    if(arr[i] > T) count += 1;
    else count = 0;
    answer = Math.max(answer, count);
}
console.log(answer);