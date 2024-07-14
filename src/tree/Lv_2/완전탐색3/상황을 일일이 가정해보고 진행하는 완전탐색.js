// ----------------------------------------------------------------------
/**
 * 🔍 잘 모르는 상황에서의 완전탐색 | O | 24.07.10
 *
 * [완전탐색3 - 상황을 일일이 가정해보고 진행하는 완전탐색]
 */
let answer = 0;

for (let n = 1; n < 10; n++) {
  let num = n;
  let count = 0;

  while (num !== 1) {
    if (num % 2 === 0) num = num / 2;
    else num = num * 3 + 1;

    count += 1;
  }
  answer = Math.max(answer, count);
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 야바위 | O | 24.07.10
 *
 * [완전탐색3 - 상황을 일일이 가정해보고 진행하는 완전탐색]
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const changes = inputs
  .slice(1)
  .map((line) => line.split(" ").map((v) => Number(v) - 1));

let answer = 0;
for (startSpot = 0; startSpot < 3; startSpot++) {
  // startSpot은 가장 처음에 조약돌을 놓는 위치
  let arr = Array(3).fill(0);
  arr[startSpot] = 1; // 조약돌이 있는 곳은 1로 해준다.
  let count = 0;

  for (let n = 0; n < N; n++) {
    // 총 N번 뒤집는다.
    [arr[changes[n][0]], arr[changes[n][1]]] = [
      arr[changes[n][1]],
      arr[changes[n][0]],
    ];
    if (arr[changes[n][2]] === 1) count += 1;
  }
  answer = Math.max(answer, count);
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 중첩 완전탐색 | O | 24.07.10
 *
 * [완전탐색3 - 상황을 일일이 가정해보고 진행하는 완전탐색]
 */
const N = 5;

let arr = [1, 5, 2, 6, 8];
let answer = 0;

// square: 2배 할 숫자
for (let square = 0; square < N; square++) {
  arr[square] *= 2;

  // excep: 제외할 숫자
  for (let excep = 0; excep < N; excep++) {
    let tmp = [];
    for (let i = 0; i < N; i++) {
      if (i === excep) continue;
      tmp.push(arr[i]);
    }

    let sumDiff = 0;
    for (let i = 0; i < N - 2; i++) {
      sumDiff += Math.abs(tmp[i] - tmp[i + 1]);
    }
    answer = Math.max(answer, sumDiff);
  }
  arr[square] /= 2;
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 숫자 2배 후 하나 제거하기 | O | 24.07.10
 *
 * [완전탐색3 - 상황을 일일이 가정해보고 진행하는 완전탐색]
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
let arr = inputs[1].split(" ").map(Number);

let answer = Number.MAX_SAFE_INTEGER;

// square: 2배 할 숫자
for (let square = 0; square < N; square++) {
  arr[square] *= 2;

  // excep: 제외할 숫자
  for (let excep = 0; excep < N; excep++) {
    let tmp = [];
    for (let i = 0; i < N; i++) {
      if (i === excep) continue;
      tmp.push(arr[i]);
    }

    let sumDiff = 0;
    for (let i = 0; i < N - 2; i++) {
      sumDiff += Math.abs(tmp[i] - tmp[i + 1]);
    }
    answer = Math.min(answer, sumDiff);
  }
  arr[square] /= 2;
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 수를 여러번 사용하여 특정 수 만들기 | O | 24.07.11
 *
 * [완전탐색3 - 상황을 일일이 가정해보고 진행하는 완전탐색]
 */
const [A, B, C] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let answer = 0;
for (let a = 0; a < 1000; a++) {
  let maxValue = 0;
  for (let b = 0; b < 1000; b++) {
    let nowTerm = A * a + B * b;
    if (nowTerm > C) break;
    if (nowTerm <= C && answer < nowTerm) answer = nowTerm;
  }
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️3개의 선 2⭐️ | X | 24.07.14
 *
 * [완전탐색3 - 상황을 일일이 가정해보고 진행하는 완전탐색]
 * - N개의 점을 지나는 x축 or y축에 평행한 3개의 직선의 경우의 수는 매우 많다.
 * - 그러므로 3개의 직선의 상황을 가능한 케이스별로 분류하여 각 케이스별로 조건을 만족하는지 판단하는 완전탐색을 진행해야 한다.
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const points = inputs.slice(1).map((line) => line.split(" ").map(Number));
const max_V = 10;

let answer = 0;

// 모든 직선에 대해 전부 시도해본다.
for (let l1 = 0; l1 <= max_V; l1++) {
  for (let l2 = 0; l2 <= max_V; l2++) {
    for (let l3 = 0; l3 <= max_V; l3++) {
      // flag: 직선 3개로 모든 점을 지나게 할 수 있으면 true
      let flag = true;

      // case1) x축에 평행한 직선 3개로 모든 점을 지나게 할 수 있는 경우
      points.forEach(([x, y]) => {
        // 해당 점이 직선에 닿으면 넘어간다.
        if (x === l1 || x === l2 || x === l3) return;

        flag = false;
      });
      if (flag) answer = 1;

      // case2) x축에 평행한 직선 2개와 y축에 평행한 직선 1개로 모든 점을 지나게 할 수 있는 경우
      flag = true;
      points.forEach(([x, y]) => {
        if (x === l1 || x === l2 || y === l3) return;

        flag = false;
      });
      if (flag) answer = 1;

      // case3) x축에 평행한 직선 1개와 y축에 평행한 직선 2개로 모든 점을 지나게 할 수 있는 경우
      flag = true;
      points.forEach(([x, y]) => {
        if (x === l1 || y === l2 || y === l3) return;

        flag = false;
      });
      if (flag) answer = 1;

      // case4) y축에 평행한 직선 3개로 모든 점을 지나게 할 수 있는 경우
      flag = true;
      points.forEach(([x, y]) => {
        if (y === l1 || y === l2 || y === l3) return;

        flag = false;
      });
      if (flag) answer = 1;
    }
  }
}

console.log(answer);
