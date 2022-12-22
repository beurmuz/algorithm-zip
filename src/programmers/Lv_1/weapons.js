"use strict";

/**
 * 1. 처음에 푼 풀이
 * 정확성 66.7 / 100.0
 * 통과되지 않은 테케는 모두 시간 초과문제.
 * 아마 약수를 구하는 과정에서 시간 초과가 발생하는 것 같다!
 */
function solution(number, limit, power) {
  let answer = 0;
  let peoplePower = [];

  for (let i = 1; i <= number; i++) {
    let personPower = divisor(i);
    if (personPower > limit) answer += power;
    else answer += personPower;
  }
  return answer;
}

function divisor(number) {
  let nlist = [];
  if (number === 1) return 1;
  for (let i = 0; i <= number; i++) {
    if (number % i === 0) nlist.push(i); // 0으로 나누어 떨어지면 약수이다.
  }
  return nlist.length;
}

/**
 * 2. 두번째 풀이
 * 첫번째 풀이에서 약수를 구할 때 반절 + 원래 값1개 해주는 걸로 바꾸었다.
 * 통과는 했지만 시간이 너무 오래걸리는 건 똑같은 것 같다.
 */
function solution(number, limit, power) {
  let answer = 0;
  let peoplePower = [];

  for (let i = 1; i <= number; i++) {
    let personPower = divisor(i);
    if (personPower > limit) answer += power;
    else answer += personPower;
  }
  return answer;
}

function divisor(number) {
  let nlist = [];
  if (number === 1) return 1;
  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) nlist.push(i); // 0으로 나누어 떨어지면 약수이다.
  }
  return nlist.length + 1;
}
