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
  let chkAscending = 0;
  let chkDescending = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) chkAscending += 1;
    if (arr[i] > arr[i + 1]) chkDescending += 1;
  }
  if (chkAscending === 7) {
    return "ascending";
  } else if (chkDescending === 7) {
    return "descending";
  } else {
    return "mixed";
  }
};

console.log(solution(arr));
