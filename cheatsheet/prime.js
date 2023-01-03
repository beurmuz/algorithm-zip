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

/**
 * 에라토스테네스의 체?
 * - 2부터 n까지 자신을 제외한 배수를 제거하다보면 소수만 남는 원리를 이용한 방식
 * - 어떤 수의 배수가 되는 수는 다른 수로 나누어 떨어지기 때문에 소수가 될 수 없다.
 */

// 2. 에라토스테네스의 체를 이용해 판별하는 법
const isPrime = (n) => {
  const notPrime = { 1: true };
  const result = [];

  for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
    if (notPrime[i]) continue; // 이미 소수가 아님을 확인했으니 continue한다.

    for (let j = i ** 2; j <= n; j += i) {
      // i의 배수는 i로 나눠지는 것이니 notPrime에 저장해준다.
      notPrime[j] = true;
    }
  }
  return notPrime[n]; // true or false가 출력된다.
};
