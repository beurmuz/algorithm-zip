"use strict";

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const n = input.shift();

for (let i = 0; i < input.length; i++) {
  let str = input[i];
  let stack = [];
  let result = "YES";

  for (let j = 0; j < str.length; j++) {
    if (str[j] === "(") {
      stack.push(1);
    } else {
      if (!stack.pop()) {
        result = "NO";
        break;
      }
    }
  }
  if (stack.length !== 0) result = "NO";
  console.log(result);
}
