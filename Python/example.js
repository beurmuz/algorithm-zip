"use strict";

function getPermutations(arr, num) {
  let result = 0;
  if (num === 1) return 1;

  arr.forEach((value, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    getPermutations(rest, num - 1);
    result++;
  });
  return result;
}

function solution(S) {
  const nums = [];
  const operators = [];
  S.split("").forEach((v) => {
    if (isNaN(v)) operators.push(v);
    else nums.push(+v);
  });

  // operators가 없고 숫자만 있는 경우 (순열로 푼다)
  // nums.length 중 2개 뽑기 => nP2
  if (operators.length === 0) {
    return getPermutations(nums, 2);
  }

  // operators와 nums 합치기
}

console.log(solution("16-+23"));
console.log(solution("1111"));
console.log(solution("11-3+4"));
