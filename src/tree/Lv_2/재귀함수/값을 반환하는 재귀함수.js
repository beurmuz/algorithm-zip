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

// ----------------------------------------------------------------------
/**
 * 🔍 큰 숫자 자리수의 합 | O | 24.05.21 🔍
 *
 * [재귀함수]
 */
let [a, b, c] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

let sums = a * b * c;

function sumOfPart(n) {
  if (n < 10) return n;
  return sumOfPart(parseInt(n / 10)) + (n % 10);
}
console.log(sumOfPart(sums));

// ----------------------------------------------------------------------
/**
 * 🔍 재귀함수를 이용한 3n + 1 수열 | O | 24.05.21 🔍
 *
 * [재귀함수]
 */
// 1. 내 풀이
const N = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

function f(n, cnt) {
  // 종료 조건
  if (n === 1) return cnt;

  if (n % 2 === 0) return f(parseInt(n / 2), cnt + 1);
  else if (n % 2 === 1) return f(parseInt(n * 3 + 1), cnt + 1);
}

console.log(f(N, 0));

// 2. 해설
const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

// a가 3n + 1 수열을 총 몇번 반복해야 1이 되는지 반환합니다.
function countNumber(a) {
  if (a === 1) {
    return 0; // 1에서 시작하면 바로 끝나기 때문에, 앞으로 필요한 횟수는 0회이다.
  }

  if (a % 2 === 0) {
    return countNumber(a / 2) + 1; // n을 2로 나눈 뒤 진행했을 때의 횟수에 +1을 해주면 된다.
  } else {
    return countNumber(3 * a + 1) + 1; // n에 3을 곱하고, 1을 더한 뒤 진행했을 때의 횟수에 1을 더해주면 된다.
  }
}

console.log(countNumber(n));

// ----------------------------------------------------------------------
/**
 * 🔍 100으로 나눈 나머지의 수열 | △ | 24.05.21 🔍
 *
 * [재귀함수]
 */
const N = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

function f(n) {
  // f(n): 수열의 n번째 원소
  if (n === 1) return 2;
  if (n === 2) return 4;
  return (f(n - 1) * f(n - 2)) % 100;
}
console.log(f(N));

// ----------------------------------------------------------------------
/**
 * 🔍 이상한 수열 | O | 24.05.21 🔍
 *
 * [재귀함수]
 */
const N = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

function f(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  return f(parseInt(n / 3)) + f(n - 1);
}

console.log(f(N));

// ----------------------------------------------------------------------
/**
 * 🔍 재귀함수를 이용한 최소공배수 | X | 24.05.21 🔍
 *
 * [재귀함수]
 */
// 1. 구한 수가 arr[n-1]과 이전 최소공배수 값의 최대공약수이면, 이전 최소공배수와 arr[n-1]를 곱한 뒤 최대공약수로 나눠주면 최소공배수를 구하는 방식
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +inputs[0];
const arr = inputs[1].split(" ").map((v) => +v);

function lcm(n) {
  if (n === 1) return arr[0];

  let lastOne = lcm(n - 1);

  // 이전 최소공배수와 이번 수와의 최대공약수를 구해서, 이번 최소 공배수를 구한다.
  for (let i = arr[n - 1]; i >= 0; i--) {
    if (arr[n - 1] % i === 0 && lastOne % i === 0) {
      return parseInt((lastOne / i) * arr[n - 1]);
    }
  }
}

console.log(lcm(N));

// 2. 해설
// 모든 원소에 대해 n번째 원소부터 첫번째 원소까지 비교해보며, 최소공배수를 구해 그 값을 반환하는 재귀함수를 작성해 해결한다.
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +inputs[0];
let arr = inputs[1].split(" ").map((v) => +v);
arr.unshift(0); // 배열의 맨 앞에 0 추가하기

// 1) 두 수간 최소공배수를 구해 반환한다.
function lcm(a, b) {
  console.log(`a: ${a},  b: ${b}`);
  let gcd = 1;
  for (let i = 1; i < Math.min(a, b) + 1; i++) {
    if (a % i === 0 && b % i === 0) gcd = i; // 최대 공약수 갱신
  }
  console.log(`최대 공약수는 ${gcd}, 최소 공배수는 ${parseInt((a * b) / gcd)}`);
  return parseInt((a * b) / gcd); // a*b를 최대공약수를 나누어 최소공배수를 구한다.
}

// 2) idx번째 까지 인덱스의 숫자 중 가장 큰 값을 반환한다.
function getLcmAll(idx) {
  // 남은 원소가 1개라면, 그 자신이 답이 된다.
  if (idx === 1) return arr[1]; // 최초 최소공배수

  // 1~idx-1번째 원소의 최소공배수를 구한 결과와
  // 현재 idx원소의 최소공배수를 구하여 반환한다.
  return lcm(getLcmAll(idx - 1), arr[idx]); // 들어가는건 뒤부터지만, 연산은 앞부터 이루어진다.
}

// 3) 모든 수의 최소공배수를 구한다.
console.log(getLcmAll(N));
