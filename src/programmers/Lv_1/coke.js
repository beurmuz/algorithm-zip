"use strict";

function solution(a, b, n) {
  let total = 0;

  while (n >= a) {
    total += Math.floor(n / a) * b;
    n = Math.floor(n / a) * b + (n % a); // 받은 병 개수 + 바꾸고 남은 병 개수
  }
  return total;
}

console.log(solution(2, 1, 20));
console.log(solution(3, 1, 20));
