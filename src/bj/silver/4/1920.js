"use strict";

/**
 * [이분탐색 문제]
 * - 정렬 문제는 이분탐색으로 풀면 빠르다.
 * - 단, 이분탐색으로 풀기 위해서는 반드시 이분탐색하는 배열을 미리 '정렬'해야한다.
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (inputs) => {
  const n = +inputs[0];
  const nSet = inputs[1]
    .split(" ")
    .map((v) => +v)
    .sort((a, b) => a - b);
  const m = +inputs[2];
  const arr = inputs[3].split(" ").map((v) => +v);

  const answer = arr.map((num) => {
    let [lt, rt] = [0, nSet.length - 1];
    let result = 0;

    while (lt <= rt) {
      let mid = parseInt((lt + rt) / 2);
      if (num === nSet[mid]) {
        result = 1;
        break;
      }
      if (num < nSet[mid]) rt = mid - 1;
      else if (num > nSet[mid]) lt = mid + 1;
    }
    return result;
  });
  return answer.join("\n");
};

console.log(solution(inputs));
