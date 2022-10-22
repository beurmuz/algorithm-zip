"use strict";

function solution(s) {
  let answer = "";
  let hashMap = new Map();
  for (let i = 0; i < s.length; i++) {
    if (hashMap.has(s[i])) {
      hashMap.set(s[i], hashMap.get(s[i]) + 1);
    } else {
      hashMap.set(s[i], 1);
    }
  }

  for (let [key, value] of hashMap) {
    if (value > 1) {
      answer += `${key}${value}`;
    } else {
      answer += key;
    }
  }
  return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
