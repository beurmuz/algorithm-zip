"use strict";

// sort와 for문으로 비교하는 방법
function solution(str1, str2) {
  let answer = "YES";
  let s1 = str1.split("").sort();
  let s2 = str2.split("").sort();

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      answer = "NO";
      break;
    }
  }
  return answer;
}

let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));
