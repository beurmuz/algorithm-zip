"use strict";

function solution(str, char, change) {
  let answer = "";
  str.split("").map((v) => {
    if (v === char) answer += change;
    else answer += v;
  });
  return answer;
}

let str = "BANANA";
console.log(solution(str, "A", "#"));
