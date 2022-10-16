"use strict";

let input = require("fs").readFileSync("/dev/stdin").toString().trim();
const n = input.length;
let arr = [];

for (let i = 1; i <= n; i++) {
  for (let j = 0; j < n; j++) {
    if (j + i <= n) {
      arr.push(input.slice(j, j + i));
    }
  }
}

let answer = new Set(arr);
console.log(answer.size);
