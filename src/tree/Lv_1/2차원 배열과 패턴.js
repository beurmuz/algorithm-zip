/**
 * 🔍 옆으로 사각형 채우기 | O | 24.05.10 🔍
 *
 * [구현]
 */
const N = require("fs").readFileSync("/dev/stdin").toString().trim();

const solution = (N) => {
  let num = 1;
  for (let i = 0; i <= N; i++) {
    let line = [];
    for (let j = 0; j < N; j++) {
      line.push(num);
      num += 1;
    }
    console.log(line.join(" "));
  }
};

solution(+N);

// ----------------------------------------------------------------------
/**
 * 🔍 아래로 사각형 채우기 | O | 24.05.10 🔍
 *
 * [구현]
 */
const N = require("fs").readFileSync("/dev/stdin").toString().trim();

const solution = (N) => {
  for (let i = 1; i <= N; i++) {
    let line = [];
    for (let j = 0; j < N; j++) {
      line.push(i + N * j);
    }
    console.log(line.join(" "));
  }
};

solution(+N);

// ----------------------------------------------------------------------
/**
 * 🔍 지그재그로 숫자 채우기 | O | 24.05.10 🔍
 *
 * [구현]
 */
const [N, M] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

const solution = (N, M) => {
  for (let i = 0; i < N; i++) {
    let line = [];
    for (let j = 0; j < M; j++) {
      if (j % 2 === 0) {
        // 짝수번째 자리 (원래대로)
        line.push(i + N * j);
      } else {
        // 홀수번째 자리 (거꾸로)
        line.push(N * (j + 1) - i - 1);
      }
    }
    console.log(line.join(" "));
  }
};

solution(N, M);

// ----------------------------------------------------------------------
/**
 * 🔍 대각선으로 숫자 채우기 | O | 24.05.11 🔍
 *
 * [구현]
 */
