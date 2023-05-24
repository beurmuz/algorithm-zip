"use strict";

/**
 * [수학 문제]
 * - 0, 1, 2 3개의 숫자로 N자리 3의 배수 만들기
 * - 단순하게 brute force로 찾으려 한다면 O(3^3333)이 필요하므로 불가능하다.
 * - 이전값 * 3 % mod를 구하면 된다.
 */
const n = +require("fs").readFileSync("/dev/stdin").toString().trim();

const solution = (n) => {
  if (n === 1) return 0;
  const mod = 1000000009;

  let answer = 2;
  for (let i = 2; i < n; i++) {
    answer = (answer * 3) % mod;
  }
  return answer;
};

console.log(solution(n));
