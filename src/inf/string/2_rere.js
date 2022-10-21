"use strict";

function solution(s) {
  s = s.toLowerCase().replace(/[^a-z]/g, "");
  let answer = "NO";
  let tmp = s.split("").reverse().join("");
  if (s === tmp) answer = "YES";
  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
