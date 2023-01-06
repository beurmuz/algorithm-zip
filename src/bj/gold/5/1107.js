"use strict";

const [N, M, nums] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

/**
 * 문제에 어떻게 접근해야할지 모르겠어서 해설을 보았다.
 *
 * 어려웠던 점?
 * -> 어느 지점부터 count를 해야할까?
 * -> 자판을 누를 수 있는 숫자들을 어떻게 조합해야할까?
 *
 *
 * 새로 알게된 점
 * - 한 가지 느낀 게 있다면, 접근법을 모르겠을 땐 '브루트포스'를 생각해보자!
 * - reduce()를 이용해서 {}이나 []에 값을 누적할 수 있다는 사실..
 */
const solution = (N, M, nums) => {
  const brokens = nums
    ? nums.split(" ").reduce((acc, v) => {
        acc[v] = true;
        return acc;
      }, {})
    : {};

  let count = Math.abs(100 - N); // 100은 시작지점이다.

  for (let i = 0; i < 1000000; i++) {
    const numString = "" + i;
    let isValid = true;
    // 1씩 증가시키면서
    for (let j = 0; j < numString.length; j++) {
      // 증가시킨 수에 누를 수 없는 번호가 있는지 찾아본다.
      if (brokens[numString[j]]) {
        isValid = false; // 있다면 유효하지 않은 숫자.
        break;
      }
    }
    if (isValid) {
      count = Math.min(count, Math.abs(i - N) + numString.length); // 최솟값을 찾는다.
    }
  }
  return count;
};

console.log(solution(N, M, nums));
