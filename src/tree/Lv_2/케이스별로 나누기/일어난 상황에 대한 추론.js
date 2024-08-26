// ----------------------------------------------------------------------
/**
 * 🔍 비둘기와 전기줄 | O | 24.08.20
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);

let answer = 0;
let birds = Array.from({ length: 11 }, () => -1);

for (let i = 1; i <= N; i++) {
  let [num, pos] = inputs[i].split(" ").map(Number);

  if (birds[num] === -1) birds[num] = pos;
  if (birds[num] !== -1 && birds[num] !== pos) {
    birds[num] = pos;
    answer += 1;
  }
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️달리자⭐️ | X | 24.08.21
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const before = inputs[1].split(" ").map(Number);
const after = inputs[2].split(" ").map(Number);

let answer = 0;

// 사람들의 이동 거리를 최소화 시키려면, 이동할 사람의 수만큼 현재 집에서 다음 집으로 이동시키며 이동한 사람의 수를 세면 된다.
for (let i = 0; i < N; i++) {
  if (before[i] > after[i]) {
    // 이동이 일어난 것
    const diff = before[i] - after[i];
    before[i] -= diff; // 차이만큼 빼준 후
    before[i + 1] += diff; // 다음 집으로 옮겨준다.
    answer += diff;
  }
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️코딩톡⭐️ | X | 24.08.26
 * - P번째 메시지를 보낸사람, 그 이후에 메시지를 보낸 사람들은 모두 p번째 메세지를 읽은 것
 * - P번째 메시지 이후에 보낸 메시지는, P번째 메세지를 읽은 사람의 수보다 많거나 같음
 *
 * 해당 메시지를 읽은 사람은 아래의 조건을 만족해야함
 * 1. p번째 메시지를 기준으로, 이후에 채팅을 친 사람은 확실하게 p번째 메시지를 읽었음
 * 2. if (p번째 메시지를 읽은 사람의 수와 == 그 이후에 나온 한 메세지를 읽은 사람의 수):
 *        p번째 메시지를 보낸 사람과 그 이후에 나온 메세지를 보낸 사람이 서로가 서로의 메세지를 읽은 것
 *    => 그 이후에 메세지를 보낸 사람이 확실하게 p번째 메시지를 읽은 것이 됨
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M, P] = inputs[0].split(" ").map(Number);
const message = inputs.slice(1).map((line) => line.split(" "));
const people = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".slice(0, N).split(""); // 참여자들

// 만약 P번째 메세지를 읽지 않은 사람이 0명이면 => 모두가 채팅을 읽은 것
if (Number(message[P - 1][1]) == 0) process.exit();

let answer = [];
people.forEach((person) => {
  // 채팅을 읽은 여부
  let read = false;

  message.forEach(([sender, notRead]) => {
    notRead = Number(notRead);

    // 아직 읽지 않은 사람 수 >= P번째 메시지를 읽지 않은 사람
    // && 메세지를 보낸 사람 === 현재 사람이면, 현재 사람은 메세지를 읽은 것이다.
    if (notRead >= Number(message[P - 1][1]) && sender === person) read = true;
  });

  if (!read) answer.push(person);
});

console.log(answer.join(" "));

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️X 달리기⭐️ | X | 24.08.26
 */
const X = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

let pos = 0;
let v = 1;
let t = 0;
let leftDist = X;

while (true) {
  leftDist -= v;
  t += 1;

  if (leftDist === 0) break;

  // 1. 속도를 더 높여도 괜찮은지 결정한다.
  //    속도를 1만큼 더 높이면 남은 거리가 (v + 1) * (v + 2) / 2보다 크거나 같아야한다.
  if (leftDist >= ((v + 1) * (v + 2)) / 2) v += 1;
  // 2. 속도를 유지해도 괜찮은지 결정한다.
  //    속도를 유지하면 남은 거리가 v * (v + 1) / 2보다 크거나 같아야한다.
  else if (leftDist >= (v * (v + 1)) / 2) {
  } // 하무것도 하지 않는다.

  // 3. 위 둘을 만족하지 못하면 반드시 속도를 줄여야 한다.
  else v -= 1;
}
console.log(t);
