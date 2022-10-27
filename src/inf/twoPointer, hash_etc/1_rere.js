"use strict";

// [방법1] concat 이용하기
// function solution(arr1, arr2) {
//   let arr = arr1.concat(arr2);
//   return arr.sort((a, b) => a - b);
// }

// [방법2] 투포인터 이용하기 (<= 이게 올바른 해답)
function solution(a, b) {
  let answer = [];
  let n = a.length;
  let m = b.length;
  let p1 = 0; // a
  let p2 = 0; // b

  while (p1 < n && p2 < m) {
    // 둘중 하나가 거짓되면 반복이 종료된다.
    if (a[p1] <= b[p2])
      answer.push(a[p1++]); // p1이 가리키는 값을 answer에 넣고, p1을 증가시킴
    else answer.push(b[p2++]);
  }

  // 둘중 어느 것이 남은지 모르니, 둘다 while문을 이용해 남은 값을 answer에 push한다.
  while (p1 < n) answer.push(a[p1++]);
  while (p2 < m) answer.push(b[p2++]);
  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
