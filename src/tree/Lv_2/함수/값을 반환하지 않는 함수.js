/**
 * 🔍 별 찍는 것을 5번 반복하기 | O | 24.05.15 🔍
 *
 * [함수]
 */
function printStar() {
  console.log("**********");
}

for (let i = 0; i < 5; i++) {
  printStar();
}

// ----------------------------------------------------------------------
/**
 * 🔍 인자가 1개인 함수 - 반복 출력하기 | O | 24.05.15 🔍
 *
 * [함수]
 */
const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function printString(N) {
  for (let i = 0; i < N; i++) {
    console.log("12345^&*()_");
  }
}

printString(input);

// ----------------------------------------------------------------------
/**
 * 🔍 인자가 2개인 함수 - 함수를 이용해서 직사각형 만들기 | O | 24.05.15 🔍
 *
 * [함수]
 */
const [N, M] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

function printRect(n, m) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      process.stdout.write("1"); // 인자는 문자열만 가능하다.
    }
    console.log();
  }
}

printRect(N, M);

// ----------------------------------------------------------------------
/**
 * 🔍 숫자로 이루어진 사각형 | O | 24.05.15 🔍
 *
 * [함수]
 */
const N = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

function printRect(n) {
  let num = 1;
  for (let i = 0; i < n; i++) {
    let line = [];
    for (let j = 0; j < n; j++) {
      line.push(num);
      num += 1;
      if (num === 10) num = 1;
    }
    console.log(line.join(" "));
  }
}

printRect(N);

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️ 최대공약수 구하기 ⭐️ | △ | 24.05.15 🔍
 *
 * [함수]
 */
const [N, M] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

function gcd(n, m) {
  let answer = 1;
  for (let i = 2; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) answer = i;
  }
  console.log(answer);
}

gcd(N, M);

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️ 최소공배수 구하기 ⭐️ | △ | 24.05.15 🔍
 *
 * [함수]
 */
const [N, M] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

function lcm(n, m) {
  let answer = 1;
  while (1) {
    if (answer % n === 0 && answer % m === 0) break;
    answer++;
  }
  console.log(answer);
}

lcm(N, M);
