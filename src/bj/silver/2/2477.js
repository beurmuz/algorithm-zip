"use strict";

const [k, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((vv) => +vv));

const solution = (k, input) => {
  let [maxH, maxW, maxHIdx, maxWIdx] = [0, 0, -1, -1];
  for (let i = 0; i < input.length; i++) {
    if (input[i][0] === 1 || input[i][0] === 2) {
      // 동 or 서 => 가로
      if (maxH < input[i][1]) {
        maxH = input[i][1];
        maxHIdx = i;
      }
    } else {
      if (maxW < input[i][1]) {
        // 남 or 북 => 세로
        maxW = input[i][1];
        maxWIdx = i;
      }
    }
  }
  let total = maxH * maxW;
  let part = input[(maxHIdx + 3) % 6][1] * input[(maxWIdx + 3) % 6][1]; // max와 min이 같은 index에서 나올리가 없다. 예를들어 동쪽이 max면 서쪽에서 min값이 나온다.
  let answer = (total - part) * k;
  return answer;
};

console.log(solution(+k, input));
