"use strict";

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (input) => {
  const find = input.shift();
  const n = input.shift();
  let answer = 0;

  input.forEach((word) => {
    let newWord = word + word; // 처음과 끝이 연결됨을 고려해야하므로 word+word를 통해 처음과 끝을 연결해준다.
    if (newWord.split(find).length > 1) answer++;
  });
  return answer;
};

console.log(solution(input));
