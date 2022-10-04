"use strict";

let [N, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);
let answer = input.sort((a, b) => a - b).join("\n");
console.log(answer);
