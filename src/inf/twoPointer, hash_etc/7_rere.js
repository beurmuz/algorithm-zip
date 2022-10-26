"use strict";

function solution(str1, str2) {
  let answer = "YES";

  // 방법1) sort와 for문으로 비교하는 방법
  //   let s1 = str1.split("").sort();
  //   let s2 = str2.split("").sort();

  //   for (let i = 0; i < s1.length; i++) {
  //     if (s1[i] !== s2[i]) {
  //       answer = "NO";
  //       break;
  //     }
  //   }

  // 방법2) Map 사용하기
  let hashMap1 = new Map();

  for (let i = 0; i < str1.length; i++) {
    if (hashMap1.has(str1[i])) hashMap1.set(str1[i], hashMap1.get(str1[i]));
    else hashMap1.set(str1[i], 1);
  }

  for (let key of str2) {
    if (!hashMap1.has(key) || hashMap1.get(key) === 0) {
      answer = "NO";
      break;
    } else {
      hashMap1.set(key, hashMap1.get(key) - 1);
    }
  }

  return answer;
}

let a = "abaCC";
let b = "Caaab";
console.log(solution(a, b));
