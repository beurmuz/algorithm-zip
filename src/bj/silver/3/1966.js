"use strict";

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let n = input.shift();

for (let i = 0; i < input.length; i += 2) {
  // 테스트케이스 받아오기
  let [listNum, m] = input[i].split(" ").map((v) => +v);
  let queue = input[i + 1].split(" ").map((v) => +v);
  let count = 1;

  while (true) {
    const front = queue.shift();
    if (front >= Math.max(...queue) && m === 0) {
      console.log(count);
      break;
    } else if (front < Math.max(...queue) && m === 0) {
      queue.push(front);
      m = queue.length - 1;
    } else if (front < Math.max(...queue)) {
      queue.push(front);
      m -= 1;
    } else if (front >= Math.max(...queue)) {
      count += 1;
      m -= 1;
    }
  }
}
