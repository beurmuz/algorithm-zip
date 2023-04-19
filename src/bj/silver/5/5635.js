"use strict";

const [n, ...people] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (n, people) => {
  const peopleArr = [];
  for (let i = 0; i < n; i++) {
    let [name, day, month, year] = people[i].split(" ");
    peopleArr.push([name, +year, +month, +day]);
  }

  peopleArr.sort((a, b) => {
    if (a[1] === b[1]) {
      if (a[2] === b[2]) {
        return a[3] - b[3];
      } else return a[2] - b[2];
    }
    return a[1] - b[1];
  });
  const answer = [peopleArr[n - 1][0], peopleArr[0][0]];

  return answer.join("\n");
};

console.log(solution(+n, people));
