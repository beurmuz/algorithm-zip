"use strict";

/**
 * [구현, 시뮬레이션, 정렬 문제]
 * - 시간복잡도: 정렬 시 O(n log n) + m*(n+n) + n = O(n log n) + O(n)정도?
 */
const [input, ...cards] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (input, cards) => {
  const [N, M] = input.split(" ").map((v) => +v);
  const scores = Array.from({ length: N }, () => 0);
  cards = cards.map((player) =>
    player
      .split(" ")
      .map((v) => +v)
      .sort((a, b) => b - a)
  );

  for (let m = 0; m < M; m++) {
    let maxCard = cards[0][m];

    for (let n = 0; n < N; n++) {
      maxCard = Math.max(maxCard, cards[n][m]);
    }

    for (let n = 0; n < N; n++) {
      if (cards[n][m] === maxCard) {
        scores[n] += 1;
      }
    }
  }

  const answer = [];

  for (let i = 0; i < N; i++) {
    if (scores[i] === Math.max(...scores)) answer.push(i + 1);
  }
  return answer.join(" ");
};

console.log(solution(input, cards));
