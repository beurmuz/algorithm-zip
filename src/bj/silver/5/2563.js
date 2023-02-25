"use strict";

const [n, ...data] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (n, data) => {
  let paper = new Array(100).fill().map((el) => new Array(100).fill(false));

  for (let i = 0; i < n; i++) {
    const [x, y] = data[i].split(" ").map(Number);

    for (let j = 0; j < 10; j++) {
      for (let m = 0; m < 10; m++) {
        paper[x + j][y + m] = true;
      }
    }
  }

  const answer = paper.reduce((prev, curr) => {
    for (const el of curr) {
      if (el) {
        prev++;
      }
    }

    return prev;
  }, 0);

  return answer;
};

console.log(solution(+n, data));
