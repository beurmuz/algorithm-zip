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
 * 🔍 G or H 3 | △ | 24.06.18 🔍
 *
 * [완전탐색1 - 구간 단위로 완전탐색]
 * - R값을 N개의 줄에서 가장 큰 값을 찾아 설정하는게 아닌, 문제에서 주어진 K의 최대 크기로 설정해주면 되는 문제였다.
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, K] = inputs[0].split(" ").map((v) => +v);

let R = 10000;

// arr 생성 후 각 값 넣어주기
const arr = Array.from({ length: R + 1 }, () => 0);
for (let i = 1; i <= N; i++) {
  let [num, alpha] = inputs[i].split(" ");
  if (alpha === "G") arr[Number(num)] = 1;
  else if (alpha === "H") arr[Number(num)] = 2;
}

// 최고 점수 찾기
let answer = 0;
for (let i = 0; i <= R - K; i++) {
  let partSum = 0;
  for (let j = i; j <= i + K; j++) {
    partSum += arr[j];
  }
  answer = Math.max(answer, partSum);
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 특정 구간의 원소 평균값 | O | 24.06.18 🔍
 *
 * [완전탐색1 - 구간 단위로 완전탐색]
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const arr = inputs[1].split(" ").map((v) => +v);

let answer = 0; // 평균 값이 구간의 원소 중 하나가 되는 개수

for (let i = 0; i < N; i++) {
  // 구간 시작점
  for (let j = 0; j < N; j++) {
    // 구간 끝점
    // 1. 구간의 합 구하기
    let sums = 0;
    for (let k = i; k <= j; k++) {
      sums += arr[k];
    }

    // 2. 구간 평균 구하기
    let avg = sums / (j - i + 1);

    // 3. 구간 내에 평균과 같은 값 있는지 찾기
    for (let k = i; k <= j; k++) {
      if (arr[k] === avg) {
        answer += 1;
        break;
      }
    }
  }
}
console.log(answer);
