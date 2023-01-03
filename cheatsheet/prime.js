"use strict";

/**
 * 소수?
 * - 소수란 1과 자기 자신만으로 나누어 떨어지는 양의 정수
 * - 2, 3, 5, 7, 11, 13, 17 ...
 * - 1은 소수도, 합성수도 아니다.
 */

// 1. 1~n의 제곱근까지 판별하는 법
const isPrime = (n) => {
  if (n === 1) return false;
  for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
    if (n % i === 0) return false; // 0으로 나누어 떨어지는 값이 있으면 그 수는 무조건 소수가 아니다.
  }
  return true; // 0으로 나누어 떨어지는 값이 없으면 그 수는 소수이다.
};
