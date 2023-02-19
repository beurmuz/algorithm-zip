"use strict";

/**
 * 메모리 초과!
 * 찾아보니 node.js로는 풀 수 없는 문제라고 한다.
 */
const [e, s, m] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const solution = (e, s, m) => {
  let count = 1;
  while (true) {
    if (
      (count - e) % 15 === 0 &&
      (count - s) % 28 === 0 &&
      (count - m) % 19 === 0
    ) {
      console.log(count);
      return;
    }
    count++;
  }
};

solution(e, s, m);
