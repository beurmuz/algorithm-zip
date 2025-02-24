// ----------------------------------------------------------------------
/**
 * 🔍 1차원 젠가 | O | 25.02.17 🔍
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
let blocks = inputs.slice(1, N + 1).map(Number);
const removeInfos = inputs
  .slice(N + 1)
  .map((line) => line.split(" ").map(Number));

let tmp;
removeInfos.forEach(([x, y]) => {
  tmp = [];
  // 1. 범위 내 숫자들을 제외하고 tmp에 push한다.
  for (let i = 0; i < blocks.length; i++) {
    if (x - 1 <= i && i <= y - 1) continue;
    tmp.push(blocks[i]);
  }
  // 2. tmp를 다시 blocks에 옮겨 저장한다.
  blocks = [];
  for (let i = 0; i < tmp.length; i++) {
    blocks.push(tmp[i]);
  }
});

if (blocks.length === 0) {
  console.log(0);
} else {
  console.log(blocks.length);
  blocks.forEach((v) => console.log(v));
}

// ----------------------------------------------------------------------
/**
 * 🔍 십자 모양 폭발 | O | 25.02.17 🔍
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
let grid = inputs
  .slice(1, N + 1)
  .map((line) => line.trim().split(" ").map(Number));
let [r, c] = inputs[inputs.length - 1].split(" ").map(Number);
let answer = Array.from({ length: N }, () => Array(N).fill(0));

let crossN = grid[r - 1][c - 1];
let dx = [0, 1, 0, -1];
let dy = [1, 0, -1, 0];

// 십자 모양 폭발 진행
for (let k = 0; k < 4; k++) {
  let x = r - 1;
  let y = c - 1;

  grid[x][y] = 0;

  // 총 crossN 크기까지 터진다.
  for (let i = 1; i < crossN; i++) {
    x += dx[k];
    y += dy[k];

    if (0 <= x && x < N && 0 <= y && y < N) grid[x][y] = 0;
  }
}

// 중력 작용
for (let col = 0; col < N; col++) {
  let tmpRowIdx = N - 1;
  for (let row = N - 1; row >= 0; row--) {
    if (grid[row][col] !== 0) {
      answer[tmpRowIdx][col] = grid[row][col];
      tmpRowIdx--;
    }
  }
}

// 출력
answer.forEach((line) => console.log(...line));

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️1차원 폭발 게임⭐️ | △ | 25.02.18 🔍
 * - [1, 1]만 남았을 때 어떻게 처리할 것인가?
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M] = inputs[0].split(" ").map(Number);
let bombs = inputs.slice(1).map(Number);

// 폭발, 재배열이 반복되는 함수
function explodeAll(bombs, M) {
  while (true) {
    let stack = []; // [숫자, 연속 개수] 형태로 저장
    let explosion = false; // 폭발 여부

    // bombs를 순회하면서 각 숫자들이 연속하는 개수를 카운트한다.
    bombs.forEach((num) => {
      if (stack.length > 0 && stack[stack.length - 1][0] === num) {
        // stack이 비어있지 않고, stack의 맨 마지막에 있는 값이 현재 num과 같다면
        stack[stack.length - 1][1] += 1; // 연속 개수 증가
      } else {
        stack.push([num, 1]); // 새 숫자 추가
      }
    });

    // stack을 순회하면서 연속된 숫자가 M개 이상이면 제거한다.
    let newBombs = [];
    for (let [num, count] of stack) {
      if (count >= M) explosion = true;
      // count 크기의 배열을 만들어 num으로 채워준 후, 이 값들을 newBombs에 push한다.
      else newBombs.push(...Array.from({ length: count }, () => num));
    }

    if (!explosion) return newBombs; // 더이상 폭발이 없으면 종료한다.
    bombs = newBombs; // 갱신 후 다시 검사한다.
  }
}

// 연쇄 폭발 실행
bombs = explodeAll(bombs, M);

// 결과 출력
console.log(bombs.length);
if (bombs.length !== 0) bombs.forEach((v) => console.log(v));

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️단 한번의 2048 시도⭐️ | O | 25.02.19 🔍
 * - 맞았지만 다시 한번 더 풀어보기!
 * - 배열을 합치고 미는 과정을 한 방향으로 고정한 뒤, 배열의 회전을 이용해 해결했다.
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let grid = inputs.slice(0, 4).map((line) => line.split(" ").map(Number));
let dir = inputs[4];

// 2개씩 겹치는 수를 합치고 왼쪽으로 미는 함수
function addTwoSameValueAndPush() {
  let newGrid = Array.from({ length: 4 }, () => Array(4).fill(0));

  for (let i = 0; i < 4; i++) {
    // 연속되는 수와 그 개수를 저장하는 값
    let stack = [];

    // 2개씩 겹치는 수를 찾는다.
    for (let j = 0; j < 4; j++) {
      if (grid[i][j] === 0) continue;
      if (stack.length > 0 && stack[stack.length - 1][0] === grid[i][j]) {
        if (stack[stack.length - 1][1] === 1) stack[stack.length - 1][1] += 1;
        else stack.push([grid[i][j], 1]);
      } else stack.push([grid[i][j], 1]);
    }

    // newGrid의 i번째 행을 갱신한다.
    let newGridCol = 0;
    stack.forEach(([num, count]) => {
      if (count === 2) newGrid[i][newGridCol] = num * 2;
      else newGrid[i][newGridCol] = num;

      newGridCol += 1;
    });
  }
  grid = newGrid;
}

// 배열을 시계 방향으로 회전하는 함수
function rotateArr() {
  let newGrid = Array.from({ length: 4 }, () => Array(4).fill(0));
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      newGrid[j][3 - i] = grid[i][j];
    }
  }
  grid = newGrid;
}

// 알파벳에 따라 달라진다.
if (dir === "L") {
  addTwoSameValueAndPush();
} else if (dir === "R") {
  rotateArr();
  rotateArr();
  addTwoSameValueAndPush();
  rotateArr();
  rotateArr();
} else if (dir === "U") {
  rotateArr();
  rotateArr();
  rotateArr();
  addTwoSameValueAndPush();
  rotateArr();
} else if (dir === "D") {
  rotateArr();
  addTwoSameValueAndPush();
  rotateArr();
  rotateArr();
  rotateArr();
}

// 출력
grid.forEach((line) => console.log(...line));

// ----------------------------------------------------------------------
/**
 * 🔍 십자 모양의 지속적 폭발 | O | 25.02.20 🔍
 * - 특정 열을 선택하면, 해당 열에 숫자가 적혀있는 위치 중 가장 맨 윗칸을 중심으로 십자 모양으로 터짐
 * - 터진 이후에는 중력에 의해 숫자들이 아래로 떨어짐.
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M] = inputs[0].split(" ").map(Number);
let grid = inputs
  .slice(1, N + 1)
  .map((line) => line.trim().split(" ").map(Number));
const bombsCol = inputs.slice(N + 1).map((v) => Number(v) - 1);

// 특정 열의 가장 맨 윗칸 (폭발이 일어나야하는 지점)을 찾는 함수
function findBombSpot(col) {
  let row = 0;

  for (let i = 0; i < N; i++) {
    if (grid[i][col] !== 0) {
      row = i;
      break;
    }
  }
  return row;
}

// 폭발 후 중력이 작용(재배열)하는 함수
function bombAndRearrange(bombColIdx) {
  let bombRowIdx = findBombSpot(bombColIdx);

  // 만약 폭발 지점이 0이면 건너뛴다.
  if (grid[bombRowIdx][bombColIdx] === 0) return;

  // 폭발 범위 -> 해당 칸에 적혀있는 숫자로 정해짐
  let bombRange = grid[bombRowIdx][bombColIdx];
  let dx = [0, 1, 0, -1];
  let dy = [1, 0, -1, 0];

  for (let k = 0; k < 4; k++) {
    let x = bombRowIdx;
    let y = bombColIdx;

    grid[x][y] = 0;

    for (let i = 1; i < bombRange; i++) {
      x += dx[k];
      y += dy[k];
      if (0 <= x && x < N && 0 <= y && y < N) grid[x][y] = 0;
    }
  }

  let newGrid = Array.from({ length: N }, () => Array(N).fill(0));
  // 중력 작용 (재배열)
  for (let j = 0; j < N; j++) {
    // 컬럼별로 중력을 적용한다. 행이 계속 바뀌는 것.
    let newGridRow = N - 1;

    for (let i = N - 1; i >= 0; i--) {
      if (grid[i][j] > 0) {
        newGrid[newGridRow][j] = grid[i][j];
        newGridRow--;
      }
    }
  }
  grid = newGrid;
}

// 폭발 및 재배열
bombsCol.forEach((col) => bombAndRearrange(col));

// 최종 출력
grid.forEach((line) => console.log(...line));

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️2차원 폭발 게임⭐️ | △ | 25.02.24 🔍
 */
