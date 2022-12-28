"use strict";
// ✅ 유클리드 호제법 ✅

/**
 * 1. 처음에 푼 풀이
 * 최대공약수, 최소공배수를 구하는 함수를 따로 만들어 실행했다.
 * 근데 계속 틀렸다고 나온다!
 */
function solution(a, b) {
  let gcdNum = gcd(+a, +b);
  let lcmNum = lcm(+a, +b);
  console.log(gcdNum);
  console.log(lcmNum);
}

// 최대 공약수 구하기
function gcd(a, b) {
  let answer = 0;
  for (let i = 2; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) answer = i;
  }
  return answer;
}

// 최소 공배수 구하기
function lcm(a, b) {
  let count = 1;
  while (1) {
    if (count % a === 0 && count % b === 0) break;
    count++;
  }
  return count;
}
solution(a, b);

/**
 * 2. 다른 풀이법 - '유클리드 호제법' 활용하기
 * - 유클리드 호제법으로 최대 공약수를 구한 뒤,
 * - 최소 공배수는 a, b의 곱을 최대 공약수로 나누면 된다.
 */
let [a, b] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

function solution(a, b) {
  let num1 = a;
  let num2 = b;
  while (num1 % num2 !== 0) {
    // a%b가 0이 아닌 동안 반복한다.
    let n = num1 % num2;
    if (n !== 0) {
      num1 = num2;
      num2 = n; // 얘가 최대 공약수가 된다.
    }
  }
  console.log(num2); // 최대 공약수 출력
  console.log((a * b) / num2); // 최소 공배수 출력
}
solution(+a, +b);
