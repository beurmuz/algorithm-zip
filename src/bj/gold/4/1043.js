"use strict";

const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (inputs) => {
  const [n, m] = inputs[0].split(" ").map((v) => +v);
  const [knowNums, ...knowArr] = inputs[1].split(" ").map((v) => +v);

  // knowNums가 0이면 파티수를 return한다.
  if (knowNums === 0) return m;

  // knowNums가 1이상인 경우
  let sayTrue = Array.from({ length: n + 1 }, () => false);
  let disJoint = Array.from({ length: n + 1 }, (_, index) => index++);
  let parties = [];

  knowArr.forEach((index) => (sayTrue[index] = true));
  console.log(sayTrue);

  for (let i = 2; i < inputs.length; i++) {
    let [attendNums, ...attendArr] = inputs[i].split(" ").map((v) => +v);
    console.log(attendNums, attendArr);
  }
};

console.log(solution(inputs));
