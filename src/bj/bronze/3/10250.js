"use strict";

/**
 * 수학 공식을 세워서 풀면 된다.
 *
 * N%H가 0이 아닐 때: 층수는 N%H, 호수는 Math.floor(N/H)에 +1이다.
 * N%H가 0일 때: 층수는 H, 호수는 N/H이다.
 */
let inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let t = inputs.shift();

function solution(t, inputs) {
  for (let i = 0; i < t; i++) {
    const [H, W, N] = inputs[i].split(" ");
    let floor = -1;
    let room = -1;
    if (N % H === 0) {
      // N%H가 0이면, floor는 H와 같다.
      floor = H;
      room = N / H;
    } else if (N % H !== 0) {
      floor = N % H;
      room = Math.floor(N / H) + 1;
    }
    if (room < 10) {
      room = `0${room}`;
    }
    console.log(`${floor}${room}`);
  }
}

solution(+t, inputs);
