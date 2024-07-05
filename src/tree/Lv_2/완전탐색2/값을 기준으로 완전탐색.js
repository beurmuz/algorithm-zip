// ----------------------------------------------------------------------
/**
 * 🔍 탐색 범위가 명시된 경우의 완전 탐색| O | 24.07.05
 *
 * [완전탐색2 - 값을 기준으로 완전탐색]
 * - 탐색 범위가 직접 주어졌다면, 해당 범위 내의 숫자들을 하나씩 살펴보며 진행하는 방식의 완전탐색을 이용하면 된다.
 */
let answer = 0;
let answerArr = [];

for (let i = 100; i < 1000; i++) {
  const [d1, d2, d3] = Array.from(String(i), Number);
  if (d1 + d2 === d3 || d1 + d3 === d2 || d2 + d3 === d1) {
    answer += 1;
    answerArr.push(i);
  }
}
console.log(answer);
console.log(answerArr);

// ----------------------------------------------------------------------
/**
 * 🔍 숫자들의 합 중 최대 | O | 24.07.05
 *
 * [완전탐색2 - 값을 기준으로 완전탐색]
 */
const [x, y] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let answer = 0;
for (let i = x; i <= y; i++) {
  let nowSum = String(i)
    .split("")
    .reduce((acc, v) => acc + Number(v), 0);
  answer = Math.max(answer, nowSum);
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 탐색 범위가 불명확한 경우에 대한 완전 탐색 | O | 24.07.05
 *
 * [완전탐색2 - 값을 기준으로 완전탐색]
 */
let answer = 0;

function getScoreA(num) {
  if (num < 10) return 5;
  else if (num < 20) return 8;
  else return 10;
}

function getScoreB(num) {
  if (num < 6) return 12;
  else if (num < 15) return 10;
  else return 6;
}

for (let i = 0; i < 31; i++) {
  aScore = getScoreA(i);
  bScore = getScoreB(i);

  answer = Math.max(answer, aScore + bScore);
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️데이터 센터의 온도 조정2⭐️ | O | 24.07.05
 *
 * [완전탐색2 - 값을 기준으로 완전탐색]
 * - ✅ 탐색 범위가 불명확할땐 문제에 제시된 값의 범위를 활용하면 된다!!
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, C, G, H] = inputs[0].split(" ").map(Number);
const temperatures = inputs.slice(1).map((line) => line.split(" ").map(Number));
const MAX_VALUE = 1000;

// 특정 장비의 t온도에서의 작업량을 계산한다.
function equipment(low, high, t) {
  if (t < low) return C;
  else if (t <= high) return G;
  else return H;
}

// 온도 t에 대한 작업량을 계산한다.
function performance(t) {
  let totalEff = 0;

  // 장비별 작업량의 합을 계산한다.
  for (let i = 0; i < N; i++) {
    totalEff += equipment(temperatures[i][0], temperatures[i][1], t);
  }
  return totalEff;
}

let answer = 0;
// 각 온도에 대해 작업량을 계산하고, 그 중 최댓값을 찾아 갱신한다.
for (let t = 0; t <= MAX_VALUE; t++) {
  answer = Math.max(answer, performance(t));
}
console.log(answer);
