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
