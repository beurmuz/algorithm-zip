"use strict";

// [방법 1] 이중 for문 이용하기
// function solution(k, arr) {
//   let answer = 0;
//   let max = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (let j = i; j < i + k; j++) {
//       sum += arr[j];
//     }
//     if (sum >= max) max = sum;
//   }
//   answer = max;
//   return max;
// }

// [방법 2] 슬라이딩 윈도우 이용하기
function solution(k, arr) {
  let answer = 0;
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }

  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }
  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
