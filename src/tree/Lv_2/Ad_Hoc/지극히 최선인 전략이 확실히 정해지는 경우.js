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

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️홀수 짝수의 묶음⭐️ | △ | 24.12.17
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const nums = inputs[1].split(" ").map(Number);

// 홀수 짝수 개수 세기
let odds = 0; // 홀수
let evens = 0; // 짝수
for (let num of nums) {
  if (num % 2 === 0) evens += 1;
  else odds += 1;
}

// 짝수(짝, 홀+홀), 홀수(홀), 짝수, 홀수 ..
// -> 최대한 많은 그룹을 만들기 위해서는 짝수 한개, 홀수 한개를 최대한 쓰는것이 좋다.
let count = 0;
while (true) {
  // count가 짝수일 때, 묶음은 짝수를 만들어야 하고
  // count가 홀수일 때, 묶음은 홀수를 만들어야 함
  // -> 짝수, 홀수, 짝수, 홀수 ...
  if (count % 2 === 0) {
    // 짝수 묶음 만들기
    if (evens) {
      // 짝수 1개를 사용하는 경우
      evens -= 1;
      count += 1;
    } else if (odds >= 2) {
      // 짝수가 없지만 홀수가 2개 이상이라 만들 수 있는 경우
      odds -= 2;
      count += 1;
    } else {
      // 더이상 그룹을 만들지 못하는 경우
      if (evens > 0 || odds > 0) count -= 1;
      break;
    }
  } else {
    // 홀수 묶음 만들기
    if (odds) {
      odds -= 1;
      count += 1;
    } else break; // 더이상 만들지 못하는 경우
  }
}

console.log(count);

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️수열의 순서 바꾸기⭐️ | X | 24.12.19, 20
 * - 삽입 정렬이라고 볼 수 있는 문제(?)인듯하다.
 * - 정렬되지 않은 앞부분의 원소들을 정렬된 뒷부분 사이사이에 적절히 끼워넣으면 됨
 *   -> 답은 정렬되어 있지 않은 원소의 개수가 됨
 *   => 뒤에서부터 정렬되어 있지 않은 순간을 잡아 그 앞에 있는 원소의 개수가 답
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const arr = inputs[1].split(" ").map(Number);

// ✅ 제출한 풀이법
let answer = 0;
for (let i = 0; i < N; i++) {
  let flag = false;

  for (let j = i; j < N - 1; j++) {
    if (arr[j] > arr[j + 1]) flag = true;
  }
  if (flag) answer += 1;
}
console.log(answer);

// ✅ 해설지 풀이법
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const arr = inputs[1].split(" ").map(Number);

let idx = N - 2;
while (idx >= 0 && arr[idx] < arr[idx + 1]) {
  idx -= 1;
}
console.log(idx + 1);

// ----------------------------------------------------------------------
/**
 * 🔍 2개씩 그룹 짓기2 | O | 24.12.23
 * - N만큼 떨어진 사람끼리 묶는 것이 최선의 방법이다.
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const arr = inputs[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let answer = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < N; i++) {
  answer = Math.min(answer, arr[N + i] - arr[i]);
}
console.log(answer);
