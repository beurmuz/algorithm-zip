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
