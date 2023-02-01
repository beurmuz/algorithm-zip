"use strict";

/**
 * 분할정복 문제!
 * - 모듈러 연산 (modular arithmetic) 성질에 의하면 (A * B) mod C = (A mod C * B mod C) mod C가 성립한다.
 *  => 즉, A*B를 C로 나눈 나머지는 (A를 C로 나눈 나머지 * B를 C로 나눈 나머지)를 C로 나눈 나머지와 같다는 뜻이다.
 *  =>  A^B % C를 직접 계산하지 않아도 (A^(B / 2) % C)^2 % C 또는 (A^[B / 2] % C)^2 * (A % C)를 통해 동일한 값을 구할 수 있다.
 *
 * cf. [곱셈 문제 설명](https://tesseractjh.tistory.com/249)
 */
const [A, B, C] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);

const solve = (power) => {
  if (power === 1n) return A % C;

  const half = solve(power / 2n) % C;

  if (power % 2n) {
    // B가 짝수이면 A^B는 A^(B/2) * A^(B/2)로 나타낼 수 있고,
    return (half * half * (A % C)) % C;
  }
  // b가 홀수이면 A^B는 ((A^(B/2)%C) * (A^(B/2)%C)) % C로 나타낼수 있다.
  return (half * half) % C;
};

console.log(solve(B).toString());
