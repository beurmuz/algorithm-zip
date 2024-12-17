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

// ----------------------------------------------------------------------
/**
 * 🔍 최소 와이파이 수 | O | 24.12.17
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M] = inputs[0].split(" ").map(Number);
const people = inputs[1].split(" ").map(Number);

let answer = 0;
let i = 0;
while (i < N) {
  if (people[i] === 1) {
    answer += 1;
    // console.log('wifi: ', i + M); // 와이파이 설치 장소
    i = i + M * 2 + 1; // 와이파이는 자기 자신을 기준으로 -M ~ +M 까지 사용 가능
  } else {
    i += 1;
  }
  if (i >= N) break;
}

console.log(answer);
