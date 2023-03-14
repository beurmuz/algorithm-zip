"use strict";

/**
 * A와 B의 차이의 최솟값은 연산을 하기 전 A를 B에 겹쳤을 때, 가장 적은 차이를 내는 경우가 있다면 그 차이가 최솟값이다.
 * => A의 나머지 부분을 모두 B와 같게끔 해야 최솟값이 나오기 때문에 연산을 하기 전 상태에서 이미 최솟값을 알 수 있다.
 */
const [A, B] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const solution = (A, B) => {
  let min = A.length;

  for (let i = 0; i <= B.length - A.length; i++) {
    let curMin = 0;
    for (let j = i; j < i + A.length; j++) {
      if (A[j - i] !== B[j]) curMin++;
    }
    if (curMin < min) min = curMin;
  }
  return min;
};

console.log(solution(A, B));
