// ----------------------------------------------------------------------
/**
 * 🔍 십의 자리 숫자 | O | 25.05.28
 */
let inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
inputs.pop();

let answer = Array.from({ length: 10 }, () => 0);

for (let i = 0; i < 99; i++) {
  if (inputs[i] === 0) break;
  if (inputs[i] < 10) continue;
  answer[Math.floor(inputs[i] / 10)] += 1;
}

for (let i = 1; i < 10; i++) {
  console.log(`${i} - ${answer[i]}`);
}

// ----------------------------------------------------------------------
/**
 * 🔍 점수대 파악하기 | O | 25.05.28
 */
let inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let nums = Array.from({ length: 11 }, () => 0);
for (let i = 0; i < 100; i++) {
  if (inputs[i] === 0) break;
  if (inputs[i] < 10) continue;
  nums[parseInt(inputs[i] / 10)] += 1;
}

for (let i = 10; i >= 1; i--) {
  console.log(`${i}0 - ${nums[i]}`);
}

// ----------------------------------------------------------------------
/**
 * 🔍 나눗셈의 나머지 | O | 25.05.28
 */
let [A, B] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// 나머지를 저장
let counts = Array.from({ length: 10 }, () => 0);
while (A > 1) {
  counts[A % B] += 1;
  // console.log(A%B, parseInt(A/B));
  A = parseInt(A / B);
}

let answer = counts.reduce((acc, v) => acc + v * v, 0);
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 배열 놀이 | O | 25.05.28
 */
let inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let [N, Q] = inputs[0].split(" ").map(Number);
let arr = inputs[1].split(" ").map(Number);

for (let i = 2; i < inputs.length; i++) {
  let q = inputs[i].split(" ").map(Number);

  if (q[0] === 1) {
    let a = q[1];
    console.log(arr[a - 1]);
  } else if (q[0] === 2) {
    let a = q[1];
    let idx = -1;

    for (let j = 0; j < N; j++) {
      if (arr[j] === a) {
        idx = j;
        break;
      }
    }
    console.log(idx + 1);
  } else if (q[0] === 3) {
    let a = q[1];
    let b = q[2];

    let str = "";
    for (let j = a - 1; j < b; j++) {
      str += arr[j] + " ";
    }
    console.log(str);
  }
}

// ----------------------------------------------------------------------
/**
 * 🔍 가장 왼쪽에 있는 최댓값 | △ | 25.05.28
 */
let inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let N = Number(inputs[0]);
let arr = inputs[1].split(" ").map(Number);

let [maxV, maxI] = [0, N];
let locationAnswer = [];
let prevMaxI = N;

while (true) {
  maxV = 0;
  for (let i = 0; i < prevMaxI; i++) {
    if (arr[i] > maxV) {
      maxV = arr[i];
      maxI = i;
    }
  }
  locationAnswer.push(maxI + 1);
  if (maxI === 0) break;
  prevMaxI = maxI;
}

console.log(locationAnswer.join(" "));

// ----------------------------------------------------------------------
/**
 * 🔍 자동차 단일 거래 이익 최대화하기 | △ | 25.05.28
 */
let input = require("fs").readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let price = input[1].split(" ").map(Number);

let maxProfit = 0;
for (let i = 0; i < n; i++) {
  // 사는 시점의 다음 해부터 순회하며 파는 시점의 후보를 선택
  for (let j = i + 1; j < n; j++) {
    let profit = price[j] - price[i];

    if (profit > maxProfit) maxProfit = profit;
  }
}

console.log(maxProfit);
