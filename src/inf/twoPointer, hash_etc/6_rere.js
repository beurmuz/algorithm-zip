"use strict";

function solution(s) {
  let answer = "";
  let max = 0;
  let hashMap = new Map();

  for (let x of s) {
    if (hashMap.has(x)) hashMap.set(x, hashMap.get(x) + 1);
    else hashMap.set(x, 1);
  }

  for (let [key, value] of hashMap) {
    if (value > max) {
      answer = key;
      max = value;
    }
  }
  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
