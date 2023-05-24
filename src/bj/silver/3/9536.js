"use strict";

/**
 * [문자열, 파싱 문제]
 * - testcase for문을 제외하면 시간복잡도는 O(n)이다.
 */
const [T, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (T, input) => {
  let answer = [];
  let index = 0;

  for (let t = 0; t < T; t++) {
    let recordSentence = input[index++].split(" ");
    let animals = [];
    for (let i = index; i < input.length; i++) {
      if (input[i] === "what does the fox say?") {
        index = ++i;
        break;
      }
      animals.push(input[i].split(" ")[2]);
    }

    let result = [];
    for (let i = 0; i < recordSentence.length; i++) {
      if (animals.indexOf(recordSentence[i]) < 0)
        result.push(recordSentence[i]);
    }
    answer.push(result.join(" "));
  }

  return answer.join("\n");
};

console.log(solution(+T, input));
