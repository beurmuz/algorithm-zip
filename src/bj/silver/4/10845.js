"use strict";

const [n, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function solution(n, inputs) {
  const queue = [];
  let answer = "";
  let top = 0;

  for (let i = 0; i < n; i++) {
    const command = inputs[i].split(" ")[0];
    let result = "";

    switch (command) {
      case "push":
        const pushItem = inputs[i].split(" ")[1];
        queue[top] = pushItem; // queue[top]에 값을 넣는다.
        top++; // top의 위치를 1만큼 증가시킨다.
        break;
      case "pop": // 가장 앞에 있는 정수를 빼는 방법.
        if (top) {
          // 값이 있는 경우
          top = top - 1; // queue에서 하나를 빼니 top도 1만큼 줄인다.
          result = queue.splice(0, 1); // 맨 앞의 값을 하나 제거한다.
          answer += `${result} `;
        } else {
          // 값이 없는 경우
          result = result - 1; // -1을 출력한다.
          answer += `${result} `;
        }
        break;
      case "front": // 큐의 가장 앞에 있는 정수를 출력한다.
        result = top ? queue[0] : -1; // queue에 들어있는 정수가 있으면 queue[0]을, 없으면 -1을 출력한다.
        answer += `${result} `;
        break;
      case "back": // 큐의 가장 뒤에 있는 정수를 출력한다.
        result = top ? queue[top - 1] : -1;
        answer += `${result} `;
        break;
      case "empty":
        result = top ? 0 : 1;
        answer += `${result} `;
        break;
      case "size":
        result = top;
        answer += `${result} `;
        break;
      default:
        break;
    }
  }
  return answer.split(" ").join("\n");
}

console.log(solution(+n, inputs));
