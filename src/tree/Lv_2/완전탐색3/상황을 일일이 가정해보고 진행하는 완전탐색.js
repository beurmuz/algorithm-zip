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
 * 🔍 ⭐️3개의 선 2⭐️ | X | 24.07.14, 07.19
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
const MAX_V = 10;

let answer = 0;

// 3개의 선분을 정한다.
for (let l1 = 0; l1 <= MAX_V; l1++) {
  for (let l2 = 0; l2 <= MAX_V; l2++) {
    for (let l3 = 0; l3 <= MAX_V; l3++) {
      // 각각의 경우를 모두 탐색한다.
      /**
       * 1. l1, l2, l3 모두 x축에 평행한 선분인 경우
       * 2. l1, l2는 x축에, l3는 y축에 평행한 선분인 경우
       * 3. l1은 x축에, l2, l3는 y축에 평행한 선분인 경우
       * 4. l1, l2, l3 모두 y축에 평행한 선분인 경우
       *
       * 어차피 모든 선분이 0~10의 값을 갖는것이므로 l1~l3에 x, y가 순서없이 배정되어도 된다.
       */

      let pass = true; // 직선 3개로 모두 지나갈 수 있는 경우
      // 1. 1번의 경우
      points.forEach(([x, y]) => {
        if (x === l1 || x === l2 || x === l3) return;
        pass = false;
      });
      if (pass) answer = 1;

      // 2. 2번의 경우
      pass = true;
      points.forEach(([x, y]) => {
        if (x === l1 || x === l2 || y === l3) return;
        pass = false;
      });
      if (pass) answer = 1;

      // 3. 3번의 경우
      pass = true;
      points.forEach(([x, y]) => {
        if (x === l1 || y === l2 || y === l3) return;
        pass = false;
      });
      if (pass) answer = 1;

      // 4. 4번의 경우
      pass = true;
      points.forEach(([x, y]) => {
        if (y === l1 || y === l2 || y === l3) return;
        pass = false;
      });
      if (pass) answer = 1;
    }
  }
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 좌표평면 위의 균형 2 | O | 24.07.19
 * - x, y축을 구해서 (x, y)를 중심점으로 두고 각 사분면에 찍힌 점의 개수를 구한다.
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const points = inputs.slice(1).map((line) => line.split(" ").map(Number));
const MAX_V = 100;

// x에 1개, y에 1개 평행한 직선 긋기
let answer = Number.MAX_SAFE_INTEGER;

for (let x = 2; x <= MAX_V; x += 2) {
  for (let y = 2; y <= MAX_V; y += 2) {
    // (x, y)가 중심점이고 1: (x~, y~), 2: (0~x, y~), 3: (0~x, 0~y), 4: (x~, 0~y)
    let fourSpace = [0, 0, 0, 0];

    points.forEach(([px, py]) => {
      if (px > x && py > y) fourSpace[0] += 1;
      else if (px > 0 && px < x && py > y) fourSpace[1] += 1;
      else if (px > 0 && px < x && py > 0 && py < y) fourSpace[2] += 1;
      else if (px > x && py > 0 && py < y) fourSpace[3] += 1;
    });

    answer = Math.min(answer, Math.max(...fourSpace));
  }
}
console.log(answer);
