"use strict";

// [방법1] concat, sort후 반복문으로 공통 원소 구하는 법
// function solution(arr1, arr2) {
//   let arr = arr1.concat(arr2).sort((a, b) => a - b);
//   let answer = new Set();
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i + 1]) answer.add(arr[i]);
//   }
//   return [...answer].join(" ");
// }

// [방법2] 투포인터 활용하는 방법
function solution(a, b) {
  let answer = [];
  let p1 = 0;
  let p2 = 0;
  a = a.sort((a, b) => a - b);
  b = b.sort((a, b) => a - b);

  while (p1 < a.length && p2 < b.length) {
    if (a[p1] === b[p2]) answer.push(a[p1++]);
    else if (a[p1] < b[p2]) p1++;
    else p2++;
  }
  return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
