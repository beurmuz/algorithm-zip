/**
 * [구현]
 * - 단순 구현
 */

const arr = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

const solution = (arr) => {
  let upCnt = 0;
  let downCnt = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) upCnt++;
    else if (arr[i] > arr[i + 1]) downCnt++;
  }

  if (upCnt === 7) return "ascending";
  else if (downCnt === 7) return "descending";
  else return "mixed";
};

console.log(solution(arr));
