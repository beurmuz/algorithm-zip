"use strict";

/**
 * 피보나치 함수
 */

const fibonacci = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(3));

/**
 * DP를 이용한 피보나치
 */
const fibonacci2 = (n) => {
  let fibo = [];
  fibo[0] = 0;
  fibo[1] = 1;
  fibo[2] = 1;
  for (let i = 3; i <= n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo[n];
};
