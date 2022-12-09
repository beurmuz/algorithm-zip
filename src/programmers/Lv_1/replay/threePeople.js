"use strict";

function solution(number) {
  let answer = 0;

  function dfs(L, combination) {
    if (combination.length === 3) {
      answer +=
        combination.reduce((acc, value) => acc + value, 0) === 0 ? 1 : 0;
      return;
    }

    for (let i = L; i < number.length; i++) {
      dfs(i + 1, [...combination, number[i]]);
    }
  }
  dfs(0, []);

  return answer;
}

console.log(solution([-2, 3, 0, 2, -5]));
console.log(solution([-3, -2, -1, 0, 1, 2, 3]));
console.log(solution([-1, 1, -1, 1]));
