"use strict";

let [n, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

function solution(n, input) {
  let answer = "";
  const numbers = input.map(Number).sort((a, b) => a - b);

  // 1. 산술평균
  answer += `${Math.round(numbers.reduce((a, b) => a + b, 0) / n)}\n`;

  // 2. 중앙값
  answer += `${numbers[Math.floor(n / 2)]}\n`;

  // 3. 최빈값
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

  // 4. 범위
  answer += `${numbers[n - 1] - numbers[0]}\n`;

  return answer;
}

console.log(solution(n, input));
