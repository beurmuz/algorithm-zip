"use strict";

/**
 *
 */

const [input, ...jewel] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (input, jewel) => {
  let [W, N] = input.split(" ").map((v) => +v);
  jewel = jewel
    .map((line) => line.split(" ").map((v) => +v))
    .sort((a, b) => b[1] - a[1]);
  let total = 0;

  for (let i = 0; i < jewel.length; i++) {
    if (W > jewel[i][0]) {
      total += jewel[i][0] * jewel[i][1]; // 보석의 무게 * 가격
      W -= jewel[i][0];
    } else {
      total += W * jewel[i][1]; // 남은 W만큼 보석을 잘라낸 무게 * 가격
      break;
    }
  }
  return total;
};

console.log(solution(input, jewel));
