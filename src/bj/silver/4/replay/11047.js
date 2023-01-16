"use strict";

/**
 * 그리디 알고리즘으로 풀기
 * - 보통 그리디는 정렬 후 이용하면 좋다..
 */
const [N, K, ...values] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map((v) => +v);

const solution = (N, K, values) => {
  const kinds = values.sort((a, b) => b - a); // 우선 동전들을 내림차순으로 정렬한다.
  let answer = 0;

  for (let price of kinds) {
    if (price > K) continue; // 현재 동전이 K보다 크면 반복문을 건너뛴다.
    let count = Math.floor(K / price); // k를 price로 나눈 값을 count에 저장한다.
    if (count === 0) continue; // 나눠지지 않는다면  건너뛴다.
    answer += count; // count를 result에 저장한다.

    K = K % price; // K를 price로 나눈 후 남은 금액으로 갱신한다.
    if (K === 0) break; // 남은 금액이 0원이 되면 반복문을 종료한다.
  }
  return answer;
};

console.log(solution(N, K, values));
