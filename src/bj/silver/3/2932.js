"use strict";

/**
 * 우와 어렵다
 * https://www.acmicpc.net/problem/2932
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (inputs) => {
  let [n, k] = inputs[0].split(" ").map((v) => +v);
  const board = Array.from({ length: n }, () => Array(n).fill(0));
  let data = [];
  let num = 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      board[i][j] = num;
      num++;
    }
  }

  const move_target = (rcn, t, n) => {
    let moved = 0;
    if (rcn < t) moved += t - rcn;
    else if (rcn > t) {
      moved += n - rcn;
      moved += t;
    }
    return moved;
  };

  const turnTable = (d) => {
    let [x, rn, cn, rt, ct] = data[d];
    let mr = move_target(rn, rt, n);
    let mc = move_target(cn, ct, n);
    turn = turn + mc + mr;

    for (let i = d + 1; i < k; i++) {
      if (data[i][0] == x) {
        data[i][1] = rt;
        data[i][2] = ct;
      } else {
        if (data[i][1] === rn) {
          data[i][2] += mc;
          if (data[i][2] >= n) {
            data[i][2] = data[i][2] % n;
          }
        }
        if (data[i][2] === ct) {
          data[i][2] += mr;
          if (data[i][1] >= n) {
            data[i][1] = data[i][1] % n;
          }
        }
      }
    }
  };

  let turn = 0;
  for (let d = 0; d < k; d++) {
    let [x, r, c] = inputs[d + 1].split(" ").map((v) => +v);
    data.push([x, Math.floor((x - 1) / n), (x - 1) % n, r - 1, c - 1]);
    turnTable(d);
    console.log(turn);
  }
};

solution(inputs);
