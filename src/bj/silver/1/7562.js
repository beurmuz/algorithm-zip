"use strict";

const [T, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (T, input) => {
  let inIdx = 0;
  const dx = [-2, -1, 1, 2, 2, 1, 1, 2];
  const dy = [1, 2, 2, 1, -1, -2, -1, -1];

  for (let i = 0; i < T; i++) {
    let l = +input[inIdx];
    const board = Array.from({ length: l }, () => Array(l).fill(0));

    let [nowX, nowY] = input[inIdx + 1].split(" ").map((v) => +v);
    let [moveX, moveY] = input[inIdx + 2].split(" ").map((v) => +v);

    const bfs = (L) => {
      let queue = [[nowX, nowY]];
      while (queue.length) {
        let len = queue.length;
        for (let i = 0; i, len; i++) {
          let v = queue.shift();
          if (v[0] === moveX && v[1] === moveY) return L;
        }
      }
    };
    bfs(0);

    inIdx += 3;
  }
};

console.log(solution(+T, input));
