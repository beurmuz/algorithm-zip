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

// ----------------------------------------------------------------------
/**
 * 🔍 팀으로 하는 틱택토 2 | O | 24.07.19
 * - 가로, 세로, 대각선의 모든 경우를 따져본다.
 * - 내 풀이도 복잡하지만 실제 답안은 더 복잡한 듯 하다.
 */
const results = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split("").map(Number));
const ableTeam = new Set();

// 가로 & 세로 검사
for (let i = 0; i < 3; i++) {
  // 가로줄 검사
  let rowMembers = new Set(results[i]);
  if (rowMembers.size === 2) {
    let a = results[i][0];
    let b = results[i][1] === a ? results[i][2] : results[i][1];
    ableTeam.add(`(${Math.min(a, b)}, ${Math.max(a, b)})`);
  }

  // 세로줄 검사
  let colMembers = new Set([results[0][i], results[1][i], results[2][i]]);
  if (colMembers.size === 2) {
    let a = results[0][i];
    let b = results[1][i] === a ? results[2][i] : results[1][i];
    ableTeam.add(`(${Math.min(a, b)}, ${Math.max(a, b)})`);
  }
}

// 대각선 두 방향 검사
let goToRight = new Set([results[0][0], results[1][1], results[2][2]]);
if (goToRight.size === 2) {
  let a = results[0][0];
  let b = results[1][1] === a ? results[2][2] : results[1][1];
  ableTeam.add(`(${Math.min(a, b)}, ${Math.max(a, b)})`);
}
let goToLeft = new Set([results[2][0], results[1][1], results[0][2]]);
if (goToLeft.size === 2) {
  let a = results[0][0];
  let b = results[1][1] === a ? results[2][2] : results[1][1];
  ableTeam.add(`(${Math.min(a, b)}, ${Math.max(a, b)})`);
}

console.log(ableTeam.size);

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️등장하지 않는 문자열의 길이⭐️ | X | 24.07.20
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const str = inputs[1];

let answer = 1;
for (let i = 1; i < N; i++) {
  // 모든 길이가 i인 부분 문자열에 대해 쌍을 짓고, 둘이 완전히 같은지 확인한다.

  let twice = false;
  for (let w1 = 0; w1 < N - i + 1; w1++) {
    for (let w2 = w1 + 1; w2 < N - i + 1; w2++) {
      // same: j~i길이의 부분 문자열과 k~i길이의 부분 문자열이 완전히 같으면 true
      let same = true;

      for (let k = 0; k < i; k++) {
        if (str[w1 + k] !== str[w2 + k]) {
          same = false;
          break;
        }
      }

      if (same) {
        twice = true;
        break;
      }
    }
    if (twice) break;
  }
  if (twice) answer = i + 1;
  else break;
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 원소 값들의 최대 합 | O | 24.07.22
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M] = inputs[0].split(" ").map(Number);
const arr = inputs[1].split(" ").map(Number);

let answer = 0;

// 시작위치 정하기
for (let start = 0; start < N; start++) {
  let nowTerm = 0;
  let now = start;
  for (let count = 0; count < M; count++) {
    nowTerm += arr[now];
    now = arr[now] - 1;
  }
  answer = Math.max(answer, nowTerm);
}

console.log(answer);
