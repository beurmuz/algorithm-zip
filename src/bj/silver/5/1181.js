"use strict";

// 1. str1.localeCompare(str2) 이용하기
/*
    - input.sort((a, b) => a.length - b.length || a - b) <= 이렇게 작성하면 사전순 정렬이 되지 않는다. 
    - a.localeCompare(b)는 기존 문자열과 비교했을 때 비교 대상 문자열이 정렬상 전에 오는지, 후에 오는지 혹은 같은 순서에 배치되는지를 알려주는 숫자를 리턴하는 메서드이다.
    - b전에 a가 오면 -1을, a 다음에 b가 오면 +1을, 같으면 0을 반환
*/
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const n = input.shift();
const sortArr = input.sort((a, b) => a.length - b.length || a.localeCompare(b));
const answer = new Set(sortArr);
console.log(Array.from(answer).join("\n"));

// 2. 위의 풀이와 같지만 다른 풀이
/*
    🚨 정답 출력 시 반복문을 이용하면 정말 많은 시간이 걸리므로 join('\n')을 이용하자 !! 
*/
console.log(
  [...new Set(input)]
    .sort((a, b) => a.length - b.length || a.localeCompare(b))
    .join("\n")
);
