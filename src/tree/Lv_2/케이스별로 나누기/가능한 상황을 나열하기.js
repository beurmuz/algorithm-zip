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
