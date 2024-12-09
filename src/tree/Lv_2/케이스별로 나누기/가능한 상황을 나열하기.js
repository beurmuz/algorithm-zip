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
