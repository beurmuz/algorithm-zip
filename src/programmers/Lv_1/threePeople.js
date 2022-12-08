"use strict";

// 1. 조합으로 풀기
/*
    - 빈배열을 넘겨서 빈배열의 크기가 3이면 현재값이 0인지 검사하고 종료하기
*/
// function solution(number) {
//   let answer = 0;

//   function dfs(L, combination) {
//     if (combination.length === 3) {
//       answer +=
//         combination.reduce((acc, current) => acc + current, 0) === 0 ? 1 : 0;
//       return;
//     }

//     for (let i = L; i < number.length; i++) {
//       dfs(i + 1, [...combination, number[i]]);
//     }
//   }
//   dfs(0, []);
//   return answer;
// }

console.log(solution([-2, 3, 0, 2, -5]));
console.log(solution([-3, -2, -1, 0, 1, 2, 3]));
console.log(solution([-1, 1, -1, 1]));

// 2. 원래 내가 풀려고 했던 방법
/*
    - checked 배열 만들어서 방문체크하기
    - 해당 값을 이용한다 / 안한다의 문제로 풀기
*/
function solution(number) {
  let checked = Array.from({ length: number.length }, () => 0);
  let answer = 0;

  function dfs(L, index) {
    if (L === 3) {
      let sum = 0;
      checked.map((check, index) => {
        if (check === 1) sum += number[index];
      });
      answer += sum === 0 ? 1 : 0;
    }
    for (let i = index; i < number.length; i++) {
      if (checked[i] === 1) continue;
      checked[i] = 1;
      dfs(L + 1, i);
      checked[i] = 0; // 백트래킹
    }
  }
  dfs(0, 0);
  return answer;
}
