"use strict";

/**
 * [구현/정렬 문제]
 */
const [k, ...classes] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (k, classes) => {
  let answer = [];
  classes.forEach((line, index) => {
    let [N, ...newLine] = line.split(" ").map((v) => +v);
    newLine = newLine.sort((a, b) => b - a);

    let gap = [];
    for (let i = 0; i < N - 1; i++) {
      gap.push(newLine[i] - newLine[i + 1]);
    }
    answer.push(`Class ${++index}`);
    answer.push(
      `Max ${newLine[0]}, Min ${newLine[N - 1]}, Largest gap ${Math.max(
        ...gap
      )}`
    );
  });
  return answer.join("\n");
};

console.log(solution(k, classes));
