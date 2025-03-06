// ----------------------------------------------------------------------
/**
 * 🔍 K개 중에 1개를 N번 뽑기 | O | 25.03.05 🔍
 */
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [k, n] = input[0].split(" ").map(Number);

let answer = [];
function recursive(i) {
  // 종료 조건
  if (i === n) {
    console.log(answer.join(" "));
    return;
  }

  // 재귀 호출 부분
  for (let num = 1; num <= k; num++) {
    answer.push(num);
    recursive(i + 1);
    answer.pop();
  }
  return;
}

recursive(0); // 0번째 자리부터 시작!

// ----------------------------------------------------------------------
/**
 * 🔍 아름다운 수 | O | 25.03.06 🔍
 */
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);

// 아름다운 수인지 검사하는 함수
function checkBeautiful() {
  let stack = [];
  combi.forEach((number) => {
    if (stack.length > 0 && stack[stack.length - 1][0] === number) {
      stack[stack.length - 1][1] += 1;
    } else stack.push([number, 1]);
  });

  let isBeautiful = true;
  stack.forEach(([number, count]) => {
    // 아름다운 수의 조건: number와 count가 같거나 반복횟수가 number로 나누어 떨어짐
    // 아름다운 수가 아닐 조건: count % number !== 0
    if (count % number !== 0) {
      isBeautiful = false;
      return isBeautiful;
    }
  });
  // if(isBeautiful) console.log(combi.join("")); // 디버깅용
  return isBeautiful;
}

// 1~4 사이의 정수로만 이루어진 N자리의 가능한 모든 조합을 구하는 함수
let answer = 0;
let combi = [];
function combination(i) {
  // 종료 조건
  if (i === n) {
    if (checkBeautiful()) answer += 1;
    return;
  }

  // 재귀 호출
  for (let num = 1; num <= 4; num++) {
    combi.push(num);
    combination(i + 1);
    combi.pop();
  }
  return;
}

combination(0); // 0번째 자리에 올 숫자부터 정한다.
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️강력한 폭발⭐️ | O | 25.03.07 🔍
 * - 조금 오래 걸리긴 했지만 정답! (오래 걸렸으니 한번 더 풀어보기)
 */
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const grid = input.slice(1, 1 + n).map((line) => line.split(" ").map(Number));
const putGrid = Array.from({ length: n }, () => Array(n).fill(0));

// 격자 정보: 1, 2, 3
const d1 = [
  [-1, 0],
  [-2, 0],
  [1, 0],
  [2, 0],
];
const d2 = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
const d3 = [
  [-1, 1],
  [1, 1],
  [1, -1],
  [-1, -1],
];

// 폭탄을 놓아야 할 위치들을 찾아 bombsPoses에 저장한다. (초기 1번만 진행)
let bombsPoses = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (grid[i][j] === 1) bombsPoses.push([i, j]);
  }
}

// 격자 번호에 맞게 특정 격자의 결과를 putGrid에 반영하는 함수
function drawBomb(dIdx, posIdx) {
  // dIdx: 격자의 번호, posIdx: 해당 격자의 번호를 놓아야 할 bombsPoses의 idx
  let nowX = bombsPoses[posIdx][0];
  let nowY = bombsPoses[posIdx][1];
  putGrid[nowX][nowY] += 1;

  let dNum;
  if (dIdx === 1) dNum = d1;
  else if (dIdx === 2) dNum = d2;
  else if (dIdx === 3) dNum = d3;

  for (let k = 0; k < 4; k++) {
    let nx = nowX + dNum[k][0];
    let ny = nowY + dNum[k][1];

    if (0 <= nx && nx < n && 0 <= ny && ny < n) putGrid[nx][ny] += 1;
  }
}

// 격자 번호에 맞게 특정 격자의 결과를 다시 제거하는 함수
function eraseBomb(dIdx, posIdx) {
  // dIdx: 격자의 번호, posIdx: 해당 격자의 번호를 놓아야 할 bombsPoses의 idx
  let nowX = bombsPoses[posIdx][0];
  let nowY = bombsPoses[posIdx][1];
  putGrid[nowX][nowY] -= 1;

  let dNum;
  if (dIdx === 1) dNum = d1;
  else if (dIdx === 2) dNum = d2;
  else if (dIdx === 3) dNum = d3;

  for (let k = 0; k < 4; k++) {
    let nx = nowX + dNum[k][0];
    let ny = nowY + dNum[k][1];

    if (0 <= nx && nx < n && 0 <= ny && ny < n) putGrid[nx][ny] -= 1;
  }
}

// 총 놓여진 폭탄의 개수를 세는 함수
function countBomb() {
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (putGrid[i][j] > 0) count += 1;
    }
  }
  return count;
}

// 격자 조합을 저장하는 변수
let combi = [];

// 총 개수 (정답)
let answer = 0;

// 폭탄을 놓을 자리를 선택하는 재귀 함수
function recursive(idx) {
  // 종료 조건
  if (idx === bombsPoses.length) {
    answer = Math.max(answer, countBomb());
    return;
  }

  // 재귀 호출
  for (let p = 1; p <= 3; p++) {
    combi.push(p);
    drawBomb(p, idx);
    recursive(idx + 1);
    eraseBomb(p, idx);
    combi.pop();
  }
  return;
}

recursive(0);
console.log(answer);
