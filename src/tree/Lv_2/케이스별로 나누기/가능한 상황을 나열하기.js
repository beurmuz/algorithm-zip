// ----------------------------------------------------------------------
/**
 * 🔍 순위 경쟁2 | O | 24.12.09
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const logs = [];

for (let i = 1; i <= N; i++) {
  let [c, s] = inputs[i].split(" ");
  logs.push([c, Number(s)]);
}

// 1. 각 점수, 명예의 전당, 정답 변수 생성
let aScore = 0;
let bScore = 0;
let winLog = "AB";
let answer = 0;

// 2. 변동 목록을 순회하며 변경 횟수를 계산
for (let [c, s] of logs) {
  // 1) 변동 점수를 반영한다.
  if (c === "A") aScore += s;
  else bScore += s;

  // 2) 둘중 누가 승자인지 파악한다.
  let winner = "";
  if (aScore > bScore) winner = "A";
  else if (bScore > aScore) winner = "B";
  else winner = "AB";

  // 3) 명예의 전당과 현재 winner를 비교한다.
  if (winLog !== winner) {
    winLog = winner;
    answer += 1;
  }
}

console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 두 번째로 작은 수의 위치 | O | 24.12.10
 * - 오름차순으로 정렬한 후, 가장 처음에 오는 숫자와 다른 숫자가 나타나면 그 값이 정답이 된다.
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const infos = inputs[1]
  .split(" ")
  .map((v, i) => [Number(v), i + 1])
  .sort((a, b) => a[0] - b[0]);

// -1을 출력하는 조건을 찾아보자.
let answer = -1;

// 1) infos 길이가 1이하인 경우
if (infos.length <= 1) answer = -1;
else {
  // 2) 길이에 관계없이 2번째 숫자가 없는 경우
  let count = 1;
  for (let i = 1; i < N; i++) {
    if (infos[i][0] !== infos[i - 1][0]) {
      // 이전 값과 다르면 count를 올려준다.
      count += 1;
    }

    // count가 2가 되었을 때
    if (count === 2) {
      // 3) 2번째 숫자는 나타났지만 같은 값이 여러 개 존재하는 경우
      if (i + 1 < N && infos[i][0] === infos[i + 1][0]) {
        answer = -1;
        break;
      } else answer = infos[i][1];
    }
  }
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 순위 경쟁 | O | 24.12.10
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const logs = [];
for (let i = 1; i <= N; i++) {
  let [c, s] = inputs[i].split(" ");
  logs.push([c, Number(s)]);
}

// 관련 변수 생성
let aScore = 0;
let bScore = 0;
let cScore = 0;
let winLog = "ABC"; // 동점에서 시작

let answer = 0;
for (let [c, s] of logs) {
  // c에 따라 점수 증감하기
  if (c === "A") aScore += s;
  else if (c === "B") bScore += s;
  else cScore += s;

  // 현재 스코어를 바탕으로 현재 라운드에서의 승자 구하기
  let nowWin = pickWinners(aScore, bScore, cScore);

  if (winLog !== nowWin) {
    answer += 1;
    winLog = nowWin;
  }
}

function pickWinners(a, b, c) {
  let arr = [
    [a, "A"],
    [b, "B"],
    [c, "C"],
  ];

  // 점수에 따라 정렬 후
  arr.sort((a, b) => b[0] - a[0]);

  let nowWins = arr[0][1];
  for (let i = 1; i < 3; i++) {
    // 만약 점수가 arr[0][1]의 점수와 같다면, 얘도 승자이다.
    if (arr[i][0] === arr[0][0]) nowWins += arr[i][1];
  }
  return nowWins;
}

console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️L, R 그리고 B⭐️ | △ | 24.12.12
 */
// R의 위치가 아닌 L과 B의 위치를 중심으로 생각하면 된다.
const arr = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(""));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let posL = [0, 0];
let posB = [0, 0];
let posR = [0, 0];

// 각 지점의 위치정보 찾기
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if (arr[i][j] === "L") posL = [i, j];
    else if (arr[i][j] === "B") posB = [i, j];
    else if (arr[i][j] === "R") posR = [i, j];
  }
}

// 가능한 모든 케이스 생각해보기
// 1. L과 B가 일직선상에 없는 경우
//   - 최단경로 중 R을 피해갈 수 있는 경로가 반드시 존재함
if (posL[0] !== posB[0] && posL[1] !== posB[1]) {
  console.log(Math.abs(posL[0] - posB[0]) + Math.abs(posL[1] - posB[1]) - 1);
}

// 2. L과 B가 세로 방향으로 일직선상(= col이 같은 경우)에 존재하는 경우
//   - 최단경로에 R이 있다면 2칸만 돌아가면 되고, 아닌 경우 일직선으로 가면 됨
else if (posL[1] === posB[1]) {
  if (
    posL[1] === posR[1] &&
    Math.min(posL[0], posB[0]) <= posR[0] &&
    posR[0] <= Math.max(posL[0], posB[0])
  ) {
    console.log(Math.abs(posL[0] - posB[0]) + Math.abs(posL[1] - posB[1]) + 1); // 2칸 돌아감
  } else
    console.log(Math.abs(posL[0] - posB[0]) + Math.abs(posL[1] - posB[1]) - 1); // 일직선으로 감
}

// 3. L과 B가 가로 방향으로 일직선상(= row가 같은 경우)에 존재하는 경우
//   - 최단경로에 R이 있다면 2칸만 돌아가면 되고, 아닌 경우 일직선으로 가면 됨
else if (posL[0] === posB[0]) {
  if (
    posL[0] === posR[0] &&
    Math.min(posL[1], posB[1]) <= posR[1] &&
    posR[1] <= Math.max(posL[1], posB[1])
  ) {
    console.log(Math.abs(posL[0] - posB[0]) + Math.abs(posL[1] - posB[1]) + 1);
  } else
    console.log(Math.abs(posL[0] - posB[0]) + Math.abs(posL[1] - posB[1]) - 1);
}
