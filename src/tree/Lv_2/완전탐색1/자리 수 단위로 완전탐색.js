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
 * - 시작점과 종료지점이 정해져있음을 인지하지 못하고 있어서 더 오래걸렸다.
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

// 또다른 for문
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
