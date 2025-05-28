// ----------------------------------------------------------------------
/**
 * 🔍 미는 횟수 | O | 25.05.28
 */
let [A, B] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
A = A.split("");

let answer = -1;
for (let N = 1; N < A.length; N++) {
  A.unshift(A.pop());
  if (A.join("") === B) {
    answer = N;
    break;
  }
}

console.log(answer);
