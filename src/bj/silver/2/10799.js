"use strict";

/**
 * [stack 문제]
 * - O(n) 시간복잡도.
 *    - '('이면 stack에 push
 *    - ')'이고 이전 값이 '(' 였다면, stack의 길이만큼 쇠막대기 수 추가 => 이건 레이저이다.
 *    - ')'이고 이전 값이 '(' 였다면, 쇠막대기 하나 추가
 * - 난 짝이 맞지 않는 경우는 따로 처리하지 못했다.
 */
const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const solution = (input) => {
  let answer = 0;
  const stack = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "(") {
      stack.push(input[i]);
    } else {
      // ')'일 때
      if (input[i - 1] === "(") {
        // 레이저인 경우
        stack.pop(); // 레이저를 의미하는 ')'직전의 '('는 세면 안되므로 pop한 뒤 answer에 추가한다.
        answer += stack.length;
      } else {
        // stack의 앞의 값이 ')' 였다면, 한개의 쇠막대기만 새로 생기게 되는 것이므로, ')'와 짝이되는 값만큼 삭제되어야 해서 stack에서 값을 하나 빼주고, answer에 1을 더한다.
        stack.pop();
        answer++;
      }
    }
  }
  return answer;
};

console.log(solution(input));
