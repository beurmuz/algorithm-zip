"use strict";

const [n, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function solution(n, inputs) {
  const stack = [];
  let answer = "";
  let top = 0;

  for (let i = 0; i < n; i++) {
    const command = inputs[i].split(" ")[0]; // 명령 구분하기
    let result = "";

    switch (command) {
      case "push":
        const pushItem = inputs[i].split(" ")[1]; // push와 함께 들어온 숫자 값을
        stack[top] = pushItem; // stack의 top(현재 위치)에 넣는다.
        top++; // 값을 넣었으므로 top은 하나 증가시킨다.
        break;
      case "pop":
        if (top) {
          top = top - 1; // 하나를 빼야하니 top의 길이를 1 줄인다.
          result = stack.splice(-1); // 맨 뒤의 값 하나 제거한다.
          answer += `${result} `; // 제거한 값이 무엇인지 answer에 더해준다.
        } else {
          result = result - 1; // top이 없다면 -1을 answer에 더해준다.
          answer += `${result} `;
        }
        break;
      case "top":
        result = top ? stack[top - 1] : -1; // top이 있으면 stack의 맨 윗값을, 없다면 -1을
        answer += `${result} `; // answer에 더해준다.
        break;
      case "empty":
        result = top ? 0 : 1; // 'top이 없다' === 'top이 0이다'라는 뜻으로, stack이 비어있음을 의미한다.
        answer += `${result} `;
        break;
      case "size":
        result = top; // top이 곧 stack의 길이와 같다.
        answer += `${result} `;
        break;
      default:
        break;
    }
  }
  return answer.split(" ").join("\n");
}

console.log(solution(+n, inputs));
