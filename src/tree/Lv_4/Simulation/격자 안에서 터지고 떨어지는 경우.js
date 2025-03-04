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
 * 🔍 ⭐️1차원 폭발 게임⭐️ | △ | 25.02.18, 02.26-27 🔍
 * - 나는 stack을 이용해서 푸는 것에 성공했으나, 실제 해설은 idx와 for문만을 이용해 풀었다.
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M] = inputs[0].split(" ").map(Number);
let bombs = inputs.slice(1).map(Number);

// ✅ 내가 푼 풀이
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

// ✅ 답안지 풀이 ---------------------------------------------------------
// 주어진 시작점부터 같은 수를 가진 마지막 인덱스를 찾는 함수
function getEndIdxSameNum(startIdx, num) {
  for (let endIdx = startIdx + 1; endIdx < bombs.length; endIdx++) {
    if (bombs[endIdx] !== num) return endIdx - 1;
  }
  return bombs.length - 1;
}

// 폭탄이 터지고 떨어지는 함수
function bombAndFall() {
  while (true) {
    let exploded = false;

    for (let startIdx = 0; startIdx < bombs.length; startIdx++) {
      let num = bombs[startIdx];

      // 각 위치마다 그 뒤로 폭탄이 M개 이상 있는지 확인한다.
      // 이미 터지기로 예정된 폭탄(0)은 패스한다.
      if (num === 0) continue;

      // startIdx로부터 연속하여 같은 숫자(num)을 갖는 폭탄 중 가장 마지막 위치를 찾는다.
      let endIdx = getEndIdxSameNum(startIdx, num);

      if (endIdx - startIdx + 1 >= M) {
        // 연속한 숫자의 개수가 M개 이상인 경우, 폭탄이 터졌음을 0으로 표시한다.
        for (let i = startIdx; i <= endIdx; i++) {
          bombs[i] = 0;
        }
        exploded = true;
      }
    }

    // 폭탄이 터진 이후의 결과를 계산하여 반영한다.
    bombs = bombs.filter((num) => num > 0);

    // 더이상 폭탄이 터지지 않으면 종료
    if (!exploded) break;
  }
}

// 결과 출력
bombAndFall();
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
 * 🔍 ⭐️2차원 폭발 게임⭐️ | △ | 25.02.24, 02.27-28 🔍
 * - 예제는 다 맞지만 테 14번에서 틀림
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M, K] = inputs[0].split(" ").map(Number);
let grid = inputs.slice(1).map((line) => line.trim().split(" ").map(Number));

// ✅ 처음에 직접 푼 풀이 - 예제는 다 통과했으나, 14번 테케에서 실패
// 하나의 열에서 M개 이상의 같은 숫자가 적혀있는 폭탄들을 터뜨리는 함수
function bomb() {
  let newGrid = Array.from({ length: N }, () => Array(N).fill(0));

  for (let col = 0; col < N; col++) {
    let stack = []; // [num, num의 개수]

    // 같은 수가 몇번씩 반복되는지를 stack에 기록한다.
    for (let row = 0; row < N; row++) {
      if (stack.length > 0 && stack[stack.length - 1][0] === grid[row][col]) {
        stack[stack.length - 1][1] += 1;
      } else {
        stack.push([grid[row][col], 1]);
      }
    }

    // newGrid의 col을 새로 업데이트한다. (같은 수가 M개 이상이면 그 수들은 0으로 바꿔준다.)
    let nowRow = 0;
    stack.forEach(([num, count]) => {
      for (let cnt = 0; cnt < count; cnt++) {
        if (count >= M) newGrid[nowRow][col] = 0;
        else newGrid[nowRow][col] = num;
        nowRow++;
      }
    });
  }

  // 중력 작용 후 grid에 반영
  grid = fall(newGrid);
}

// 중력을 적용하는 함수
function fall(arr) {
  let newArr = Array.from({ length: N }, () => Array(N).fill(0));

  for (let col = 0; col < N; col++) {
    let nowRow = N - 1;
    for (let row = N - 1; row >= 0; row--) {
      if (arr[row][col] > 0) {
        newArr[nowRow][col] = arr[row][col];
        nowRow--;
      }
    }
  }
  return newArr;
}

// 시계방향으로 90도 회전하는 함수
function rotate() {
  let newGrid = Array.from({ length: N }, () => Array(N).fill(0));

  for (let row = 0; row < N; row++) {
    for (let col = 0; col < N; col++) {
      newGrid[col][N - 1 - row] = grid[row][col];
    }
  }
  grid = fall(newGrid);
}

// 총 K번 돈다.
for (let k = 0; k < K; k++) {
  bomb();
  rotate();
}
bomb();

// 최종적으로 남은 폭탄의 개수를 센다.
let answer = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (grid[i][j] > 0) answer += 1;
  }
}

console.log(answer);

// ✅ 해설지 풀이
const BLANK = -1;

const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M, K] = inputs[0].split(" ").map(Number);
let grid = inputs.slice(1).map((li) => li.trim().split(" ").map(Number));
let line = Array(N).fill(0);

// startIdx부터 연속된 같은 숫자의 끝 (endIdx)를 찾는 함수
function getEndIdx(startIdx, nowNum) {
  for (let endIdx = startIdx + 1; endIdx < line.length; endIdx++) {
    if (line[endIdx] !== nowNum) return endIdx - 1;
  }
  // startIdx부터 시작한 숫자가 끝까지 유지되면 line.length-1 반환
  return line.length - 1;
}

// 1차원 배열 line에서 M개 이상 연속된 숫자를 폭발하는 함수
function explode() {
  // 더이상 폭발할 게 없을 때까지 반복한다.
  while (true) {
    let exploded = false;
    let startIdx = 0;

    while (startIdx < line.length) {
      let endIdx = getEndIdx(startIdx, line[startIdx]);

      if (endIdx - startIdx + 1 >= M) {
        // 연속된 숫자들을 splice로 삭제한다.
        line.splice(startIdx, endIdx - startIdx + 1);
        exploded = true;
      } else {
        startIdx = endIdx + 1;
      }
    }
    // 폭발하지 않았으므로 (= 더이상 폭발할 게 없음) 반복문을 종료한다.
    if (!exploded) break;
  }
}

// 특정 열을 1차원 배열로 변환(복사)하는 함수
function copyCol(col) {
  // grid의 특정 열(col)을 1차원 배열 line으로 변환한다.
  // -1을 제외하고 가져온다.
  line = grid.map((row) => row[col]).filter((v) => v !== BLANK);
}

// 폭탄이 터진 후, 중력을 적용해 격자의 해당하는 열에 복사하는 함수
function copyResult(col) {
  for (let row = N - 1; row >= 0; row--) {
    // 남아있는 숫자들을 맨 아래부터 채운다.
    // line.pop()으로 위의 숫자가 아래로 떨어지는 효과를 구현한다.
    // 다 채운 후 남으면 -1로 채운다.
    grid[row][col] = line.length ? line.pop() : BLANK;
  }
}

// 폭탄이 터지는 과정을 시뮬레이션한다.
function simulate() {
  // col별로 진행한다.
  for (let col = 0; col < N; col++) {
    copyCol(col); // 특정 열을 가져와서
    explode(); // 폭발하고
    copyResult(col); // 중력을 적용
  }
}

// 시계 방향으로 90도 회전하는 함수
function rotate() {
  let newGrid = Array.from({ length: N }, () => Array(N).fill(BLANK));

  // 빈칸(-1이 아닌 경우 아래부터 채워준다.
  for (let row = N - 1; row >= 0; row--) {
    let nowRowIdx = N - 1;
    for (let col = N - 1; col >= 0; col--) {
      if (grid[row][col] !== BLANK) {
        newGrid[nowRowIdx][N - row - 1] = grid[row][col]; // 회전 후 위치에 저장
        nowRowIdx--; // 회전 후 숫자가 떨어지도록 중력 적용
      }
    }
  }
  grid = newGrid;
}

// 총 K번 폭탄이 터진다.
simulate();
for (let k = 0; k < K; k++) {
  rotate();
  simulate();
}

// 남아있는 폭탄의 개수를 센다.
let answer = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (grid[i][j] !== BLANK) answer++;
  }
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️최적의 십자 모양 폭발⭐️ | O | 25.03.04 🔍
 * - 맞았지만 다시 한번 더 풀기!
 *
 * - 처음에 tmpGrid = grid를 해줘서 틀렸었다. (✅ 얕은 복사)
 * - tmpGrid = grid.map((row) => [...row]);로 깊은 복사를 해주어 해결!
 */
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
let grid = input
  .slice(1, n + 1)
  .map((line) => line.trim().split(" ").map(Number));

// 특정 숫자 범위만큼 십자모양으로 폭탄이 터지는 함수
function bombHori(x, y) {
  let dx = [0, 1, 0, -1];
  let dy = [1, 0, -1, 0];
  let ranges = tmpGrid[x][y];
  tmpGrid[x][y] = 0;

  for (let k = 0; k < 4; k++) {
    let nx = x;
    let ny = y;

    for (let range = 1; range < ranges; range++) {
      nx += dx[k];
      ny += dy[k];

      if (0 <= nx && nx < n && 0 <= ny && ny < n) tmpGrid[nx][ny] = 0;
    }
  }
}

// 모든 원소들을 아래로 미는 함수
function pushUnder() {
  let newGrid = Array.from({ length: n }, () => Array(n).fill(0));

  for (let col = 0; col < n; col++) {
    let nowRow = n - 1;
    for (let row = n - 1; row >= 0; row--) {
      if (tmpGrid[row][col] > 0) {
        newGrid[nowRow][col] = tmpGrid[row][col];
        nowRow--;
      }
    }
  }
  tmpGrid = newGrid;
}

// 인접한 쌍 수를 찾는 함수
function findSameNums() {
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (tmpGrid[i][j] > 0) {
        // 아래
        if (j < n - 1 && tmpGrid[i][j] === tmpGrid[i][j + 1]) count += 1;
        // 옆
        if (i < n - 1 && tmpGrid[i][j] === tmpGrid[i + 1][j]) count += 1;
      }
    }
  }
  return count;
}

function simulate(x, y) {
  bombHori(x, y);
  pushUnder();
  let nowCount = findSameNums();
  answer = Math.max(answer, nowCount);
}

let answer = 0;
let tmpGrid; // ✅ 선언만 하고
for (let x = 0; x < n; x++) {
  for (let y = 0; y < n; y++) {
    tmpGrid = grid.map((row) => [...row]); // ✅ 깊은 복사 적용
    simulate(x, y);
  }
}

console.log(answer);
