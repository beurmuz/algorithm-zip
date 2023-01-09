"use strict";

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const solution = (input) => {
  const numbers = input.split("-").map((str) => {
    let plusSplit = str.split("+");
    if (plusSplit.length === 1) return +plusSplit;
    else {
      let sum = 0;
      for (let x of plusSplit) {
        sum += +x;
      }
      return sum;
    }
  });
  let answer = numbers.shift();
  for (let x of numbers) {
    answer -= x;
  }
  return answer;
};
console.log(solution(input));
