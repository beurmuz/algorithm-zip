"use strict";

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

console.log(
  input
    .split("")
    .sort((a, b) => b - a)
    .join("")
);
