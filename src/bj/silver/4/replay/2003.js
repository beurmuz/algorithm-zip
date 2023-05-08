"use strict";

const [n, m, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map((v) => +v);

const solution = (n, m, arr) => {
  let answer = 0;

  for (let i = 0; i < n; i++) {
    let sum = arr[i];
    let index = i;
    while (sum < m && index < n - 1) {
      index++;
      sum += arr[index];
    }
    if (sum === m) answer++;
  }
  return answer;
};

console.log(solution(n, m, arr));
