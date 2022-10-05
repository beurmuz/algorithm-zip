"use strict";

let s = require("fs").readFileSync("/dev/stdin").toString().trim();
let sList = [];

for (let i = 0; i < s.length; i++) {
  let sCut = s.slice(i);
  sList.push(sCut);
}

sList.sort();

console.log(sList.join("\n"));
