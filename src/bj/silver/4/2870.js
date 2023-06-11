"use strict";

const [N, ...word] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (N, word) => {
  const answer = [];

  word.forEach((line) => {
    line.split(/[a-z]+/).forEach((num) => {
      // 알파벳은 제외하고 숫자만 남긴다.
      if (num === "") return;
      answer.push(BigInt(num));
    });
  });
  return answer.sort((a, b) => (a > b ? 1 : -1)).join("\n"); // BigInt 형태의 값을 넣어줬기에 a-b로 풀리지 않는다.
};

console.log(solution(+N, word));
