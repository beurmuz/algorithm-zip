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

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️초기 수열 복원하기⭐️ | △ | 24.07.26
 * - 완전탐색에 약한듯하네
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const A = inputs[1].split(" ").map(Number);

// 수열에는 1부터 N까지 딱 한번씩만 사용되어야 함
const MAX_V = 1000;
const arr = Array(N).fill(0);

// 수열의 첫번째 수만 결정한다면, 그 뒤의 숫자들은 자동으로 값이 하나로 결정됨
for (let i = 1; i < N; i++) {
  // 수열의 첫번째 수가 i일 때
  arr[0] = i;

  for (let j = 1; j < N; j++) {
    // a[j-1]은 arr[j] + arr[j-1]로 구할 수 있다.
    // => 즉, arr[0]에서 arr[1]을, arr[1]에서 arr[2]를 유추 가능함
    arr[j] = A[j - 1] - arr[j - 1];
  }

  // arr 수열에 1부터 N까지의 값이 한 번씩 이용된는지 확인
  // able: arr 수열에 1부터 N까지의 값이 한번씩 이용될 경우 true
  // visited: 한 번 만이라도 해당 숫자가 arr 수열에서 쓰였다면 true
  let able = true;
  const visited = Array(MAX_V + 1).fill(false);
  for (let j = 0; j < N; j++) {
    if (arr[j] <= 0 || arr[j] > N) {
      able = false;
      break;
    } else {
      if (visited[arr[j]]) {
        able = false;
        break;
      }
      visited[arr[j]] = true;
    }
  }

  if (able) {
    console.log(arr.join(" "));
    process.exit();
  }
}

// ----------------------------------------------------------------------
/**
 * 🔍 이상한 폭탄3 | O | 24.07.26
 * - 완탐과 set, map으로 풀었는데 정답을 정리하는 과정이 좀 긴듯 하다.
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, K] = inputs[0].split(" ").map(Number);
const bombs = inputs.slice(1).map(Number);

let bombList = new Set();
for (let i = 0; i < N; i++) {
  let nowNum = bombs[i];
  for (let j = i + 1; j < i + 1 + K; j++) {
    if (nowNum === bombs[j]) {
      bombList.add(`${nowNum} ${i}`);
      bombList.add(`${bombs[j]} ${j}`);
    }
  }
}

// 정답 찾기
let arr = Array.from(bombList);
let rank = new Map();
for (let info of arr) {
  let [num, idx] = info.split(" ").map(Number);
  if (rank.has(num)) rank.set(num, rank.get(num) + 1);
  else rank.set(num, 1);
}

let answerArr = [];
for (let [key, value] of rank) {
  answerArr.push([key, value]);
}
answerArr.sort((a, b) => b[1] - a[1]);

if (answerArr.length === 0) console.log(0);
else console.log(answerArr[0][0]);

// 해설
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, K] = inputs[0].split(" ").map(Number);
const num = inputs.slice(1).map(Number);

const MAX_V = 1000000;
const bomb = Array(MAX_V + 1).fill(0);
const explode = Array(MAX_V).fill(false);

let maxCount = 1;
let maxIndex = 0;

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < i + 1 + K; j++) {
    // 거리가 K를 초과하는 경우 넘어간다.
    if (j - i > K) break;

    // 두 폭탄의 번호가 다를 경우 터지지 않는다.
    if (num[i] !== num[j]) continue;

    // 두 폭탄의 번호가 같으면 터진다.
    // 해당 폭탄이 이미 터졌는지 확인하고, 아직 터지지 않았다면 폭탄의 개수를 갱신한다.
    if (!explode[i]) {
      bomb[num[i]] += 1;
      explode[i] = true; // 터짐 표시
    }

    if (!explode[j]) {
      bomb[num[j]] += 1;
      explode[j] = true;
    }
  }
}

// 정답 찾기
for (let i = 0; i < MAX_V + 1; i++) {
  if (maxCount <= bomb[i]) {
    maxCount = bomb[i];
    maxIndex = i;
  }
}
console.log(maxIndex);

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️언덕 깎기⭐️ | X | 24.07.28
 * - 가장 높은 언덕과 가장 낮은 언덕의 높이 차가 17이 되어야 하므로,
 * - 크기가 17인 가능한 모든 구간에 대해 모든 언덕을 깎는 비용을 구해야 함.
 *   => 각 구간의 시작점을 찾는 완전탐색 진행하기
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const N = inputs[0];
const slope = inputs.slice(1);
const MAX_H = 100;
const diff = 17;

let answer = Number.MAX_SAFE_INTEGER;
// 크기가 K인 모든 구간을 잡아 해당 구간 안에 들어오게 언덕을 깎고, 그 비용 중 최솟값을 계산한다.
for (let h = 0; h < MAX_H; h++) {
  // 구간 [h, h + diff]에서의 언덕을 깎는 비용을 계산한다.
  // h + diff보다 높은 언덕은 높이가 h+k가 되게 깎고, 낮은 언덕은 높이가 h가 되게 쌓으면 된다.
  let cost = 0;
  for (let now = 0; now < N; now++) {
    if (slope[now] < h) cost += (slope[now] - h) * (slope[now] - h);
    else if (slope[now] > h + diff)
      cost += (slope[now] - h - diff) * (slope[now] - h - diff);
  }
  answer = Math.min(answer, cost);
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️구간 잘 나누기⭐️ | X | 24.07.29
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M] = inputs[0].split(" ").map(Number);
const arr = inputs[1].split(" ").map(Number);
const MAX_V = 10000;

// 구간합의 최댓값을 임의로 정한 뒤, 그 최댓값에 맞게 구간이 m개로 나누어지는지 판단하고,
// 나누어지는 최댓값 중 가장 작은 갑을 구하면 된다.
let answer = MAX_V;

// 주어진 숫자를 순서대로 탐색하며, 현재 숫자에 바로 전 숫자를 더했을 때 설정한 최댓값보다 크면,
// 해당 숫자로부터 시작하는 새로운 구간이 있다는 뜻
// 단, 만약 숫자 하나가 설정한 최댓값보다 크다면 구간을 나눌 수 없다.
for (let maxValue = 1; maxValue <= MAX_V; maxValue++) {
  // 구간 합의 최댓값이 maxValue일 때
  let canDivide = true; // 구간을 나눌 수 있는 여부
  let section = 1;

  let count = 0;
  for (let idx = 0; idx < N; idx++) {
    if (arr[idx] > maxValue) {
      // 숫자 하나가 maxValue보다 크면 구간을 나눌 수 없다.
      canDivide = false;
      break;
    }

    // idx번째 숫자가 들어갔을 때 maxValue보다 커지면
    // idx번째 숫자부터 다음 구간으로 만든다.
    if (count + arr[idx] > maxValue) {
      count = 0;
      section += 1;
    }

    // 이번 구간에 idx번째 숫자를 넣음
    count += arr[idx];
  }
  if (canDivide && section <= M) answer = Math.min(answer, maxValue);
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️최대 H 점수 2⭐️ | X | 24.08.07
 * - H 점수를 가정하여 해당 H점수가 성립될 수 있는지 알아보기
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, L] = inputs[0].split(" ").map(Number);
const arr = inputs[1].trim().split(" ").map(Number);

// H 이상인 숫자의 수가 H개 이상인 것을 만족하는 H중 최댓값

// H점수가 성립될 수 있는지 확인해보는 방법
// - n개의 숫자 중 H점수보다 크거나 같은 숫자의 개수를 세보면 됨
// - L개의 숫자는 1씩 더할 수 있으므로, 크기가 h - 1인 숫자를 L개까지 포함하여 세면 됨
let answer = 0;
for (let h = 1; h <= N + 1; h++) {
  // 정답이 h일 때 가능한지 판단한다.
  // h - 1인 값은 최대 L까지 h로 올릴 수 있음
  // cnt: h이상인 숫자의 개수 (h - 1인 숫자는 L개까지 카운트)
  // cntL: 지금까지 1 증가시킨 숫자의 개수
  let cnt = 0;
  let cntL = 0;

  for (let i = 0; i < N; i++) {
    if (arr[i] >= h) cnt += 1;
    else if (arr[i] === h - 1) {
      if (cntL < L) {
        cntL += 1;
        cnt += 1;
      }
    }
  }

  if (cnt >= h) answer = h;
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️최대 최소간의 차⭐️ | X | 24.08.07
 */
const inputs = require("fs").readFileSync(0).toString().trim().split("\n");

const INT_MAX = Number.MAX_SAFE_INTEGER;
const MAX_K = 10000;

// 변수 선언 및 입력
const [N, K] = inputs[0].split(" ").map(Number);
const arr = inputs[1].trim().split(" ").map(Number);

function getCost(low, high) {
  let cost = 0;
  // 각 수에 대해 low ~ high 사이로 바꾸는데 드는 cost를 계산해 줍니다.
  arr.forEach((elem) => {
    // low보다 작은 경우 low로 만들어 주는 게 최소 cost입니다.
    if (elem < low) {
      cost += low - elem;
    }
    // high보다 큰 경우 high로 만들어 주는게 최소 cost입니다.
    if (elem > high) {
      cost += elem - high;
    }
    // 그 외의 경우 이미 구간 안에 있기 때문에 cost가 필요하지 않습니다.
  });

  return cost;
}

let ans = INT_MAX;
// 모든 구간 쌍 (num, num + k)를 잡아보며
// 그 구간으로 만들기 위한 비용을 계산하여
// 그 중 최솟값을 계산합니다.
for (let num = 1; num <= MAX_K; num++) {
  ans = Math.min(ans, getCost(num, num + K));
}

console.log(ans);
