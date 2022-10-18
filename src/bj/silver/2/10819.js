"use strict";

const [N, ...nums] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split(/\s+/)
  .map((v) => +v);

let max = 0;
function diffMax(arr, visited) {
  if (arr.length == N) {
    let sum = 0;

    for (let i = 0; i < N - 1; i++) {
      sum += Math.abs(arr[i] - arr[i + 1]);
    }
    if (sum > max) max = sum;
    return;
  } else {
    for (let i = 0; i < N; i++) {
      if (!(visited & (1 << i))) {
        arr.push(nums[i]);
        diffMax(arr, visited | (1 << i));
        arr.pop();
      }
    }
  }
}

diffMax([], 0);
console.log(max);
