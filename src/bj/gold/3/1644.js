"use strict";

/**
 * [에라토스테네스의 체 + 투 포인터 문제]
 * - n까지의 소수를 미리 구해놓고, 투포인터로 풀려는 접근 방법이 맞았다.
 *
 * - 단, 에라토스테네스의 체를 쓸 생각은 못했다.
 */
const n = require("fs").readFileSync("/dev/stdin").toString().trim();

const solution = (n) => {
  // 1. 에라토스테네스의 체로 n까지의 소수 리스트를 구해놓는다.
  const primes = [];
  let checked = Array.from({ length: n + 1 }, () => true);
  for (let i = 2; i * i <= n; i++) {
    // i^2가 n보다 작을때까지만 진행한다.
    if (!checked[i]) continue;
    for (let j = i * i; j <= n; j += i) {
      // j는 i^2부터 n까지, i씩 더하면서 순회한다.
      checked[j] = false;
    }
  }

  // prime값만 true로 남는다.
  for (let i = 2; i <= n; i++) {
    if (checked[i]) primes.push(i);
  }

  // 2. 투 포인터
  let answer = 0;
  let sum = 0;
  let lt = 0;

  for (let rt = 0; rt < primes.length; rt++) {
    sum += primes[rt]; // sum에 근접해질때까지 rt를 늘려놓는다.
    while (sum > n) {
      // sum이 n을 넘으면
      sum -= primes[lt++]; // sum에서 lt자리의 값을 빼고, lt를 1 증가시킨다.
    }
    if (sum === n) {
      // sum이 n과 같으면, 해당 구간이 소수의 연속합이 가능하다는 것이다.
      //   console.log(`rt: ${rt}, lt: ${lt}, sum: ${sum}`);
      answer++;
    }
  }
  return answer;
};

console.log(solution(+n));
