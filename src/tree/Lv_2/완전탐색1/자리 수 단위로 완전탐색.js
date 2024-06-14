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

// ----------------------------------------------------------------------
/**
 * 🔍 최고의 13 위치 | O | 24.06.12 🔍
 *
 * [완전탐색1 - 자리 수 단위로 완전탐색]
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const arr = inputs.slice(1).map((line) => line.split(" ").map((v) => +v));

let answer = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N - 2; j++) {
    answer = Math.max(answer, arr[i][j] + arr[i][j + 1] + arr[i][j + 2]);
  }
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️체크판 위에서2⭐️ | O | 24.06.12 🔍
 *
 * [완전탐색1 - 자리 수 단위로 완전탐색]
 * - 시작점과 종료지점이 정해져있음을 알지못해 더 오래걸렸다.
 * - 일부러 각 칸의 색이 다른 경우에만 for문을 돌게끔 했는데, 그냥 모두 돌고 if문으로 찾는거랑 실행시간이 같아서 살짝..
 * - 어쨌든 다시 한번 풀어보면 좋을 듯하다.
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [R, C] = inputs[0].split(" ").map((v) => +v);
const arr = inputs.slice(1).map((line) => line.split(" "));

// 1. 이동은 점프로만 가능 (단, 현재 위치에 적힌 색 !== 점프한 이후의 칸 색)
// 2. 점프 시 현재 위치에서 오른쪽, 아래쪽에 있는 위치로만 점프 가능
// 3. 정확히 시작, 도착 지점을 제외하고 점프.
//    도달한 위치가 정확히 2곳 뿐이어야 함
let answer = 0;

// ✏️ 내가 푼 풀이
// 시작점은 항상 (0,0)
// 마지막점은 항상 (R-1, C-1)
for (let x1 = 1; x1 < R; x1++) {
  for (let y1 = 1; y1 < C; y1++) {
    // x1, y1은 다음 위치
    if (arr[0][0] !== arr[x1][y1]) {
      for (let x2 = x1 + 1; x2 < R; x2++) {
        for (let y2 = y1 + 1; y2 < C; y2++) {
          if (arr[x1][y1] !== arr[x2][y2]) {
            if (x2 < R - 1 && y2 < C - 1 && arr[x2][y2] !== arr[R - 1][C - 1]) {
              answer += 1;
              // console.log(`(${arr[0][0]}) (${arr[x1][y1]}) (${arr[x2][y2]}) (${arr[R-1][C-1]})`)
            }
          }
        }
      }
    }
  }
}

// ✏️ 해설
// for (let x1 = 1; x1 < R; x1++) {
//   for (let y1 = 1; y1 < C; y1++) {
//     for (let x2 = x1 + 1; x2 < R - 1; x2++) {
//       for (let y2 = y1 + 1; y2 < C - 1; y2++) {
//         if (
//           arr[0][0] !== arr[x1][y1] &&
//           arr[x1][y1] !== arr[x2][y2] &&
//           arr[x2][y2] !== arr[R - 1][C - 1]
//         )
//           answer += 1;
//       }
//     }
//   }
// }

console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 이상한 진수 | O | 24.06.13 🔍
 *
 * [완전탐색1 - 자리 수 단위로 완전탐색]
 * - 다시 한번 풀어보면 좋을듯 하다.
 */
const binary = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("")
  .map((v) => +v);

// 2진수를 10진수로 변환
function twoToTen(two) {
  let ten = 0;
  for (let i = 0; i < two.length; i++) {
    ten = ten * 2 + two[i];
  }
  return ten;
}

let answer = Number.MIN_SAFE_INTEGER;
for (let i = 0; i < binary.length; i++) {
  binary[i] = !binary[i]; // NOT연산자를 이용해 0 -> 1, 1 -> 0으로 변환한다.
  answer = Math.max(answer, twoToTen(binary));
  binary[i] = !binary[i]; // 다시 원래대로 되돌려준다.
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 마라톤 중간에 택시타기 2 | O | 24.06.13 🔍
 *
 * [완전탐색1 - 자리 수 단위로 완전탐색]
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
let poses = inputs.slice(1).map((line) => line.split(" ").map((v) => +v));

// 두 점 사이의 거리를 계산하는 함수
function calculateDistance(x1, y1, x2, y2) {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

let answer = Number.MAX_SAFE_INTEGER;
let checked = Array.from({ length: N }, () => true);

// 시작, 끝점은 고정이다.
for (let i = 0; i < N; i++) {
  if (i === 0 || i === N - 1) continue;

  // checked[i]가 true인 값만 arr에 push한다.
  let arr = [];
  checked[i] = false;
  for (let j = 0; j < N; j++) {
    if (checked[j]) arr.push(poses[j]);
  }

  // arr를 순회하면서 총 거리합을 구한다.
  let total = 0;
  for (let j = 0; j < arr.length - 1; j++) {
    total += calculateDistance(...arr[j], ...arr[j + 1]);
  }

  answer = Math.min(answer, total);
  checked[i] = true;
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 마라톤 중간에 택시타기 2 | O | 24.06.13 🔍
 *
 * [완전탐색1 - 자리 수 단위로 완전탐색]
 * - 나는 shift()와 push()로 시작점을 옮겨가면서 풀었지만, 해설은 index를 이용해 풀었다.
 * - 예시를 보니 시계방향으로 풀어도 무방했다.
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);
const N = inputs[0];
let peoples = inputs.slice(1);
let answer = Number.MAX_SAFE_INTEGER;

// ✏️ 내가 푼 풀이
// shift와 push를 이용해 시작점을 계속 바꿔준다.
for (let i = 0; i < N; i++) {
  let sumDistance = 0;

  for (let j = 0; j < N; j++) {
    sumDistance += j * peoples[j];
  }
  answer = Math.min(answer, sumDistance);

  let frontValue = peoples.shift();
  peoples.push(frontValue);
}

// ✏️ 해설지
// 각 지점을 (j + N - i) % N으로 구해준다. (반시계 방향)
for (let i = 0; i < N; i++) {
  let sumDistance = 0;

  for (let j = 0; j < N; j++) {
    sumDistance += ((j + N - i) % N) * peoples[j];
  }

  answer = Math.min(answer, sumDistance);
}

console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 괄호 쌍 만들어주기 2 | O | 24.06.14 🔍
 *
 * [완전탐색1 - 자리 수 단위로 완전탐색]
 */
let input = require("fs").readFileSync("/dev/stdin").toString().trim();
let N = input.length;

let answer = 0;
for (let i = 0; i < N - 1; i++) {
  for (let j = i + 1; j < N - 1; j++) {
    if (
      input[i] === "(" &&
      input[i + 1] === "(" &&
      input[j] === ")" &&
      input[j + 1] === ")"
    )
      answer += 1;
  }
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 인접하지 않은 2개의 숫자 | O | 24.06.14 🔍
 *
 * [완전탐색1 - 자리 수 단위로 완전탐색]
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const arr = inputs[1]
  .trim()
  .split(" ")
  .map((v) => +v);

let answer = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < N; i++) {
  for (let j = i + 2; j < N; j++) {
    answer = Math.max(answer, arr[i] + arr[j]);
  }
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️씨 오 더블유 2⭐️ | O | 24.06.14 🔍
 *
 * [완전탐색1 - 자리 수 단위로 완전탐색]
 * - 순서! 순서가 중요하고, 완탐이 가능한 경우에는 그냥 for문과 if문을 적절히 사용해서 풀 수 있다.
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const arr = inputs[1].trim().split("");

let answer = 0;

for (let i = 0; i < N - 2; i++) {
  for (let j = i + 1; j < N - 1; j++) {
    for (let k = j + 1; k < N; k++) {
      if (arr[i] === "C" && arr[j] === "O" && arr[k] === "W") answer += 1;
    }
  }
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 Carry 피하기 2 | O | 24.06.14 🔍
 *
 * [완전탐색1 - 자리 수 단위로 완전탐색]
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const nums = inputs.slice(1);

// carry를 체크하는 함수
function checkedCarry(s1, s2, s3) {
  // 길이가 가장 긴 수를 찾는다.
  let len = Math.max(s1.length, s2.length, s3.length);

  // 자릿수를 맞춘다.
  s1 = s1.padStart(len, "0");
  s2 = s2.padStart(len, "0");
  s3 = s3.padStart(len, "0");

  for (let i = 0; i < len; i++) {
    let carray = 0;
    if (Number(s1[i]) + Number(s2[i]) + Number(s3[i]) >= 10) return false;
  }
  return true;
}

let answer = -1; // carry가 발생하지 않으면서 나올 수 있는 숫자 합의 최댓값

for (let i = 0; i < N - 2; i++) {
  for (let j = i + 1; j < N - 1; j++) {
    for (let k = j + 1; k < N; k++) {
      if (checkedCarry(nums[i], nums[j], nums[k])) {
        answer = Math.max(
          answer,
          Number(nums[i]) + Number(nums[j]) + Number(nums[k])
        );
      }
    }
  }
}
console.log(answer);
