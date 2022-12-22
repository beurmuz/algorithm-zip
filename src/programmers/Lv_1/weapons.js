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

/**
 * 3. 다른 풀이
 * 시간이 화아아악 줄어든다.
 */
function solution(number, limit, power) {
  let answer = 0;

  // 1부터 number까지 반복한다.
  for (let n = 1; n <= number; n++) {
    let count = 0; // 약수의 개수
    for (let j = 1; j * j <= n; j++) {
      if (j * j == n)
        count++; // 어떤 수의 제곱을 했을 때 n이 나오면 약수의 개수를 1개 더한다.
      else if (n % j == 0) count += 2; // 나눴을 때 나머지가 0이면 약수의 개수에 2를 더한다.
    }
    if (count > limit) count = power;
    answer += count;
  }
  return answer;
}
