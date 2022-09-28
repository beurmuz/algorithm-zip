"use strict";

// 처음에 푼 풀이 => 뭐가 문제인지 자꾸 틀린다고 한다.
let [n, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

// 산술평균
let average = Math.round(input.reduce((pre, current) => pre + current, 0) / n);
console.log(average);

// 중앙값
input.sort((a, b) => a - b);
let median = input[Math.floor(input.length / 2)];
console.log(median);

// 최빈값
let countMap = new Map();
let max = 1;
for (let x of input) {
  if (!countMap.has(x)) countMap.set(x, 1);
  else {
    max = Math.max(max, countMap.get(x) + 1);
    countMap.set(x, countMap.get(x) + 1);
  }
}
const maxArr = [];
for (let [key, value] of countMap) {
  if (value === max) maxArr.push(key);
}
let mode = maxArr.length === 1 ? maxArr[0] : maxArr[1];
console.log(mode);

// 범위
let range = input[n - 1] - input[0];
console.log(range);

// 문자열 형태로 바꿔줬는데 맞다고 나왔다
let [n, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);
let answer = "";
const numbers = input.map(Number).sort((a, b) => a - b);

// 산술평균
answer += `${Math.round(numbers.reduce((a, b) => a + b, 0) / n)}\n`;

// 중앙값
answer += `${numbers[Math.floor(n / 2)]}\n`;

// 최빈값
const map = new Map();
let max = 1;
for (let number of numbers) {
  if (map.has(number)) {
    max = Math.max(max, map.get(number) + 1);
    map.set(number, map.get(number) + 1);
  } else map.set(number, 1);
}
const maxArr = [];
for (let [key, val] of map) {
  if (val === max) maxArr.push(key);
}

answer += maxArr.length === 1 ? `${maxArr[0]}\n` : `${maxArr[1]}\n`;

// 범위
answer += `${numbers[n - 1] - numbers[0]}\n`;

console.log(answer);
