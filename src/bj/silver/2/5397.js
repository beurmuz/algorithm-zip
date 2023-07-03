"use strict";

/**
 * [연결리스트 문제, stack 문제]
 * - 1406 문제처럼 두개의 stack을 이용해서 풀었다.
 */
const [T, ...testcases] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (T, testcases) => {
  let answer = [];
  testcases.forEach((line) => {
    let leftStack = [];
    let rightStack = [];

    line.split("").map((v) => {
      if (v === "<") {
        // 왼쪽으로 한칸 커서 이동 시 (= 오른쪽 스택에 왼쪽 상단 값 빼서 옮기기)
        leftStack.length == 0 || rightStack.push(leftStack.pop());
      } else if (v === ">") {
        // 오른쪽으로 한칸 커서 이동 시 (= 왼쪽 스택에 오른쪽 상단 값 빼서 옮기기)
        rightStack.length == 0 || leftStack.push(rightStack.pop());
      } else if (v === "-") {
        // 현재 커서에서 하나 지우기
        leftStack.length == 0 || leftStack.pop();
      } else {
        // 그 외 모든 문자
        leftStack.push(v);
      }
    });
    answer.push(leftStack.join("") + rightStack.reverse().join(""));
  });
  return answer.join("\n");
};

console.log(solution(+T, testcases));
