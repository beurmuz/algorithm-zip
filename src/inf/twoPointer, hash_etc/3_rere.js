"use strict";

// [방법 1] 이중 for문 이용하기
// function solution(m, arr) {
//   let answer = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let tmp = 0;
//     for (let j = i; j < arr.length; j++) {
//       tmp += arr[j];
//       if (tmp > m) break;
//       if (tmp === m) answer++;
//     }
//   }
//   return answer;
// }

// [방법 2] 투포인터 이용하기
function solution(m, arr) {
  let answer = 0;
  let lt = 0;
  let sum = 0;

  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    while (sum >= m) {
      if (sum === m) answer++;
      sum -= arr[lt++]; // lt 값을 뺀 후 lt값 1증가
    }
  }
  return answer;
}

let arr = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, arr));
