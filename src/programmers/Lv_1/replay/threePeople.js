"use strict";

// dfs 이용하기1
// function solution(number) {
//   let answer = 0;

//   function dfs(L, combination) {
//     if (combination.length === 3) {
//       answer +=
//         combination.reduce((acc, value) => acc + value, 0) === 0 ? 1 : 0;
//       return;
//     }

//     for (let i = L; i < number.length; i++) {
//       dfs(i + 1, [...combination, number[i]]);
//     }
//   }
//   dfs(0, []);

//   return answer;
// }

// 파라미터를 다르게해서 dfs 풀어보기
function solution(number) {
  let answer = 0;
  let checked = Array.from({ length: number.length }, () => 0);

  function dfs(L, index) {
    if (L === 3) {
      let sum = 0;
      checked.map((value, idx) => {
        if (value) sum += number[idx];
      });
      answer += sum === 0 ? 1 : 0;
    }

    for (let i = index; i < number.length; i++) {
      if (checked[i] === 1) continue; // 1이면 바로 빠져나옴
      checked[i] = 1;
      dfs(L + 1, i);
      checked[i] = 0;
    }
  }
  dfs(0, 0);
  return answer;
}

console.log(solution([-2, 3, 0, 2, -5]));
console.log(solution([-3, -2, -1, 0, 1, 2, 3]));
console.log(solution([-1, 1, -1, 1]));
