// ----------------------------------------------------------------------
/**
 * 🔍 방향에 맞춰 이동 | △ | 24.06.01 🔍
 *
 * [시뮬레이션2 - dxdy Tech]
 * - 좌표를 90도 회전해서 2차원 배열로 생각하려면, 각 방향을 그에 맞게 90도씩 돌려주어야 한다.
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);

const pos = {
  // 북 = 동[0, 1] | 동 = 남[1, 0] | 남 = 서[0, -1] | 서 = 북[-1, 0]
  W: [-1, 0],
  S: [0, -1],
  N: [0, 1],
  E: [1, 0],
};

let x = 0;
let y = 0;
for (let i = 1; i <= N; i++) {
  let [d, c] = inputs[i].split(" ");
  c = +c;
  x = x + pos[d][0] * c;
  y = y + pos[d][1] * c;
}

console.log(x, y);

// ----------------------------------------------------------------------
/**
 * 🔍 문자에 따른 명령2 | O | 24.06.02 🔍
 *
 * [시뮬레이션2 - dxdy Tech]
 * - 좌표는 90도 회전해서 2차원 배열로 풀게끔 되어있는 듯 하다. 그래서 계속 원래 알던 값대로 동남서북 하면 안나오고, 90도 회전한 값으로 넣으면 정답처리가 된다.
 */
const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let [x, y] = [0, 0];
let dir = 3; // 시작은 북쪽
let dx = [1, 0, -1, 0]; // 동, 남, 서, 북
let dy = [0, -1, 0, 1];
// let dx = [-1, 0, 1, 0]; // 북, 동, 남, 서
// let dy = [0, 1, 0, -1];

for (let i = 0; i < input.length; i++) {
  if (input[i] === "L") {
    dir = (dir - 1 + 4) % 4;
  } else if (input[i] === "R") {
    dir = (dir + 1) % 4;
  } else {
    // 해당 방향으로 한칸 이동
    x = x + dx[dir];
    y = y + dy[dir];
  }
}
console.log(x, y);

// ----------------------------------------------------------------------
/**
 * 🔍 1이 3개이상 있는 위치 | O | 24.06.04 🔍
 *
 * [시뮬레이션2 - dxdy Tech]
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const arr = inputs.slice(1).map((line) => line.split(" ").map((v) => +v));

let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];

function inRange(x, y) {
  return x >= 0 && y >= 0 && x < N && y < N;
}

function countNum(x, y) {
  let count = 0;
  for (let k = 0; k < 4; k++) {
    let nx = x + dx[k];
    let ny = y + dy[k];

    if (inRange(nx, ny) && arr[nx][ny] === 1) count += 1;
  }
  return count > 2 ? true : false;
}

let answer = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (countNum(i, j)) answer += 1;
  }
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️작은 구슬의 이동⭐️ | O | 24.06.05 🔍
 *
 * [시뮬레이션2 - dxdy Tech]
 * - 풀긴 했지만 다시한번 풀어보면 좋을 것 같다.
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [n, t] = inputs[0].split(" ").map((v) => +v);
const [r, c, d] = inputs[1].split(" ");
const pos = {
  D: 0,
  R: 1,
  L: 2,
  U: 3,
};
const dx = [1, 0, 0, -1];
const dy = [0, 1, -1, 0];

let time = t;
let [x, y] = [+r, +c];
let now = pos[d];

while (time > 0) {
  let nx = x + dx[now];
  let ny = y + dy[now];

  if (nx < 1 || ny < 1 || nx > n || ny > n) {
    // 방향 회전이 1초를 소모하니 time을 바꿔주고 위치 이동 작업은 건너뛰어야한다.
    now = 3 - now;
    time -= 1;
    continue;
  }
  x = x + dx[now];
  y = y + dy[now];
  time -= 1;
}
console.log(x, y);

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️빙빙 돌며 숫자 사각형 채우기 (달팽이 문제)⭐️ | O | 24.06.05 🔍
 *
 * [시뮬레이션2 - dxdy Tech]
 */
const [N, M] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

const arr = Array.from({ length: N }, () => Array(M).fill(0));
// 오른쪽, 아래, 왼쪽, 위
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
let dir = 0;
let num = 1;
let [x, y] = [0, 0];
arr[x][y] = num++;

function inRange(x, y) {
  return x >= 0 && y >= 0 && x < N && y < M;
}

for (let i = 1; i < N * M; i++) {
  let nx = x + dx[dir];
  let ny = y + dy[dir];

  if (!inRange(nx, ny) || arr[nx][ny] !== 0) {
    dir = (dir + 1) % 4;
  }
  x += dx[dir];
  y += dy[dir];
  arr[x][y] = num++;
}

// 출력
for (let i = 0; i < N; i++) {
  console.log(arr[i].join(" "));
}

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️되돌아오기⭐️ | O | 24.06.05 🔍
 *
 * [시뮬레이션2 - dxdy Tech]
 * - 잘 풀었지만 한번 더 풀어보면 좋을듯 하다.
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = +inputs[0];

// 서W, 남S, 북N, 동E
const dx = [0, 1, -1, 0];
const dy = [1, 0, 0, -1];
let [x, y] = [0, 0];
let time = 0;

// function inRange(x, y) {
//     return x >= 0 && y >= 0 && x < N && y < N;
// }
let flag = false;
for (let i = 1; i <= N; i++) {
  let [d, c] = inputs[i].split(" ");
  c = +c;
  let dir = "";

  if (d === "W") dir = 0;
  else if (d === "S") dir = 1;
  else if (d === "N") dir = 2;
  else if (d === "E") dir = 3;

  for (let j = 0; j < c; j++) {
    let nx = (x += dx[dir]);
    let ny = (y += dy[dir]);
    time += 1;

    if (nx === 0 && ny === 0) {
      flag = true;
      break;
    }
  }
  if (flag) break;
}

console.log(!flag ? -1 : time);

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️되돌아오기 2⭐️ | O | 24.06.06 🔍
 *
 * [시뮬레이션2 - dxdy Tech]
 * - 계속 틀렸던 이유는 x와 y가 0이어야 할 조건에 i === 0인 조건도 추가해주었기 때문이다. i === 0 조건을 빼고, x,y검사를 뒤로 이동하니 맞았다.
 */
const orders = require("fs").readFileSync("/dev/stdin").toString().trim();

// 좌표평면이라서 동, 남, 서, 북으로 풀어야 한다.
const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];
let dir = 0;
let [x, y] = [0, 0];

let flag = 0;
for (let i = 0; i < orders.length; i++) {
  if (orders[i] === "F") {
    x = x + dx[dir];
    y = y + dy[dir];
  } else if (orders[i] === "L") {
    dir = (dir - 1 + 4) % 4;
  } else if (orders[i] === "R") {
    dir = (dir + 1 + 4) % 4;
  }

  if (x === 0 && y === 0) {
    flag = true;
    console.log(i + 1);
    break;
  }
}

if (!flag) console.log(-1);

// ----------------------------------------------------------------------
/**
 * 🔍 격자 위의 편안한 상태 | O | 24.06.07 🔍
 *
 * [시뮬레이션2 - dxdy Tech]
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M] = inputs[0].split(" ").map((v) => +v);
const arr = Array.from({ length: N }, () => Array(M).fill(0));
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

// 상하좌우 4방향을 탐색하는 함수
function findComfortable(x, y) {
  let count = 0;
  for (let k = 0; k < 4; k++) {
    let nx = x + dx[k];
    let ny = y + dy[k];

    if (nx >= 0 && ny >= 0 && nx < N && ny < M && arr[nx][ny] > 0) {
      count += 1;
    }
  }
  return count === 3 ? 1 : 0;
}

// 칸 색칠하기
for (let i = 1; i <= M; i++) {
  let [r, c] = inputs[i].split(" ").map((v) => +v - 1);
  arr[r][c] = 1;
  console.log(findComfortable(r, c));
}

// ----------------------------------------------------------------------
/**
 * 🔍 ? | O | 24.06.07 🔍
 *
 * [시뮬레이션2 - dxdy Tech]
 */

// ----------------------------------------------------------------------
/**
 * 🔍 빙빙 돌며 숫자 사각형 채우기2 | O | 24.06.07 🔍
 *
 * [시뮬레이션2 - dxdy Tech]
 */
const [N, M] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);
const arr = Array.from({ length: N }, () => Array(M).fill(0));

// 아래, 오른쪽, 위, 왼쪽
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
let dir = 0;
let [x, y] = [0, 0];
arr[x][y] = 1;

for (let i = 1; i < N * M; i++) {
  let nx = x + dx[dir];
  let ny = y + dy[dir];

  // 범위 이내가 아니거나 값이 있는 경우 방향을 바꿔주어야 한다.
  if (nx < 0 || ny < 0 || nx >= N || ny >= M || arr[nx][ny] !== 0) {
    dir = (dir + 1) % 4;
  }

  x = x + dx[dir];
  y = y + dy[dir];
  arr[x][y] = i + 1;
}

for (let i = 0; i < N; i++) {
  console.log(arr[i].join(" "));
}

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️빙빙 돌며 사각형 채우기⭐️ | △ | 24.06.08 🔍
 *
 * [시뮬레이션2 - dxdy Tech]
 * - 4번 테케에서 실패했고, 답을 보고 다시 풀었다.
 * - 다른 점이 있다면 방문 배열을 만들지 않았던 점과 charCodeAt 대신 모든 알파벳을 따로 저장해서 index값을 조정해가며 푼 점이다.
 */
const [N, M] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);
const arr = Array.from({ length: N }, () => Array(M).fill(0));
const visited = Array.from({ length: N }, () => Array(M).fill(false));

// 오른쪽, 아래, 왼쪽, 위
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
let dir = 0;
let [x, y] = [0, 0];
arr[x][y] = "A";
visited[x][y] = true;

function inRange(nx, ny) {
  return nx >= 0 && ny >= 0 && nx < N && ny < M && !visited[nx][ny];
}

for (i = 1; i < N * M; i++) {
  while (true) {
    let nx = x + dx[dir];
    let ny = y + dy[dir];

    if (inRange(nx, ny)) {
      x = nx;
      y = ny;
      visited[x][y] = true;
      arr[x][y] = String.fromCharCode((i % 26) + "A".charCodeAt(0));
      break;
    } else {
      dir = (dir + 1) % 4;
    }
  }
}

//출력
for (let i = 0; i < N; i++) {
  console.log(arr[i].join(" "));
}

// ----------------------------------------------------------------------
/**
 * 🔍 가운데에서 시작하여 빙빙 돌기 | O | 24.06.09 🔍
 *
 * [시뮬레이션2 - dxdy Tech]
 */
const N = Number(
  require("fs").readFileSync("/dev/stdin").toString().trim().split(" ")
);
const arr = Array.from({ length: N }, () => Array(N).fill(0));

// 왼쪽, 위, 오른쪽, 아래
const dx = [0, -1, 0, 1];
const dy = [-1, 0, 1, 0];
let dir = 0;
let [x, y] = [N - 1, N - 1];
arr[x][y] = N * N;

for (let i = N * N - 1; i > 0; i--) {
  let nx = x + dx[dir];
  let ny = y + dy[dir];

  if (nx >= 0 && ny >= 0 && nx < N && ny < N && arr[nx][ny] === 0) {
    x = nx;
    y = ny;
    arr[x][y] = i;
  } else {
    dir = (dir + 1) % 4;
    x = x + dx[dir];
    y = y + dy[dir];
    arr[x][y] = i;
  }
}

for (let i = 0; i < N; i++) {
  console.log(arr[i].join(" "));
}
