"use strict";

/**
 * 처음에 푼 풀이 - 틀렸다! n대신 실제 테스트케이스 값을 넣었기 때문이다..^^
 * - 아래와 같이 풀 순 있지만, 에라토스테네스의 체를 이용하면 빠르게 계산할 수 있다.
 */
const [m, n] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

function prime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= Math.ceil(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(m, n) {
  for (let i = m; i <= n; i++) {
    let nums = prime(i);
    if (nums) console.log(i);
  }
}

solution(+m, +n);

/**
 * 에라토스테네스의 체로 풀기
 */
const [m, n] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

function solution(m, n) {
  const notPrime = { 1: true };
  const result = [];

  for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
    if (notPrime[i]) continue;
    for (let j = i ** 2; j <= n; j += i) {
      notPrime[j] = true;
    }
  }

  for (let i = m; i <= n; i++) {
    if (!notPrime[i]) result.push(i);
  }
  return result.join("\n");
}

console.log(solution(+m, +n));
