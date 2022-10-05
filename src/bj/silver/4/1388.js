"use strict";

let [size, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [r, c] = size.split(" ").map((v) => +v);
const room = input.map((v) => {
  return v.split("");
});

function solution(r, c, room) {
  let answer = 0;

  // 가로
  for (let i = 0; i < r; i++) {
    let flag = true; // col
    for (let j = 0; j < c; j++) {
      if (flag === true && room[i][j] === "-") {
        answer++;
        flag = false; // row
      } else if (room[i][j] === "|") {
        flag = true; // col
      }
    }
  }

  // 세로
  for (let i = 0; i < c; i++) {
    let flag = true; // col
    for (let j = 0; j < r; j++) {
      if (flag === true && room[j][i] === "|") {
        answer++;
        flag = false;
      } else if (room[j][i] === "-") {
        flag = true;
      }
    }
  }

  console.log(answer);
}

solution(r, c, room);
