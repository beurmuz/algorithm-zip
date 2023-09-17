"use strict";

/**
 * [문자열, 해시 문제]
 * - 입력값의 크기 최대 10^6까지이므로 O(n) 이하로 풀어야한다.
 */

const [input, ...names] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (input, names) => {
  let [N, gameSort] = input.split(" ");
  N = +N;

  let playerNum;
  if (gameSort === "Y") playerNum = 2 - 1;
  else if (gameSort === "F") playerNum = 3 - 1;
  else if (gameSort === "O") playerNum = 4 - 1;

  let namesSet = new Set(names);
  return Math.floor(namesSet.size / playerNum);
};

console.log(solution(input, names));
