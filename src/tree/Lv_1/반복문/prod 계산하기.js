// ----------------------------------------------------------------------
/**
 * 🔍 주어진 수까지의 곱 | O | 24.09.08 🔍
 */
let [a, b] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let answer = 1;
for (let n = a; n <= b; n++) {
  answer *= n;
}
console.log(answer);
