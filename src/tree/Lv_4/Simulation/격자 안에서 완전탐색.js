// ----------------------------------------------------------------------
/**
 * 🔍 최고의 33위치 | O | 24.09.23 🔍
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const grid = inputs.slice(1).map((line) => line.split(" ").map(Number));

function getSum(cs, ce, rs, re) {
  let total = 0;
  for (let i = cs; i < ce; i++) {
    for (let j = rs; j < re; j++) {
      total += grid[i][j];
    }
  }
  return total;
}

let answer = 0;
for (let i = 0; i <= N - 3; i++) {
  for (let j = 0; j <= N - 3; j++) {
    answer = Math.max(answer, getSum(i, i + 3, j, j + 3));
  }
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 행복한 수열의 개수 | O | 24.09.23 🔍
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M] = inputs[0].split(" ").map(Number);
const grid = inputs.slice(1).map((line) => line.split(" ").map(Number));

if (N === 1) console.log(2);
else {
  let answer = 0;
  // 가로줄 검사
  for (let i = 0; i < N; i++) {
    // if(checkHappy('r', line)) answer += 1;
    let flag = false;
    let count = 1;
    for (let j = 1; j < N; j++) {
      if (grid[i][j] === grid[i][j - 1]) count += 1;
      else count = 1;

      if (count >= M) {
        flag = true;
        break;
      }
    }
    if (flag) answer += 1;
  }

  // 세로줄 검사
  for (let j = 0; j < N; j++) {
    // if(checkHappy('r', line)) answer += 1;
    let flag = false;
    let count = 1;
    for (let i = 1; i < N; i++) {
      if (grid[i][j] === grid[i - 1][j]) count += 1;
      else count = 1;

      if (count >= M) {
        flag = true;
        break;
      }
    }
    if (flag) answer += 1;
  }

  console.log(answer);
}

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️트로미노⭐️ | △ | 24.09.24 🔍
 * - 2*2 4개, 1*3, 3*1의 블록배열을 만들어서 풀려고 했는데 그냥 3*3을 이용하면 되는 문제였다.
 * - 0은 그냥 건너뛰지만 1이 격자 밖에 있는 경우에는 범위를 벗어난 것이므로, false로 처리해주어 불가능한 경우임을 명시했다.
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M] = inputs[0].split(" ").map(Number);
const grid = inputs.slice(1).map((line) => line.split(" ").map(Number));

// 총 가능한 모양은 6가지
// 3차원 배열을 이용해 푼다.
const shapes = [
  [
    [1, 0, 0],
    [1, 1, 0],
    [0, 0, 0],
  ],

  [
    [0, 1, 0],
    [1, 1, 0],
    [0, 0, 0],
  ],

  [
    [1, 1, 0],
    [0, 1, 0],
    [0, 0, 0],
  ],

  [
    [1, 1, 0],
    [1, 0, 0],
    [0, 0, 0],
  ],

  [
    [1, 1, 1],
    [0, 0, 0],
    [0, 0, 0],
  ],

  [
    [1, 0, 0],
    [1, 0, 0],
    [1, 0, 0],
  ],
];

// 주어진 위치에 대해 가능한 모든 모양을 탐색하며 최대 합을 반환하는 함수
function getMaxSum(x, y) {
  let maxSum = 0;
  for (let cnt = 0; cnt < 6; cnt++) {
    let isPossible = true;
    let nowSum = 0;

    // 격자의 크기가 3x3이므로 3씩 돌면 된다.
    for (let dx = 0; dx < 3; dx++) {
      for (let dy = 0; dy < 3; dy++) {
        if (shapes[cnt][dx][dy] === 0) continue;

        // 범위 내에 있고, 1인 경우에만 nowSum에 더해준다.
        // 격자가 범위를 벗어나면 가능하지 않은 경우이므로 false로 갱신한다.
        if (x + dx >= N || y + dy >= M) isPossible = false;
        else nowSum += grid[x + dx][y + dy];
      }
    }

    // 최대합 갱신하기
    if (isPossible) maxSum = Math.max(maxSum, nowSum);
  }
  return maxSum;
}

// 최대 합 찾기
let answer = 0;
for (let x = 0; x < N; x++) {
  for (let y = 0; y < M; y++) {
    answer = Math.max(answer, getMaxSum(x, y));
  }
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️금 채굴하기⭐️ | X | 24.09.27 🔍
 * - '마름모의 정의'를 이용해서 푸는 문제
 * - 마름모는 중심점을 기준으로 K번 이내에 인접한 곳으로 이동하는 걸 반복했을 때 갈 수 있는 영역
 *   -> 그러므로 '(중심점과 x거리의 차이) + (중심점과 y거리의 차이) <= K'여야 함
 *   -> 즉 마름모 중앙의 위치를 (a, b), 임의의 위치를 (x, y)라고 했을 때 '|x-a| + |y-b| <= K'이면 해당위치는 마름모에 포함되는 것
 *
 * - 각 위치가 마름모의 중심일 때 K를 0부터 가능한 범위까지 늘려가면서 손해를 보지않고 채굴할 수 있는지 여부를 판별하면 됨
 *   -> K의 범위는 최악의 경우를 생각해 N=2이라면 K=2까지 커지면 됨
 *   -> 만약 N=2일 때 K=2라면 grid의 모든 영역을 커버할 수 있음
 *      => ✅ 이는 격자 내에서 잡을 수 있는 가장 거리가 먼 두 점인 좌측 상단, 우측 하단을 커버하려면 K=2*(N-1)까지 커져야 한다는 말과 같음
 */
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// 변수 선언 및 입력
const [n, m] = input[0].split(" ").map(Number);
const grid = input.slice(1, n + 1).map((line) => line.split(" ").map(Number));

function getArea(k) {
  return k * k + (k + 1) * (k + 1);
}
function getNumOfGold(row, col, k) {
  let numOfGold = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (Math.abs(row - i) + Math.abs(col - j) <= k) {
        numOfGold += grid[i][j];
      }
    }
  }
  return numOfGold;
}

let maxGold = 0;

for (let row = 0; row < n; row++) {
  for (let col = 0; col < n; col++) {
    for (let k = 0; k < 2 * (n - 1) + 1; k++) {
      const numOfGold = getNumOfGold(row, col, k);

      if (numOfGold * m >= getArea(k)) {
        maxGold = Math.max(maxGold, numOfGold);
      }
    }
  }
}

console.log(maxGold);
