"use strict";

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
    let same = 1; // 같은 숫자의 개수 세기
    // console.log(now, stack);

    while (stack.length && stack[stack.length - 1].value <= now) {
      // stack의 상단에 있는 값보다 큰 값이 들어오면 이전 값들을 정리해주어야한다.
      //   console.log("지금부터 while문 시작!");
      //   console.log(now, same, stack);
      answer += stack[stack.length - 1].same;

      if (stack[stack.length - 1].value === now) {
        same = stack[stack.length - 1].same + 1;
      } else {
        same = 1;
      }
      stack.pop(); // 키가 더 큰 값(now)이 왔으므로, stack의 마지막 값은 더이상 마주볼 수 없게 된다.
    }
    if (stack.length) answer++;
    stack.push({ value: now, same: same });
  }

  return answer;
};

console.log(solution(N, arr));
// console.log(solution(7, [2, 4, 1, 2, 2, 5, 1]));
