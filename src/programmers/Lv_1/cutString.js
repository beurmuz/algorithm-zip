"use strict";

/**
 * 1. 처음에 푼 풀이 (정확성 88.1/100)
 * 중첩 반복문과 slice를 이용한 풀이
 */

function solution(s) {
  let answer = [];

  for (let i = 0; i < s.length; i++) {
    let xCount = 1; // x값의 개수를 count할 변수
    let xNotCount = 0; // x가 아닌 값의 개수를 count할 변수
    for (let j = i + 1; j < s.length; j++) {
      if (s[j] === s[i]) xCount++;
      else xNotCount++;
      if (xCount === xNotCount) {
        answer.push(s.slice(i, j + 1)); // 자른 문자열을 stack에 넣는다.
        i = j + 1; // i값을 새롭게 갱신한다.
        continue; // count값이 같은 지점을 찾으면, 남은 반복문은 검사할 필요가 없으므로 건너뛴다.
      }
    }
  }
  // 만약 남은 s가 있다면, answer에 push해준다.
  if (answer.join("").length !== s.length)
    answer.push(s.slice(answer.join("").length, s.length + 1));
  return answer.length;
}
