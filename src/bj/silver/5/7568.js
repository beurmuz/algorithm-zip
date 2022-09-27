"use strict";

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let n = input.shift() * 1;

let list = input.map((v) => {
  let [weight, height] = v.split(" ");
  return [+weight, +height];
});

let rank = [];
for (let i = 0; i < n; i++) {
  let count = 1;
  for (let j = 0; j < n; j++) {
    if (i === j) continue;
    if (list[i][0] < list[j][0] && list[i][1] < list[j][1]) count++;
  }
  rank.push(count);
}

console.log(...rank);
