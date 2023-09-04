"use strict";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let arr = new Array(n);
for (let i = 0; i < n; i++) {
  let [a, b] = input[i + 1].split(" ").map(Number);
  arr[i] = [a, b];
}
arr.sort((a, b) => a[0] - b[0]);

let ans = 0;
ans += arr[0][1] - arr[0][0];
let cur = arr[0][1];
for (let i = 1; i < n; i++) {
  if (arr[i][0] <= cur && arr[i][1] > cur) {
    ans += arr[i][1] - cur;
    cur = arr[i][1];
  }
  if (arr[i][0] > cur) {
    ans += arr[i][1] - arr[i][0];
    cur = arr[i][1];
  }
}
console.log(ans);
