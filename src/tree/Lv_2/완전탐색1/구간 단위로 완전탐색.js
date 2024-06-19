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

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️아름다운 수열 2⭐️ | X | 24.06.19 🔍
 *
 * [완전탐색1 - 구간 단위로 완전탐색]
 * - 처음에는 B로 가능한 모든 조합을 구한뒤 계산하려 했었다.
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M] = inputs[0].split(" ").map((v) => +v);
const A = inputs[1].split(" ").map(Number);
const B = inputs[2]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

// B의 순서를 바꿔 나오는 수열이 A에 포함되는지 찾는다. (= 구성만 같으면 된다는 뜻)
// B의 크기(M)만큼 자른 A 수열의 일부분과 B수열의 구성이 같은지만 체크하면 된다.
let answer = 0;
for (let i = 0; i <= N - M; i++) {
  let tmp = A.slice(i, i + M).sort((a, b) => a - b);
  let isSame = true;

  for (let j = 0; j < M; j++) {
    if (tmp[j] !== B[j]) {
      isSame = false;
      break;
    }
  }
  if (isSame) answer += 1;
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 바구니 안의 사탕 2 | O | 24.06.19 🔍
 *
 * [완전탐색1 - 구간 단위로 완전탐색]
 * - arr의 범위를 2K + 1, 즉 200 * 4 + 1로 잡아주어야 한다.
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, K] = inputs[0].split(" ").map((v) => +v);

const arr = Array.from({ length: 401 }, () => 0);
for (let i = 1; i <= N; i++) {
  let [num, pos] = inputs[i].split(" ").map((v) => +v);
  arr[pos] += num;
}

let answer = 0;
// c: 중심점
for (let c = K; c < arr.length - K; c++) {
  let total = 0;
  for (let i = c - K; i <= c + K; i++) {
    total += arr[i];
  }
  answer = Math.max(answer, total);
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 G or H 2 | O | 24.06.19 🔍
 *
 * [완전탐색1 - 구간 단위로 완전탐색]
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const arr = Array.from({ length: 101 }, () => 0);

// 위치에 따라 G는 1, H는 2 저장.
for (let i = 1; i <= N; i++) {
  let [pos, alpha] = inputs[i].split(" ");
  if (alpha === "G") arr[Number(pos)] = 1;
  else if (alpha === "H") arr[Number(pos)] = 2;
}

// 최대 사진 크기 찾기 (양쪽 끝에 사람이 있어야하며, 양쪽 끝에 있는 사람 간의 거리가 사진의 크기임)
let maxSize = 0;
for (let lt = 0; lt < arr.length; lt++) {
  // lt는 왼쪽 시작점
  if (arr[lt] !== 0) {
    for (let rt = lt + 2; rt < arr.length; rt++) {
      // rt는 오른쪽 끝점
      if (arr[rt] !== 0) {
        // lt, rt 즉 양쪽 끝점에 사람이 있는 경우
        let Gcount = 0;
        let Hcount = 0;

        for (let k = lt; k <= rt; k++) {
          if (arr[k] === 1) Gcount += 1;
          else if (arr[k] === 2) Hcount += 1;
        }
        if (Gcount === Hcount || Gcount === 0 || Hcount === 0) {
          maxSize = Math.max(maxSize, rt - lt);
        }
      }
    }
  }
}
console.log(maxSize);

// ----------------------------------------------------------------------
/**
 * 🔍 밭의 높이를 고르게 하기 | O | 24.06.19 🔍
 *
 * [완전탐색1 - 구간 단위로 완전탐색]
 */
