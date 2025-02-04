// ----------------------------------------------------------------------
/**
 * 🔍 컨베이어 벨트 | O | 25.02.04 🔍
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, T] = inputs[0].split(" ").map(Number);
const arr1 = inputs[1].trim().split(" ").map(Number);
const arr2 = inputs[2].trim().split(" ").map(Number);

for (let t = 0; t < T; t++) {
  let tmp1 = arr1[N - 1];
  let tmp2 = arr2[N - 1];

  // 1. arr1을 오른쪽으로 이동
  for (let i = N - 1; i > 0; i--) {
    arr1[i] = arr1[i - 1];
  }

  // 2. arr2를 왼쪽으로 이동
  for (let i = N - 1; i > 0; i--) {
    arr2[i] = arr2[i - 1];
  }

  arr1[0] = tmp2;
  arr2[0] = tmp1;
}

console.log(arr1.join(" "));
console.log(arr2.join(" "));
