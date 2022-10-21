"use strict";

function solution(s) {
  let answer = "NO";
  s = s.toLowerCase();
  let tmp = s;
  if (tmp.split("").reverse().join("") === s) answer = "YES";
  return answer;
}

let str = "gooG";
console.log(solution(str));
