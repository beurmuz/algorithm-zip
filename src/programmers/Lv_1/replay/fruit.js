"use strict";

function solution(k, m, score) {
  let answer = 0;
  score.sort((a, b) => b - a);

  let index = m - 1;
  for (let i = 0; i < Math.floor(score.length / m); i++) {
    answer += score[index] * m;
    index += m;
  }
  return answer;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));
