"use strict";

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const n = +input[0];
const numberList = input[1].split(" ");
const m = +input[2];
const findList = input[3].split(" ");
let numberMap = new Map();
let answer = [];

for (let i = 0; i < n; i++) {
  if (!numberMap.has(numberList[i])) numberMap.set(numberList[i], 1);
  else numberMap.set(numberList[i], numberMap.get(numberList[i]) + 1);
}

for (let i = 0; i < m; i++) {
  if (numberMap.has(findList[i])) answer.push(numberMap.get(findList[i]));
  else answer.push(0);
}

console.log(...answer);
