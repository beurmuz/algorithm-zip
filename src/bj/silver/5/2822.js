"use strict";

const scores = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const solution = (scores) => {
  let answerList = [];
  for (let i = 0; i < scores.length; i++) {
    answerList.push([scores[i], i + 1]);
  }
  answerList.sort((a, b) => b[0] - a[0]);

  let sum = 0;
  let answers = [];

  for (let i = 0; i < 5; i++) {
    sum += answerList[i][0];
    answers.push(answerList[i][1]);
  }
  console.log(sum);
  console.log(answers.sort((a, b) => a - b).join(" "));
};

solution(scores);
