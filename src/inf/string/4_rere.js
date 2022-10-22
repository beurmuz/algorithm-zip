"use strict";

function solution(str) {
  let [s, e] = str.split(" ");
  let answer = [];

  for (let i = 0; i < s.length; i++) {
    let lt = 0;
    let rt = 0;
    if (s[i] === e) answer.push(0);
    else {
      // 현재 문자열 기준 오른쪽 방향으로 검사
      for (let j = i; j < s.length; j++) {
        if (s[j] === e) break;
        rt++;
      }

      // 현재 문자열 기준 왼쪽 방향으로 검사
      for (let j = i; j >= 0; j--) {
        if (s[j] === e) break;
        lt++;
      }
      //   console.log(`lt: ${lt}, rt: ${rt}`);
      answer.push(Math.min(lt, rt));
    }
  }
  return answer;
}

let str = "teachermode e";
console.log(solution(str));
