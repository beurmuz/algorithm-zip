"use strict";

// const inputs = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

function solution(inputs) {
  let answer = "";
  const open = ["(", "["]; // 여는 괄호들
  const closed = [")", "]"]; // 닫는 괄호들
  let stack;

  inputs.map((str) => {
    let isNo = false; // Yes인지 No인지 여부를 저장하는 변수
    stack = [];

    for (let i = 0; i < str.length; i++) {
      // 문자열을 순회하면서 문자열이 균형을 이루는지 체크한다.
      if (open.includes(str[i]))
        stack.push(str[i]); // str[i]가 여는 태그이면 stack에 push한다.
      else if (closed.includes(str[i])) {
        // str[i]가 닫는 태그이면
        if (stack.pop() !== open[closed.indexOf(str[i])]) {
          // stack의 맨 뒤 값이 open[현재 값(닫는 태그)의 index]와 비교했을 때 같은 문자열이 아니면
          answer += "no" + "\n"; // 이건 틀린 문자열이다!
          isNo = true; // 아님을 기록하고
          break; // 반복문을 멈춘다.
        }
      }
    }
    if (!isNo) {
      // isNo가 false이면
      if (stack.length === 0)
        answer +=
          "yes" +
          "\n"; // 짝 맞추어 pop했기에 stack의 길이가 0이면 해당 str은 균형을 이루고 있는 것이다.
      else answer += "no" + "\n"; // 길이가 0이 아니면 짝 맞추어진 것이 아니므로 no를 출력한다.
    }
  });
  return answer;
}

let inputs = `So when I die (the [first] I will see in (heaven) is a score list).
[ first in ] ( first out ).
Half Moon tonight (At least it is better than no Moon at all].
A rope may form )( a trail in a maze.
Help( I[m being held prisoner in a fortune cookie factory)].
([ (([( [ ] ) ( ) (( ))] )) ]).
 .
.`;
let input = inputs.split("\n");
input.pop(); // 맨 마지막은 종료조건
console.log(solution(input));
