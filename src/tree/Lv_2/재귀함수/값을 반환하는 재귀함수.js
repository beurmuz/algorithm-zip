// ----------------------------------------------------------------------
/**
 * 🔍 1부터 특정 수까지의 합2 | O | 24.05.20 🔍
 *
 * [재귀함수]
 */
const N = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

function recursive(n) {
  if (n === 1) return 1;
  return n + recursive(n - 1);
}

console.log(recursive(N));

// ----------------------------------------------------------------------
/**
 * 🔍 각 자리 숫자 합 | △ | 24.05.20 🔍
 *
 * [재귀함수]
 * - 종료조건을 return n*n이 아닌 n으로 해서 계속 답을 구하지 못하고 있었다.
 */
const N = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

function getPartSum(n) {
  if (n < 10) return n * n;

  // ((n % 10) * (n % 10))는 끝자리를 제곱한 값
  return getPartSum(parseInt(n / 10)) + (n % 10) * (n % 10);
}

console.log(getPartSum(N));

// ----------------------------------------------------------------------
/**
 * 🔍 1이 되는 순간까지 | △ | 24.05.20 🔍
 *
 * [재귀함수]
 * - 종료조건을 return n*n이 아닌 n으로 해서 계속 답을 구하지 못하고 있었다.
 */
const N = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

let count = 0;
function f(n) {
  if (n === 1) return 1;

  count++;
  if (n % 2 === 0) f(parseInt(n / 2));
  else if (n % 2 === 1) f(parseInt(n / 3));
}

f(N);
console.log(count);

// ----------------------------------------------------------------------
/**
 * 🔍 재귀함수를 이용한 피보나치 수 | O | 24.05.20 🔍
 *
 * [재귀함수]
 * - 종료조건을 return n*n이 아닌 n으로 해서 계속 답을 구하지 못하고 있었다.
 */
const N = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

function fibo(n) {
  if (n === 1) return 1;
  if (n === 2) return 1;
  return fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(N));

// ----------------------------------------------------------------------
/**
 * 🔍 출력결과 9 | △ | 24.05.20 🔍
 *
 * [재귀함수]
 * - 재귀 트리를 그려보면 t(7, 4) = 29, t(6, 4) = 16, t(5, 4) = 9임을 알 수 있다.
 */
function trif(n, k) {
  if (n <= k) return n;
  return trif(n - 1, k) + trif(n - 2, k) + trif(n - 3, k);
}
trif(8, 4); // 54

// ----------------------------------------------------------------------
/**
 * 🔍 Factorial | O | 24.05.20 🔍
 *
 * [재귀함수]
 */

const N = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

function factorial(n) {
  if (n === 0) return 1;
  if (n === 1) return 1;
  if (n === 2) return 2;
  return n * factorial(n - 1);
}

console.log(factorial(N));

// ----------------------------------------------------------------------
/**
 * 🔍 홀수 짝수에 따른 출력값 | O | 24.05.20 🔍
 *
 * [재귀함수]
 */
const N = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

function fact(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  return n + fact(n - 2);
}

console.log(fact(N));

// ----------------------------------------------------------------------
/**
 * 🔍 출력결과 73 | △ | 24.05.20 🔍
 *
 * [재귀함수]
 * - 양의 정수x에 대해서 f(x)는 2 * x를 반환한다.
 * - f(2018) = f(0) + 2018 * 2
 */
function f(n) {
  if (n === 0) return 0;
  else return f(n - 1) + 2;
}

f(2018); // 4036

// ----------------------------------------------------------------------
/**
 * 🔍 출력결과 52 | △ | 24.05.20 🔍
 *
 * [재귀함수]
 * - f(a, b)의 return 값은 항상 a * b이다.
 */
function f(x, y) {
  if (x === 0) return 0;
  return f(parseInt(x / 3), parseInt(y * 3)) + (x % 3) * y;
}

f(215, 5);

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️재귀함수를 이용한 최댓값⭐️ | X | 24.05.20 🔍
 *
 * [재귀함수]
 * - 모든 원소에 대해 n번째 원소부터 첫번째 원소까지 비교해보며 최댓값을 반환하는 재귀함수를 작성하면 된다.
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const arr = inputs[1].split(" ").map((v) => +v);

// 1~n까지의 원소 중 최댓값을 반환하는 함수
function findMaxV(i) {
  // i는 idx라고 생각하면 이해하기 쉽다.
  // 종료 조건
  if (i === 0) return arr[0]; // index가 0이면, 가장 첫번째 배열의 값을 return한다.
  return Math.max(findMaxV(i - 1), arr[i]); // 하나 작은 값과 arr[i]중 큰 값을 찾는다.
}
console.log(findMaxV(N - 1));
