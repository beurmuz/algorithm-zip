// ----------------------------------------------------------------------
/**
 * 🔍 한 가지로 열리는 자물쇠 | O | 24.06.20
 *
 * [완전탐색1 - 자리마다 숫자를 정하는 완전탐색]
 * - O(N^3)
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const combi = inputs[1].split(" ").map((v) => +v);

// 1-N까지의 숫자를 중복해서 뽑아 총 3자리의 수 만들기
let answer = 0;
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    for (let k = 1; k <= N; k++) {
      if (
        Math.abs(combi[0] - i) <= 2 ||
        Math.abs(combi[1] - j) <= 2 ||
        Math.abs(combi[2] - k) <= 2
      )
        answer += 1;
    }
  }
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 개발자의 능력3 | O | 24.06.20
 *
 * [완전탐색1 - 자리마다 숫자를 정하는 완전탐색]
 * - O(N^3)
 */
const arr = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

let answer = Number.MAX_SAFE_INTEGER;
let total = arr.reduce((acc, v) => acc + v, 0);

function minDiffFunc(a, b, c) {
  let team1 = arr[a] + arr[b] + arr[c];
  let team2 = total - team1;

  return Math.abs(team1 - team2);
}

for (let i = 0; i < 6 - 2; i++) {
  for (let j = i + 1; j < 6 - 1; j++) {
    for (let k = j + 1; k < 6; k++) {
      answer = Math.min(answer, minDiffFunc(i, j, k));
    }
  }
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 두 가지로 열리는 자물쇠 | O | 24.06.20
 *
 * [완전탐색1 - 자리마다 숫자를 정하는 완전탐색]
 * - O(N^3)
 * - 잘 풀었지만 한번 더 풀어보면 좋을 듯 하다.
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const combi1 = inputs[1].split(" ").map((v) => +v);
const combi2 = inputs[2].split(" ").map((v) => +v);

function absDiff(n1, n2) {
  if (n1 === n2) return true;

  let maxV = Math.max(n1, n2);
  let minV = Math.min(n1, n2);
  let diff = maxV - minV;

  // 차가 0~2ㅣ 이거나, N-2값과 같거나, N-1값과 같으면 자물쇠가 열린다.
  if (diff <= 2 || diff === N - 2 || diff === N - 1) return true;
  return false;
}

// 인자로 들어온 num조합과 비교
function checkedCombi(a, b, c, num) {
  if (absDiff(a, num[0]) && absDiff(b, num[1]) && absDiff(c, num[2]))
    return true;
  return false;
}

// 3자리 수 만들기
let answer = 0;
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    for (let k = 1; k <= N; k++) {
      if (checkedCombi(i, j, k, combi1) || checkedCombi(i, j, k, combi2))
        answer += 1;
    }
  }
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️숫자 카운트⭐️ | X | 24.06.20
 *
 * [완전탐색1 - 자리마다 숫자를 정하는 완전탐색]
 * - Map과 Set을 이용해서 카운트 1에 맞는 값들은 올바르게 구해냈지만, 카운트 2에 맞는 값들은 올바르게 구해내지 못했다. 그래서 결국 해설을 보고 이해했다.
 */

const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const arr = inputs.slice(1).map((line) => line.split(" ").map((v) => +v));

let answer = 0;
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    for (let k = 1; k <= 9; k++) {
      // 서로 다른 수여야 한다.
      if (i === j || j === k || i === k) continue;

      let succeeded = true;
      for (let [a, count1, count2] of arr) {
        const x = Math.floor(a / 100);
        const y = Math.floor(a / 10) % 10;
        const z = a % 10;

        // cnt1: 1번 카운트, cnt2: 2번 카운트
        let cnt1 = 0;
        let cnt2 = 0;

        if (i === x) cnt1 += 1;
        if (j === y) cnt1 += 1;
        if (k === z) cnt1 += 1;
        if (j === x || k === x) cnt2 += 1;
        if (i === y || k === y) cnt2 += 1;
        if (i === z || j === z) cnt2 += 1;

        // 카운트 수가 다르다면 해당 숫자는 답이 될 수 없다.
        if (count1 !== cnt1 || count2 !== cnt2) {
          succeeded = false;
          break;
        }
      }
      if (succeeded) answer += 1;
    }
  }
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️개발자의 능력 2⭐️ | △ | 24.06.21
 *
 * [완전탐색1 - 자리마다 숫자를 정하는 완전탐색]
 * - 완탐이 아닌 정렬로 풀었다. 완탐으로는 첫번째 팀 & 두번째 팀에 들어갈 인원을 고르고 계산하는 방식으로 풀었는데, 오답이 나와 해설지를 참고했다.
 */
// 정렬로 푸는 방법
const arr = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v)
  .sort((a, b) => a - b);
let a = arr[0] + arr[5];
let b = arr[1] + arr[4];
let c = arr[2] + arr[3];

console.log(Math.max(a, b, c) - Math.min(a, b, c));

// 완전탐색으로 푸는 방법
const arr = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);
const N = 6;
let total = arr.reduce((acc, v) => acc + v, 0);

function diff(a1, a2, b1, b2) {
  const a = arr[a1] + arr[a2];
  const b = arr[b1] + arr[b2];
  const c = total - a - b;

  let maxDiff = Math.max(a, b, c) - Math.min(a, b, c);
  return maxDiff;
}

let answer = Number.MAX_SAFE_INTEGER;
for (let a1 = 0; a1 < N; a1++) {
  // 첫번째 팀원 구성
  for (let a2 = a1 + 1; a2 < N; a2++) {
    for (let b1 = 0; b1 < N; b1++) {
      // 두번째 팀원 구성
      for (let b2 = b1 + 1; b2 < N; b2++) {
        // 첫 번째 팀원과 두 번째 팀원이 겹치면 건너뛴다.
        if (b1 === a1 || b1 === a2 || b2 === a1 || b2 === a2) continue;
        answer = Math.min(answer, diff(a1, a2, b1, b2));
      }
    }
  }
}

console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️개발 팀의 능력⭐️ | △ | 24.06.21
 *
 * [완전탐색1 - 자리마다 숫자를 정하는 완전탐색]
 * - -1이 되는 조건을 어떻게 설정해주어야할지 몰라서 오래 걸렸다. 그치만 풀었지롱!
 */
const arr = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);
const N = arr.length;
let total = arr.reduce((acc, v) => acc + v, 0);

function diff(a1, a2, b1, b2) {
  let A = arr[a1] + arr[a2];
  let B = arr[b1] + arr[b2];
  let C = total - A - B;

  if (A !== B && A !== C && B !== C)
    return Math.max(A, B, C) - Math.min(A, B, C);
  else return -1;
}

let answer = Number.MAX_SAFE_INTEGER;
let flag = false;
for (let a1 = 0; a1 < N; a1++) {
  for (let a2 = a1 + 1; a2 < N; a2++) {
    for (let b1 = 0; b1 < N; b1++) {
      for (let b2 = b1 + 1; b2 < N; b2++) {
        if (a1 === b1 || a1 === b2 || a2 === b1 || a2 === b2) continue;
        let minDiff = diff(a1, a2, b1, b2);
        if (minDiff !== -1) {
          answer = Math.min(answer, minDiff);
          flag = true;
        }
      }
    }
  }
}

if (!flag) console.log(-1);
else console.log(answer);
