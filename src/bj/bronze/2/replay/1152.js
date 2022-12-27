"use strict";

/**
 * 중요한 건 항상 예외처리 해주기!
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");
console.log(inputs[0] === "" ? 0 : inputs.length);
