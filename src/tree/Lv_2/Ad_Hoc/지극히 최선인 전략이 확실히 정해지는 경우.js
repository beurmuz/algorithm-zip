// ----------------------------------------------------------------------
/**
 * 🔍 움직이는 블록 | O | 24.12.16
 * - 항상 큰 곳에서 적은 곳으로 이동하는 것이 최적임!
 * - 숫자들의 총 합과 N으로 나눈 값인 eachSum을 구한 후, 블럭이 많은 곳에서 적은 곳으로 옮겨주면 된다.
 */
const [N, ...blocks] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const eachSum = blocks.reduce((acc, v) => acc + v, 0) / N;
const answer = blocks.reduce(
  (acc, v) => (v > eachSum ? acc + (v - eachSum) : acc),
  0
);
console.log(answer);
