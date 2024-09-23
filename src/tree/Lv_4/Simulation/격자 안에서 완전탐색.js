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
