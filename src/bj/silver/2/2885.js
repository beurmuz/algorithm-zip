"use strict";

/**
 * [그리디 문제]
 * 코드 설계보다 문제를 이해하는 게 더 어려웠다.
 */
const K = require("fs").readFileSync("/dev/stdin").toString().trim();

const solution = (K) => {
  let chocoSize = 1;

  // 구매해야하는 초콜릿의 크기 구하기
  while (chocoSize < K) {
    chocoSize = chocoSize * 2;
  }

  // 반복 횟수 구하기: k개의 초콜릿 만들기
  // 나머지가 0이 아니면 초콜릿을 반으로 나누고, 0이면 그 횟수를 반환한다.
  let answer = 0;
  let choco = chocoSize;
  while (1) {
    // console.log(choco, answer);
    if (K % choco === 0) break;
    else {
      choco = parseInt(choco / 2);
      answer += 1;
    }
  }
  return `${chocoSize} ${answer}`;
};

console.log(solution(+K));
