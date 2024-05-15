/**
 * 🔍 배열의 합 | O | 24.05.09 🔍
 * 
 * [구현]
 */
const arr = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i].split(" ").reduce((acc, v) => acc + Number(v), 0));
}

// ----------------------------------------------------------------------
/**
 * 🔍 대문자로 바꾸기 | O | 24.05.09 🔍
 * 
 * [구현]
 */
let grid = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < 5; i++) {
  let line = grid[i].split(" ").map((v) => v.toUpperCase());
  console.log(line.join(" "));
}

// ----------------------------------------------------------------------
/**
 * 🔍 배열의 평균 | O | 24.05.09 🔍
 * 
 * [구현]
 */
let arr = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map((v) => +v));

const solution = (arr) => {
  let total = 0;
  // 1. 가로 평균 구하기
  let rowAvg = [];
  for (let i = 0; i < 2; i++) {
    let lineTotal = arr[i].reduce((acc, v) => acc + v, 0);
    rowAvg.push((lineTotal / 4).toFixed(1));
    total += lineTotal;
  }
  console.log(rowAvg.join(" "));

  // 2. 세로 평균 구하기
  let colAvg = [];
  for (let i = 0; i < 4; i++) {
    colAvg.push(((arr[0][i] + arr[1][i]) / 2).toFixed(1));
  }
  console.log(colAvg.join(" "));

  // 3. 전체 평균 구하기
  console.log((total / 8).toFixed(1));
};

solution(arr);

// ----------------------------------------------------------------------
/**
 * 🔍 출력결과 38 | △ | 24.05.09 🔍
 * 
 * [객관식]
 * - arr[i][j] = 1일때, i번 정점에서 j번 정점으로 갈 수 있다는 식으로 해석 가능
 */
let a = [
  [0, 0, 1],
  [1, 0, 0],
  [0, 1, 0],
];

let i,
  j,
  k,
  sum = 0;

for (k = 0; k < 3; k++) {
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      if (a[i][k] > 0 && a[k][j] > 0) {
        a[i][j] = 1;
        console.log(a);
      }
    }
  }
}
// 결국 모두 [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ]이 된다.
for (i = 0; i < 3; i++) {
  for (j = 0; j < 3; j++) {
    sum += a[i][j];
  }
}
console.log(sum);

// ----------------------------------------------------------------------
/**
 * 🔍 특정 원소들의 합 | O | 24.05.09 🔍
 * 
 * [구현]
 */
let arr = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.split(" ").map((y) => +y));

const solution = (arr) => {
  let answer = 0;

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j <= i; j++) {
      answer += arr[i][j];
    }
  }
  return answer;
};

console.log(solution(arr));
