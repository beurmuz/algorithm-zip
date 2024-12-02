// ----------------------------------------------------------------------
/**
 * 🔍 주어진 수까지의 곱 | O | 24.09.08 🔍
 */
let [a, b] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let answer = 1;
for (let n = a; n <= b; n++) {
  answer *= n;
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 친근하지 않은 수 | O | 24.09.09 🔍
 */
const N = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let answer = 0;
for (let i = 1; i <= N; i++) {
  if (i % 2 === 0 || i % 3 === 0 || i % 5 === 0) continue;
  answer += 1;
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️특정 조건의 온전수 구하기⭐️| X | 24.09.10 🔍
 */
let n = Number(require("fs").readFileSync(0).toString().trim());

let answer = [];
for (let i = 1; i <= n; i++) {
  if (i % 2 === 0 || i % 10 === 5 || (i % 3 === 0 && i % 9 !== 0)) {
    continue;
  }
  answer.push(i);
}
console.log(answer.join(" "));

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️완전수 판별기⭐️| O | 24.09.21 🔍
 * - 완전수란 자기 자신을 제외한 약수의 합이 자신이 되는 수
 */
const n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

let sumValue = 0;
for (let i = 1; i < n; i++) {
  if (n % i === 0) {
    sumValue += i;
  }
}
if (n === sumValue) console.log("P");
else console.log("N");

// ----------------------------------------------------------------------
/**
 * 🔍 ⭐️출력결과 37⭐️| O | 24.12.01 🔍
 * - 출력 결과가 K가 되는 양의 정수 N개는 거꾸로 계산해 구할 수 있다.
 *   -> 숫자 1이 되기 위해 어떤 숫자에서 와야 했는지를 역추적하면 된다.
 */
const fs = require("fs");
let m = 0;
let n = Number(fs.readFileSync(0).toString().trim());

while (n != 1) {
  if (n % 2 == 0) n /= 2;
  else n = 3 * n + 1;
  m++;
}

console.log(m);

// ----------------------------------------------------------------------
/**
 * 🔍 ab 사이에 있는 c | O | 24.12.02 🔍
 */
const [a, b, c] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let answer = "NO";

for (let num = a; num <= b; num++) {
  if (num % c === 0) {
    answer = "YES";
    break;
  }
}
console.log(answer);
