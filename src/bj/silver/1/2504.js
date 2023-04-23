"use strict";

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("");

const checkPossible = (string) => {
  const stack = [];
  for (let i = 0; i < string.length; i++) {
    let top = stack[stack.length - 1];
    const now = string[i];

    if (now === "]" && top === "[") stack.pop();
    else if (now === ")" && top === "(") stack.pop();
    else stack.push(now);
  }
  return stack.length ? false : true;
};

const solution = (input) => {
  const stack = [];

  if (!checkPossible(input)) {
    return 0;
  }

  for (let i = 0; i < input.length; i++) {
    let top = stack[stack.length - 1];
    const now = input[i];

    if (now === "(" || now === "[") stack.push(now);
    else if (now === ")" || now === "]") {
      const reverse = now === ")" ? "(" : "[";
      const point = reverse === "(" ? 2 : 3;

      if (top === reverse) {
        stack.pop();
        stack.push(point);
      } else {
        let tmp = 0;
        while (1) {
          const pop = stack.pop();
          if (typeof pop === "number") tmp += pop;
          else if (pop === reverse) {
            stack.push(tmp * point);
            break;
          }
        }
      }
    }
  }
  return stack.reduce((acc, cur) => acc + cur);
};

console.log(solution(input));
