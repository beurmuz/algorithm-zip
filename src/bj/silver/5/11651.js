"use strict";

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let N = +input.shift();
let coordinates = [];
for (let i = 0; i < N; i++) {
  coordinates.push(
    input[i]
      .trim()
      .split(" ")
      .map((x) => +x)
  );
}
let answer = "";

coordinates.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
});

coordinates.forEach((e) => {
  answer += e[0] + " " + e[1] + "\n";
});
console.log(answer);
