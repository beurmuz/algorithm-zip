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

// ----------------------------------------------------------------------
/**
 * 🔍 숫자들의 최대 차 | O | 24.07.24
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, K] = inputs[0].split(" ").map(Number);
const arr = inputs
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);

let answer = 0; // 뽑을 수 있는 원소의 최대 개수
for (let lt = 0; lt < N; lt++) {
  let count = 1;
  for (let rt = lt + 1; rt < N; rt++) {
    if (arr[rt] - arr[lt] <= K) count += 1;
  }
  answer = Math.max(answer, count);
}
console.log(answer);

// 해설
const MAX_NUM = 10000;
// 사용할 숫자가 존재하는 구간: [l, r]
// 사이에 들어있는 숫자 개수를 반환합니다.
function countNum(l, r) {
  let cnt = 0;
  arr.forEach((elem) => {
    if (l <= elem && elem <= r) {
      cnt += 1;
    }
  });
  return cnt;
}

let answer = 0;
// 크기가 K인 모든 구간을 잡아, 해당 구간 안에 들어오는 숫자의 개수를 세서 그 중 최댓값을 계산
for (let i = 1; i <= MAX_NUM; i++) {
  // 구간 [i, i + k] 사이에 들어있는 숫자를 세어 최댓값을 계산
  answer = Math.max(answer, countNum(i, i + K));
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️값을 일일이 가정해보는 완전탐색⭐️ | X | 24.07.24
 */
const N = 5;
const arr = [4, 3, 1, 2, 5];

function isPossible(minValue) {
  const canGoStones = [];
  arr.forEach((v, i) => {
    if (v >= minValue) canGoStones.push(i); // 최솟값, 즉 a값보다 큰 값들의 index를 canGoStones에 push한다.
  });

  const arrSize = canGoStones.length;
  for (let i = 1; i < arrSize; i++) {
    const dist = canGoStones[i] - canGoStones[i - 1]; // 위치 차이를 계산한다.
    if (dist > 2) return false; // 위치 차이가 3이상이면 false를 반환한다. (= 거리 2이내로 점프해야 하므로)
  }
  return true;
}

let answer = 0;
for (let a = 1; a <= Math.min(arr[0], arr[arr.length - 1]); a++) {
  // 1번에서 5번으로 도착해야하므로 둘중 작은 수까지만 순회한다.
  if (isPossible(a)) answer = Math.max(answer, a);
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️훌륭한 점프⭐️ | X | 24.07.24
 * - 밟으며 지나간 숫자들 중 최댓값을 가정하면, 최댓값보다 같거나 작은 숫자들이 적혀있는 돌은 항상 다 밟고 지나가는 것이 좋다.
 *   => 즉, 돌을 다 밟고 지나간다는 가정 하에 인접한 돌 사이의 거리가 전부 K 이내인지 살펴보면 가능한 값인지 알 수 있음
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, K] = inputs[0].split(" ").map(Number);
const arr = inputs[1].split(" ").map(Number);
const MAX_NUM = 100;

function isPossible(limit) {
  let lastIdx = 0;
  for (let i = 1; i < N; i++) {
    if (arr[i] <= limit) {
      if (i - lastIdx > K) return false; // 거리 차가 K보다 크면 건널 수 없게 된다.
      lastIdx = i;
    }
  }
  return true;
}

// 밟고 지나가는 숫자들 중, 최댓값이 이미 i로 정해져있다고 가정했을 때,
// 실제 거리 K 이내의 돌만 밟고 지나가는 게 가능한지 판단하면 된다.
for (let i = Math.max(arr[0], arr[N - 1]); i <= MAX_NUM; i++) {
  if (isPossible(i)) {
    console.log(i);
    break;
  }
}

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️A, B, C, D 찾기 2⭐️ | X | 24.07.25
 * - 완전탐색을 이용해 MAX_V까지 모두 순회하며 a, b, c, d를 찾는 것은 알았지만, 정렬로 비교해 정답을 찾으면 되는줄은 몰랐다.
 */
const arr = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b)
  .join(",");
const MAX_V = 40;

// 모든 a,b,c,d를 확인해서 이 합들이 arr과 같은지 여부를 확인한다.
for (let a = 1; a <= MAX_V; a++) {
  for (let b = a; b <= MAX_V; b++) {
    for (let c = b; c <= MAX_V; c++) {
      for (let d = c; d <= MAX_V; d++) {
        let arr2 = [
          a,
          b,
          c,
          d,
          a + b,
          b + c,
          c + d,
          d + a,
          a + c,
          b + d,
          a + b + c,
          a + b + d,
          a + c + d,
          b + c + d,
          a + b + c + d,
        ];

        let sortedArr2 = arr2.sort((x, y) => x - y).join(",");

        if (arr === sortedArr2) {
          console.log(a, b, c, d);
        }
      }
    }
  }
}

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️독서실의 거리두기 4⭐️ | △ | 24.07.25
 * - 거리두기 5랑 똑같이 푸는 문제이다. 단, 해당 문제는 2명을 배치한다는 점이 다르다.
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
let seats = inputs[1].split("");

function getDist() {
  let dist = N;

  // 둘다 1인 곳에 대해 모든 쌍을 조사하여, 그 중 가장 가까운 거리를 구한다.
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      if (seats[i] === "1" && seats[j] === "1") dist = Math.min(dist, j - i);
    }
  }
  return dist;
}

let answer = 0;
for (let p1 = 0; p1 < N; p1++) {
  for (let p2 = p1 + 1; p2 < N; p2++) {
    if (seats[p1] === "0" && seats[p2] === "0") {
      // 빈자리에 인원을 배치한다.
      seats[p1] = "1";
      seats[p2] = "1";

      // 가장 가까운 사람간의 거리를 구해 최댓값을 갱신한다.
      answer = Math.max(answer, getDist());
      seats[p1] = "0";
      seats[p2] = "0";
    }
  }
}
console.log(answer);
