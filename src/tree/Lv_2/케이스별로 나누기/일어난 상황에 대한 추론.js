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
