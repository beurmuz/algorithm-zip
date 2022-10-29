"use strict";

function solution(arr) {
  let answer = arr;

  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) minIndex = j;
    }
    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
  }
  return answer;
}

let array = [13, 5, 11, 7, 23, 15];

console.log(solution(array));

/* 
    기준점과 기준점 이후의 값들을 비교해 최솟값을 찾는다.
    최솟값을 발견하면 기준점의 값과 자리를 바꿔준다.
    이를 끝까지 반복
*/
