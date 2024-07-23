// ----------------------------------------------------------------------
/**
 * 🔍 머리 아픈 문제를 풀어내는 가장 좋은 방법 | O | 24.07.23
 */
const pairSums = [9, 5, 10];

function isEqual(arr1, arr2) {
  arr1.sort();
  arr2.sort();

  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

for (let a = 1; a < 11; a++) {
  for (let b = a; b < 11; b++) {
    for (let c = b; c < 11; c++) {
      if (isEqual([a + b, b + c, c + a], pairSums)) console.log(a, b, c);
    }
  }
}

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️독서실의 거리두기 5⭐️ | △ | 24.07.23
 * - 새롭게 추가한 사람을 중심으로 가장 가까운 사람을 구하는게 아니라, 한명을 추가한 후마다 전체를 탐색해야 함
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
let seats = inputs[1].split("");

function minDist() {
  let dist = N;

  // 둘다 1인 곳에 대해 모든 쌍을 조사하여, 그 중 가장 가까운 거리를 구한다.
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      if (seats[i] === "1" && seats[j] === "1") dist = Math.min(dist, j - i);
    }
  }
  return dist;
}

// 배치할 좌표 찾기
let answer = 0;
for (let idx = 0; idx < N; idx++) {
  if (seats[idx] === "0") {
    seats[idx] = "1"; // 비어있는 곳에 인원 배치
    answer = Math.max(answer, minDist());
    seats[idx] = "0"; // 다시 비우기
  }
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 결정하기 애매한 숫자가 있는 경우 | O | 24.07.23
 */
for (let a = 1; a < 10; a++) {
  for (let b = 1; b < 10; b++) {
    for (let c = 1; c < 10; c++) {
      if (
        Math.abs(a - 5) !== 4 ||
        Math.abs(b - 2) !== 4 ||
        Math.abs(c - 3) !== 2
      )
        continue;
      if (
        Math.abs(a - 2) !== 1 ||
        Math.abs(b - 7) !== 1 ||
        Math.abs(c - 6) !== 1
      )
        continue;
      console.log(a, b, c);
    }
  }
}

// ----------------------------------------------------------------------
/**
 * 🔍 가장 작은 x 찾기 | O | 24.07.23
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const infos = inputs.slice(1).map((line) => line.split(" ").map(Number));

let answer = Number.MAX_SAFE_INTEGER;

for (let x = 1; x <= 10000; x++) {
  // x는 시작점
  let now = x;
  let flag = true;
  for (let n = 0; n < N; n++) {
    if (now * 2 >= infos[n][0] && now * 2 <= infos[n][1]) now *= 2;
    else {
      flag = false;
      break;
    }
  }
  if (flag) answer = Math.min(answer, x);
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 관심을 둘 대상에 대한 선택 | O | 24.07.23
 */
const N = 5;
const segments = [
  [1, 3],
  [2, 4],
  [5, 8],
  [6, 9],
  [7, 10],
];

let answer = 0;
for (let x = 1; x < 11; x++) {
  let overlapCount = 0;
  for (let n = 0; n < N; n++) {
    if (segments[n][0] <= x && x <= segments[n][1]) overlapCount += 1;
  }
  answer = Math.max(answer, overlapCount);
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 가장 많이 나온 쌍 | O | 24.07.23
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M] = inputs[0].split(" ").map(Number);
const pairOfNums = inputs.slice(1).map((line) =>
  line
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b)
);

const numsMap = new Map();
for (let i = 0; i < M; i++) {
  let [a, b] = pairOfNums[i];
  if (numsMap.has(`${a}, ${b}`))
    numsMap.set(`${a}, ${b}`, numsMap.get(`${a}, ${b}`) + 1);
  else numsMap.set(`${a}, ${b}`, 1);
}

const counts = Array.from(numsMap.values()); // key를 제외한 value값들을 Array로 바꿔준다.
console.log(Math.max(...counts));

// ----------------------------------------------------------------------
/**
 * 🔍 최대와 최소간의 차이가 정해져 있는 경우 | O | 24.07.23
 */
const N = 5;
const arr = [6, 3, 7, 3, 5];

let answer = 1000;
for (let a = 1; a < 10; a++) {
  let cost = 0;
  arr.forEach((v) => {
    if (a <= v && v <= a + 2) return;
    else if (v < a) cost += a - v; // v가 a보다 작은 경우
    else cost += v - (a + 2); // v가 a + 2보다 큰 경우
  });
  answer = Math.min(answer, cost);
}
console.log(answer);
