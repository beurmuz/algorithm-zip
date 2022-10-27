"use strict";

// [방법 1] 이중 for문 사용하기
// function solution(m, arr) {
//   let answer = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (let j = i; j < arr.length; j++) {
//       sum += arr[j];
//       if (sum <= m) answer++;
//       if (sum > m) break;
//     }
//   }
//   return answer;
// }

// [방법 2] 투포인터 활용하기
function solution(m, arr) {
  let answer = 0;
  let rt = 0;

  for (let lt = 0; lt < arr.length; lt++) {
    let sum = 0;
    rt = lt;
    while (sum <= m) {
      sum += arr[rt++];
      if (sum <= m) {
        answer++;
        // console.log(`sum: ${sum}, lt: ${lt}, rt: ${rt}`);
      }
    }
  }
  return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
