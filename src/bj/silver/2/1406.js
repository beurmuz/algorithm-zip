"use strict";

/**
 * [연결리스트 문제, stack 문제]
 * - 연결리스트 문제로 분류되지만 stack을 이용해 풀 수 있는 문제이다.
 * - stack을 2개 놓고, 커서의 위치에 따라 sentence를 분리하면 된다.
 * - stack으로 풀 생각은 못했다.
 */
const [leftStack, length, ...commands] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (leftStack, length, commands) => {
  leftStack = leftStack.split("");
  let rightStack = [];

  commands.forEach((line) => {
    let command = line.split(" ");

    if (command[0] === "L" && leftStack.length) {
      // 커서를 왼쪽으로 한 칸 옮김 (= leftStack의 맨 윗값을 rightStack으로 옮기기)
      rightStack.push(leftStack.pop());
    } else if (command[0] === "D" && rightStack.length) {
      // 커서를 오른쪽으로 한 칸 옮김 (= rightStack의 맨 윗값을 leftStack으로 옮기기)
      leftStack.push(rightStack.pop());
    } else if (command[0] === "B") {
      // 커서 왼쪽에 있는 문자를 삭제함 (= leftStack의 맨 윗값을 삭제)
      leftStack.pop();
    } else if (command[0] === "P") {
      // $라는 문자를 커서 왼쪽에 추가함 (= leftStack에 추가)
      leftStack.push(command[1]);
    }
  });
  return leftStack.join("") + rightStack.reverse().join("");
};

console.log(solution(leftStack, +length, commands));
