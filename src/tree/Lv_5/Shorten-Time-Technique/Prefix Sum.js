// ----------------------------------------------------------------------
/**
 * 🔍 정수 n개의 합2 | O | 24.09.02
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, K] = inputs[0].split(" ").map(Number);
const arr = [0].concat(inputs[1].split(" ").map(Number));
const prefixSum = Array.from({ length: N + 1 }, () => 0);

for (let i = 1; i <= N; i++) {
  prefixSum[i] = prefixSum[i - 1] + arr[i];
}

let answer = Number.MIN_SAFE_INTEGER;
for (let i = 0; i <= N - K; i++) {
  answer = Math.max(answer, prefixSum[i + K] - prefixSum[i]);
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 사각형 내 직사각형 구간 숫자의 합 빠르게 구하기 | O | 24.09.03
 *
 * 2차원 배열에서도 누적합을 이용할 수 있다.
 * : S(i, j) = S(i-1, j) + S(i, j-1) - S(i, j) + A(i, j)
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, K] = inputs[0].split(" ").map(Number);
const arr = inputs.slice(1).map((line) => line.split(" ").map(Number));
const total = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    total[i][j] =
      total[i - 1][j] +
      total[i][j - 1] -
      total[i - 1][j - 1] +
      arr[i - 1][j - 1];
  }
}

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️정수 n개의 합 3⭐️ | △ | 24.09.03
 *
 * - 특정 구간 간의 합도 누적합으로 계산할 수 있다.
 *   만약 [x1, y1] ~ [x2 (= x1 + k), y2 (= y1 + k)]인 구간의 합을 구하려면
 *   : total[x2][y2] - total[x1 - 1][y2] - total[x2][y1 - 1] + total[x1 - 1][y1 - 1]
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, K] = inputs[0].split(" ").map(Number);
const arr = inputs.slice(1).map((line) => line.split(" ").map(Number));
const total = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

// 누적합 배열 만들기
total[0][0] = 0;
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    total[i][j] =
      total[i - 1][j] +
      total[i][j - 1] -
      total[i - 1][j - 1] +
      arr[i - 1][j - 1];
  }
}

// (x1, x2) ~ (y1, y2) 직사각형 구간 내의 원소의 합을 반환하는 함수
function getSum(x1, y1, x2, y2) {
  return (
    total[x2][y2] -
    total[x1 - 1][y2] -
    total[x2][y1 - 1] +
    total[x1 - 1][y1 - 1]
  );
}

// 모든 직사각형에 대해 합을 찾아 그 중 최댓값 갱신하기
let answer = Number.MIN_SAFE_INTEGER;
for (let i = 1; i <= N - K + 1; i++) {
  for (let j = 1; j <= N - K + 1; j++) {
    answer = Math.max(answer, getSum(i, j, i + K - 1, j + K - 1));
  }
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 부분 수열의 합이 K | O | 24.09.03
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, K] = inputs[0].split(" ").map(Number);
const arr = inputs[1].split(" ").map(Number);
const total = Array.from({ length: N + 1 }, () => 0);

for (let i = 1; i <= N; i++) {
  total[i] = total[i - 1] + arr[i - 1];
}

// 구간의 합을 구하는 함수
function getSum(x1, x2) {
  return total[x2] - total[x1 - 1];
}

let answer = 0;
// 구간(part)은 1부터 n까지로 잡을 수 있으며, 1씩 구간의 크기를 키워나간다.
for (let part = 1; part <= N; part++) {
  for (let x = 1; x <= N - part + 1; x++) {
    if (getSum(x, x + part - 1) === K) {
      // console.log(`${x} ~ ${x + part - 1} 구간 합은 ${K}`);
      answer += 1;
    }
  }
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️연속한 K개의 숫자⭐️ | X | 24.09.10
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, K, B] = inputs[0].split(" ").map(Number);
const noNums = inputs.slice(1).map(Number);
const arr = Array.from({ length: N + 1 }, () => 0);

// 1. 비어있는 숫자들 자리를 1로 표시하기
noNums.forEach((v) => (arr[v] = 1));

// 2. 누적합 배열 만들기
const prefixSum = Array.from({ length: N + 1 }, () => 0);
for (let i = 1; i <= N; i++) {
  prefixSum[i] = prefixSum[i - 1] + arr[i];
}

// [start, end] 구간의 원소 합을 return하는 함수
function getSum(s, e) {
  return prefixSum[e] - prefixSum[s - 1];
}

// 3. 모든 K구간의 합을 찾아, 그 중 최솟값 갱신하기
let answer = Number.MAX_SAFE_INTEGER;
for (let i = 1; i <= N - K + 1; i++) {
  // 구간 내 모든 1을 더한 값이 1의 총 개수가 된다.
  answer = Math.min(answer, getSum(i, i + K - 1));
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️범위 내에 있는 점의 수 2⭐️ | △ | 24.09.10
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, Q] = inputs[0].trim().split(" ").map(Number);
const dots = inputs[1].trim().split(" ").map(Number);
const lines = inputs.slice(2).map((line) => line.trim().split(" ").map(Number));
const MAX_NUM = 1000000;

// 1. 점들의 위치에 1을 찍어준다.
const arr = Array.from({ length: MAX_NUM + 1 }, () => 0);
dots.forEach((dot) => (arr[dot] = 1));

// 2. 1이 찍힌 arr를 이용해 누적합(1의 총 개수)을 구한다.
const prefixSum = Array.from({ length: MAX_NUM + 1 }, () => 0);
// arr[0]이 1일수도 있으므로 prefixSum[0]을 처리해준다.
prefixSum[0] = arr[0];
for (let i = 1; i <= MAX_NUM; i++) {
  prefixSum[i] = prefixSum[i - 1] + arr[i];
}

// 구간 내 1의 개수를 return하는 함수
function getSum(s, e) {
  return prefixSum[e] - prefixSum[s] + arr[s];
}

// 3. 각 범위에 내에 속한 점들의 개수를 구한다.
lines.forEach(([s, e]) => console.log(getSum(s, e)));

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️최대 직사각형의 합⭐️ | △ | 24.09.11
 * - x의 시작행과 끝 행은 정했지만 y 범위를 처리해주지 못해 해결하지 못했다.
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const arr = inputs.slice(1).map((line) => line.split(" ").map(Number));

// 1. 누적합을 구한다.
const prefixSum = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    prefixSum[i][j] =
      arr[i - 1][j - 1] +
      prefixSum[i - 1][j] +
      prefixSum[i][j - 1] -
      prefixSum[i - 1][j - 1];
  }
}

// 구간 내 원소의 합을 반환하는 함수
function getSum(x1, y1, x2, y2) {
  return (
    prefixSum[x2][y2] -
    prefixSum[x1 - 1][y2] -
    prefixSum[x2][y1 - 1] +
    prefixSum[x1 - 1][y1 - 1]
  );
}

// 시작행이 x1, 끝 행이 x2인 직사각형 중 가능한 최대 합을 반환하는 함수
function getMaxArea(x1, x2) {
  // 시작행과 끝 행이 x1, x2로 정해지면
  // 각 열마다 x1~x2 행에 적혀있는 숫자들을 누적했을 때
  // 마치 1차원에서 최대 연속 부분 수열의 합을 구하는 문제와 같아짐 -> 'dp' 문제
  const dp = new Array(N + 1).fill(0);

  for (let y = 1; y <= N; y++) {
    // y열에 있는 숫자들의 합을 구한다.
    const sum = getSum(x1, y, x2, y);
    dp[y] = Math.max(sum, dp[y - 1] + sum);
  }

  // dp 값 중 최댓값이 원하는 값이 됨
  let maxArea = Number.MIN_SAFE_INTEGER;
  for (let y = 1; y <= N; y++) {
    maxArea = Math.max(maxArea, dp[y]);
  }
  return maxArea;
}

// 2. 직사각형의 시작 행, 끝 행을 결정한다.
//    각 쌍에 대해 가능한 직사각형 중 최대 합을 계산해 최댓값을 갱신한다.
let answer = Number.MIN_SAFE_INTEGER;
for (let x1 = 1; x1 <= N; x1++) {
  for (let x2 = x1; x2 <= N; x2++) {
    answer = Math.max(answer, getMaxArea(x1, x2));
  }
}

console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️구간에 속한 문자의 개수⭐️ | △ | 24.09.24, 09.26
 * -
 */
// ✅ 완전탐색으로 푼 풀이법 -> 단, 시간초과가 발생한다.
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M] = inputs[0].split(" ").map(Number);
const rect = inputs.slice(1, N + 1).map((line) => line.split(""));
const queries = inputs.slice(N + 1).map((line) => line.split(" ").map(Number));

queries.forEach((query) => {
  let [x1, y1, x2, y2] = query;
  x1 = x1 - 1;
  y1 = y1 - 1;
  x2 = x2 - 1;
  y2 = y2 - 1;

  let answer = [0, 0, 0];
  for (let x = x1; x <= x2; x++) {
    for (let y = y1; y <= y2; y++) {
      if (rect[x][y] === "a") answer[0]++;
      else if (rect[x][y] === "b") answer[1]++;
      else if (rect[x][y] === "c") answer[2]++;
    }
  }
  console.log(...answer);
});

// ✅ 누적합을 이용한 풀이법
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M, K] = inputs[0].split(" ").map(Number);
const rect = inputs.slice(1, N + 1).map((line) => line.split(""));
const queries = inputs.slice(N + 1).map((line) => line.split(" ").map(Number));

// 1. 누적합 배열 선언
const prefixSum = Array.from({ length: 4 }, () =>
  Array.from({ length: N + 1 }, () => Array(M + 1).fill(0))
);

// 2. 편의를 위해 입력받은 문자 a,b,c를 1,2,3으로 변환
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (rect[i][j] === "a") rect[i][j] = 1;
    else if (rect[i][j] === "b") rect[i][j] = 2;
    else rect[i][j] = 3;
  }
}

// 3. 누적합시켜 누적합 배열 만들기
//    -> prefixSum[num][i][j]: 숫자가 c인 경우에 대한 누적합을 저장한다.
//    => 즉, abc 각각의 문자에 대한 누적합을 저장하는 것
for (let num = 1; num <= 3; num++) {
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      let numPrefixSum = 0;
      // rect[i][j]에 적혀있는 숫자가 num인 경우
      if (rect[i - 1][j - 1] === num) numPrefixSum = 1;
      prefixSum[num][i][j] =
        prefixSum[num][i - 1][j] +
        prefixSum[num][i][j - 1] -
        prefixSum[num][i - 1][j - 1] +
        numPrefixSum;
    }
  }
}

// 특정 숫자(1, 2, 3 중 하나) c에 대해 (x1, y1), (x2, y2) 직사각형 구간 내의 원소의 합을 반환하는 함수
function getNumOfSum(num, x1, y1, x2, y2) {
  return (
    prefixSum[num][x2][y2] -
    prefixSum[num][x1 - 1][y2] -
    prefixSum[num][x2][y1 - 1] +
    prefixSum[num][x1 - 1][y1 - 1]
  );
}

// 4. K개의 직사각형 범위에 대해 각각의 abc 개수 출력하기
queries.forEach((query) => {
  let [x1, y1, x2, y2] = query;
  let aCount = getNumOfSum(1, x1, y1, x2, y2);
  let bCount = getNumOfSum(2, x1, y1, x2, y2);
  let cCount = getNumOfSum(3, x1, y1, x2, y2);
  console.log(aCount, bCount, cCount);
});

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️별이 있는 숫자로만의 이동⭐️ | X | 24.10.02
 */
// ✅ 1. 누적합을 이용한 방법
//      - 행 단위로 1차원 누적합 배열을 미리 만들어놓고,
//        각 칸에 대해 시작점 B를 잡아 위 아래로 K개의 행을 보며 각 행마다의 유효 구간 내 수들의 합을 구하면 됨
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, K] = inputs[0].split(" ").map(Number);
const arr = inputs.slice(1).map((line) => line.split(" ").map(Number));
const prefixSum = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

// 행 단위로 1차원 누적합 구하기
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    prefixSum[i][j] = prefixSum[i][j - 1] + arr[i - 1][j - 1];
  }
}

let answer = 0;
// 모든 중심에 대해 최댓값 구하기
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    // (i, j)가 중심일 때 숫자합 구하기
    let sumAll = 0;
    for (let r = i - K; r <= i + K; r++) {
      // r행일때 (j - c ~ j + c)열 까지의 부분합을 더하기
      const c = K - Math.abs(i - r);

      // r행이 범위 안에 있을 경우 부분합을 더하기
      if (1 <= r && r <= N) {
        sumAll +=
          prefixSum[r][Math.min(j + c, N)] -
          prefixSum[r][Math.max(j - c - 1, 0)];
      }
    }
    answer = Math.max(answer, sumAll);
  }
}
console.log(answer);
