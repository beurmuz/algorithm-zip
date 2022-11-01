"use strict";

function solution(arr) {
  let answer = [];
  let sortedArr = arr.slice(); // slice로 배열을 복사하지 않으면 원본 배열도 함께 변화함
  sortedArr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortedArr[i]) {
      answer.push(i + 1);
    }
  }
  return answer;
}

let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));
