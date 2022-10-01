"use strict";

const input = +require("fs").readFileSync("./dev/stdin").toString().trim();
let answer = 0;
let num = 1;
let d = 10;
let s = 1;

while (num <= input) {
  if (Math.floor(num / d) == 0) {
    num++;
    answer += s;
  } else {
    d *= 10;
    s++;
  }
}

console.log(answer);
