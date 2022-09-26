"use strict";

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let n = input.shift() * 1;
let arr = ("" + input)
  .split(" ")
  .map((v) => +v)
  .sort((a, b) => a - b);
console.log(`${arr[0]} ${arr[arr.length - 1]}`);
