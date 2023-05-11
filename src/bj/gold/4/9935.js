"use strict";

/**
 * 처음에는 pung에 따라 split하고, join하고.. 이 과정을 반복해서 풀려고 했으나, 이렇게 풀면 메모리 초과가 발생한다.
 */
const [string, pung] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (str, pung) => {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let flag = true;
    console.log(`i: ${i}, str[i]: ${str[i]},  stack: ${stack}`);
    if (str[i] === pung[pung.length - 1]) {
      // string의 현재 문자가 pung의 마지막 문자와 같다면
      for (let j = 0; j < pung.length - 1; j++) {
        if (stack[stack.length - 1 + j] === pung[pung.length - 2 + j]) {
          // stack에는 아직 pung의 마지막 문자와 일치하는 문자를 넣지 않았기에, 둘다 마지막 문자를 제외한 그 바로 앞부터 비교해야한다.
          continue;
        }
        flag = false; // index[0] 전에 같지 않은 index가 나오면 flag를 true로 바꾸고 멈춘다.
        break;
      }
      if (!flag) {
        // 현재 스택과 pung을 비교했을 때 pung이 포함되어 있지 않은 경우이므로 해당 문자를 stack에 push한다.
        stack.push(str[i]);
      } else {
        for (let k = 0; k < pung.length - 1; k++) {
          stack.pop(); // 현재 스택에 pung이 포함되어 있으므로 pung의 길이 -1 만큼 pop을 한다.
        }
      }
    } else {
      // 끝 문자가 같지 않다면 stack에 넣는다.
      stack.push(str[i]);
    }
  }
  return stack.join("").length === 0 ? "FRULA" : stack.join("");
};

console.log(solution(string, pung));
