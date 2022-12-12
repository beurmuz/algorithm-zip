"use strict";

function solution(s) {
  let answer = [];
  for (let i = 0; i < s.length; i++) {
    let count = 1;
    for (let j = i - 1; j >= 0; j--) {
      if (s[i] === s[j]) {
        answer.push(count);
        break;
      }
      count++;
    }
    if (count === i + 1) answer.push(-1);
  }
  return answer;
}
