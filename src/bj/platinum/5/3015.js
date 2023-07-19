"use strict";

/**
 * [stack 문제]
 * - 입력값의 최대 크기가 5*10^5이므로 O(N) 시간복잡도가 되도록 구현해야한다.
 */
const [N, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

const solution = (N, arr) => {
  let answer = 0;
  let stack = [];

  for (let i = 0; i < N; i++) {
    let now = arr[i];
    let same = 1; // 같은 숫자가 몇개 있는지 count

    // console.log(i, now, same, stack);

    while (stack.length && stack[stack.length - 1].value <= now) {
      answer += stack[stack.length - 1].same;

      if (stack[stack.length - 1].value === now) {
        same = stack[stack.length - 1].same + 1; // 같은 숫자 발견!
      } else {
        same = 1; // top의 값이 now와 다르므로 same을 다시 1로 만들어준다.
      }
      stack.pop();
    }
    if (stack.length) answer++; // stack.length > 0이라는 것은 아직도 마주볼 수 있는 수 있음을 의미한다.
    stack.push({ value: now, same: same }); // now의 값과 같은 숫자의 개수를 stack에 push한다.
  }
  return answer;
};

console.log(solution(N, arr));
