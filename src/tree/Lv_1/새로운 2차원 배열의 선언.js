/**
 * 🔍 숫자 직사각형 | O | 24.05.10 🔍
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
  let num = 1;
  for (let i = 0; i < N; i++) {
    let line = [];
    for (let j = 0; j < M; j++) {
      line.push(num);
      num += 1;
    }
    console.log(line.join(" "));
  }
};

solution(N, M);

// ----------------------------------------------------------------------
/**
 * 🔍 두 배열의 곱 | O | 24.05.10 🔍
 *
 * [구현]
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map((v) => +v));

const solution = (inputs) => {
  const a = inputs.slice(0, 3);
  const b = inputs.slice(4, 7);

  for (let i = 0; i < 3; i++) {
    let line = [];
    for (let j = 0; j < 3; j++) {
      line.push(a[i][j] * b[i][j]);
    }
    console.log(line.join(" "));
  }
};

solution(inputs);

// ----------------------------------------------------------------------
/**
 * 🔍 두 개의 격자 비교하기 | O | 24.05.10 🔍
 *
 * [구현]
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map((v) => +v));

const solution = (inputs) => {
  const [N, M] = inputs[0];
  const a = inputs.slice(1, N + 1);
  const b = inputs.slice(N + 1, inputs.length);

  for (let i = 0; i < N; i++) {
    let line = [];
    for (let j = 0; j < M; j++) {
      if (a[i][j] === b[i][j]) line.push(0);
      else line.push(1);
    }
    console.log(line.join(" "));
  }
};

solution(inputs);
