// ----------------------------------------------------------------------
/**
 * 🔍 A, B, C 찾기 | O | 24.12.23
 * - 가장 큰 값이 A+B+C라는 점을 이용해서 풀면 된다.
 * - A, B, C를 결정짓는 방법은 오름차순 순서이다. (A <= B <= C)
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

// 가장 큰 값이 A+B+C
const totalSum = inputs.pop();

// 적절히 더해서 11이 되는 값들이 A, B, C가 된다.
let flag = true;
for (let i = 0; i < inputs.length; i++) {
  for (let j = i + 1; j < inputs.length; j++) {
    for (let k = j + 1; k < inputs.length; k++) {
      if (inputs[i] + inputs[j] + inputs[k] === totalSum) {
        console.log(inputs[i], inputs[j], inputs[k]);
        flag = false;
        break;
      }
    }
    if (!flag) break;
  }
  if (!flag) break;
}

// ----------------------------------------------------------------------
/**
 * 🔍 두 점으로 만드는 직사각형 | O | 24.12.23
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [x1, y1, x2, y2] = inputs[0].split(" ").map(Number);
const [a1, b1, a2, b2] = inputs[1].split(" ").map(Number);

const [rx1, rx2] = [Math.min(x1, x2, a1, a2), Math.max(x1, x2, a1, a2)];
const [ry1, ry2] = [Math.min(y1, y2, b1, b2), Math.max(y1, y2, b1, b2)];
console.log((rx2 - rx1) * (ry2 - ry1));

// ----------------------------------------------------------------------
/**
 * 🔍 A, B, C, D 찾기 | O | 24.12.23
 * - 가장 큰 값이 A+B+C+D라는 점을 이용해서 풀면 된다.
 * - A, B, C, D를 결정짓는 방법은 오름차순 순서이다. (A <= B <= C <= D)
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

// 가장 큰 값이 A+B+C
const totalSum = inputs.pop();

// 적절히 더해서 11이 되는 값들이 A, B, C가 된다.
let flag = true;
for (let i = 0; i < inputs.length; i++) {
  for (let j = i + 1; j < inputs.length; j++) {
    for (let k = j + 1; k < inputs.length; k++) {
      for (let l = k + 1; l < inputs.length; l++) {
        if (inputs[i] + inputs[j] + inputs[k] + inputs[l] === totalSum) {
          if (inputs[k] <= inputs[i] + inputs[j]) {
            // 새로운 조건. C <= A+B 여야 한다.
            console.log(inputs[i], inputs[j], inputs[k], inputs[l]);
            flag = false;
            break;
          }
        }
      }
    }
    if (!flag) break;
  }
  if (!flag) break;
}

// ----------------------------------------------------------------------
/**
 * 🔍 두 점으로 만드는 정사각형 | O | 24.12.23
 * - 최소 정사각형을 만드려면, 가능한 직사각형의 x, y 길이 중 더 큰 변을 이용해 만들면 된다.
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [x1, y1, x2, y2] = inputs[0].split(" ").map(Number);
const [a1, b1, a2, b2] = inputs[1].split(" ").map(Number);

const x = Math.max(x1, x2, a1, a2) - Math.min(x1, x2, a1, a2);
const y = Math.max(y1, y2, b1, b2) - Math.min(y1, y2, b1, b2);

if (x >= y) console.log(x * x);
else console.log(y * y);

// ----------------------------------------------------------------------
/**
 * 🔍 전부 포함하는 선분 | O | 24.12.24
 */
// ✅ 내 풀이 - 완전탐색을 이용한 방법
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const lines = [];
for (let i = 1; i <= N; i++) {
  lines.push(inputs[i].trim().split(" ").map(Number));
}

// 하나의 선분을 제거하고 각 선분 중 가장 최소, 최댓값을 구한다.
let answer = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < N; i++) {
  let minV = Number.MAX_SAFE_INTEGER;
  let maxV = Number.MIN_SAFE_INTEGER;

  for (let j = 0; j < N; j++) {
    if (i === j) continue;
    minV = Math.min(minV, lines[j][0]);
    maxV = Math.max(maxV, lines[j][1]);
  }

  answer = Math.min(answer, maxV - minV);
}

console.log(answer);


// ✅ 해설 - 필요한 값만 사용하는 방법