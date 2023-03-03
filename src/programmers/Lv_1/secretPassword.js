"use strict";

function solution(s, skip, index) {
  let answer = "";

  // 1. filter를 이용해서 skip에 포함된 단어를 제외한 a-z 알파벳 배열을 생성한다.
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .filter((alpha) => !skip.includes(alpha));

  // ⭐ 1. 정규식으로 a-z 알파벳 중 skip을 제외한 단어의 배열을 추출하는 방법도 있다.
  // const regexp = new RegExp(`[^${skip}]`, 'g');
  // const alphabet = 'abcdefghijklmnoprstuvwxyz'.match(regexp);

  // 2. s를 순회하면서 정답을 찾는다.
  for (const c of s) {
    const newIndex = alphabet.indexOf(c) + index;
    answer += alphabet[newIndex % alphabet.length];
  }
  return answer;
}
