// ----------------------------------------------------------------------
/**
 * 🔍 반복 출력하기2 | O | 24.05.20 🔍
 *
 * [재귀함수]
 */
const N = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

function recursive(n) {
  if (n === 0) return;
  recursive(n - 1); // 재호출
  console.log("HelloWorld");
}

recursive(N);

// ----------------------------------------------------------------------
/**
 * 🔍 숫자 차례로 출력하기 | O | 24.05.20 🔍
 *
 * [재귀함수]
 */
const N = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

function asc(n) {
  if (n === 0) return;
  asc(n - 1);
  process.stdout.write(n + " ");
}

function desc(n) {
  if (n === 0) return;
  process.stdout.write(n + " ");
  desc(n - 1);
}

asc(N);
console.log();
desc(N);

// ----------------------------------------------------------------------
/**
 * 🔍 재귀함수를 이용한 별 출력 | O | 24.05.20 🔍
 *
 * [재귀함수]
 */
const N = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

function recursive(n) {
  if (n === 0) return;
  recursive(n - 1);
  for (let i = 0; i < n; i++) {
    process.stdout.write("*");
  }
  console.log();
}

recursive(N);

// ----------------------------------------------------------------------
/**
 * 🔍 재귀함수의 꽃 | O | 24.05.20 🔍
 *
 * [재귀함수]
 */
const N = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

let answer = "";
function flower(n) {
  if (n === 0) return;
  answer += n + " ";
  flower(n - 1);
  answer += n + " ";
}

flower(N);
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 재귀함수를 이용한 별 출력2 | O | 24.05.20 🔍
 *
 * [재귀함수]
 */
const N = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

function makeStart(n) {
  if (n === 0) return;

  let line = "";
  for (let i = 0; i < n; i++) {
    line += "*" + " ";
  }
  console.log(line);
  makeStart(n - 1);
  line = "";
  for (let i = 0; i < n; i++) {
    line += "*" + " ";
  }
  console.log(line);
}
makeStart(N);
