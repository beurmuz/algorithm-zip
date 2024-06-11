// ----------------------------------------------------------------------
/**
 * 🔍 모이자 | O | 24.06.10 🔍
 *
 * [완전탐색1 - 자리 수 단위로 완전탐색]
 * - 문제를 제대로 이해하고 풀자!
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const arr = inputs[1].split(" ").map((v) => +v);

let answer = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < N; i++) {
  let distSum = 0;
  for (let j = 0; j < N; j++) {
    // 거리 차 * 명 수
    distSum += Math.abs(j - i) * arr[j];
  }
  answer = Math.min(answer, distSum);
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 괄호 쌍 만들어주기3 | O | 24.06.11 🔍
 *
 * [완전탐색1 - 자리 수 단위로 완전탐색]
 * - O(n^2)의 시간복잡도를 갖는다.
 */
const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let answer = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i] === ")") continue;
  else {
    for (let j = i + 1; j < input.length; j++) {
      if (input[j] === ")") {
        answer += 1;
        // console.log(i, j)
      }
    }
  }
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 일렬로 서있는 소2 | O | 24.06.11 🔍
 *
 * [완전탐색1 - 자리 수 단위로 완전탐색]
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const cowHeights = inputs[1].split(" ").map((v) => +v);

let answer = 0;
for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      // index는 어차피 i < j < k이므로, 각각의 인덱스에 해당하는 값들만 비교해주어도 정답을 구할 수 있다.
      if (cowHeights[i] <= cowHeights[j] && cowHeights[j] <= cowHeights[k])
        answer += 1;
    }
  }
}
console.log(answer);
