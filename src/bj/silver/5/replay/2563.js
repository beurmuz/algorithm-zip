"use strict";

const [n, ...data] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (n, data) => {
  let colorpaper = Array.from({ length: 100 }, () => Array(100).fill(0));

  for (let k = 0; k < n; k++) {
    const [x, y] = data[k].split(" ").map(Number);

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        colorpaper[x + i][y + j] = 1;
      }
    }
  }
  const answer = colorpaper.reduce((prev, curr) => {
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
