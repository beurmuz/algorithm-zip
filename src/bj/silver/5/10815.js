"use strict";

/**
 * [이분탐색 문제]
 * - 그치만 나는 set으로 풀었다.
 * - 입력값의 최대 크기가 5*10^5이라 O(n)이하로 코드를 구현해야한다.
 */

const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (inputs) => {
  const cards = inputs[1].split(" ").map((v) => +v);
  const cardsSet = new Set(cards);
  const arr = inputs[3].split(" ").map((v) => +v);

  let answer = arr.map((v) => {
    if (cardsSet.has(v)) return 1;
    else return 0;
  });

  return answer.join(" ");
};

console.log(solution(inputs));
