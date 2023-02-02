"use strict";

/**
 * dp (다이나믹 프로그래밍) 문제
 *
 * 1. 처음에 푼 풀이
 * - 단순 반복문으로 maps[x1-1][y1-1] ~ maps[x2-1][y2-1]의 누적합을 구했다.
 * => 시간초과 발생!
 */
// const [inputs, ...values] = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

// const solution = (inputs, values) => {
//   const [n, m] = inputs.split(" ").map(Number);
//   const maps = [];
//   let answer = [];

//   for (let i = 0; i < n; i++) {
//     maps.push(values[i].split(" ").map(Number));
//   }

//   // 합 구하기
//   for (let i = n; i < values.length; i++) {
//     let [x1, y1, x2, y2] = values[i].split(" ").map(Number);
//     let sum = 0;
//     for (let x = x1; x <= x2; x++) {
//       for (let y = y1; y <= y2; y++) {
//         //   console.log(maps[x-1][y-1]);
//         sum += maps[x - 1][y - 1];
//       }
//     }
//     answer.push(sum);
//   }
//   return answer.join("\n");
// };

// console.log(solution(inputs, values));

/**
 * 2. 다시 푼 풀이
 * - 해당 문제는 dp를 이용해서 풀어야한다.
 */
const [[n, m], ...values] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const solution = (n, m, values) => {
  const dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  let answer = [];

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      dp[x + 1][y + 1] = values[x][y]; // (1,1)부터 (x,y)까지의 합을 저장
    }
  }

  // dp 배열에 누적합 더하기
  for (let x = 1; x <= n; x++) {
    for (let y = 1; y <= n; y++) {
      // ex) (3, 3)의 구간합은 (원래 표의 (3, 3)에 위치한 값) + (2, 3) 구간합 + (3, 2) 구간합 - (2, 2) 구간합으로 구할 수 있다.
      dp[x][y] += dp[x - 1][y] + dp[x][y - 1] - dp[x - 1][y - 1];
    }
  }

  // 각 위치의 누적합 구해서 answer에 push하기
  for (let k = n; k < values.length; k++) {
    // m번 순회
    let [x1, y1, x2, y2] = values[k];
    answer.push(
      // (2, 2) ~ (3, 3)의 구간합은
      // (1, 1) ~ (3, 3)의 구간합에서 (1, 1) ~ (1, 3)의 구간합과 (1, 1) ~ (3, 1)의 구간합을 빼고 중복으로 뺀 (1, 1) ~ (1, 1) 구간합을 다시 더한 것과 같다.
      dp[x2][y2] - dp[x1 - 1][y2] - dp[x2][y1 - 1] + dp[x1 - 1][y1 - 1]
    );
  }

  return answer.join("\n");
};

console.log(solution(n, m, values));
