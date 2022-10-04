"use strict";

let [n, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let members = input.map((member) => {
  let [age, name] = member.split(" ");
  return [+age, name];
});

members.sort((a, b) => {
  if (a[0] === b[0]) return a[1] - b[1];
  return a[0] - b[0];
});

let answer = "";
for (let x of members) {
  answer += x[0] + " " + x[1] + "\n";
}

console.log(answer);
