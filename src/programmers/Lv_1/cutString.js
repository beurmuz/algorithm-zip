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

/**
 * 2. 다른 풀이 (100.0 / 100.0)
 * slice를 이용하지 않고 문자열을 공백으로 만드는 방법 이용해보기
 * 굳이 중첩 반복문을 사용하지 않아도 되는 문제였다.
 */

function solution(s) {
  let answer = 0;
  let fixedChar = "";
  let xCount = 0;
  let xNotCount = 0;

  // 문자를 for of 문으로 하나씩 확인한다.
  for (let c of s) {
    // 첫 문자는 x, 만약 fixedChar가 공백이면 첫 문자를 넣어준다.
    if (!fixedChar) fixedChar = c;

    // 첫 문자와 들어온 c가 같다면 cnt1를 증가시키고, 다르면 cnt2를 증가시킨다.
    if (fixedChar === c) xCount++;
    else xNotCount++;

    // xCount와 xNotCount가 같으면 answer를 1 증가시키고, 나머지를 초기화한다.
    if (xCount === xNotCount) {
      answer++;
      xCount = 0;
      xNotCount = 0;
      fixedChar = "";
    }
  }

  // 반복문 종료 후 남은 문자가 있다면 answer를 1 증가시킨다.
  if (fixedChar) answer++;
  return answer;
}

console.log(solution("banana")); // 3
console.log(solution("abracadabra")); // 6
console.log(solution("aaabbaccccabba")); // 3
