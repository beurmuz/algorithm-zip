"use strict";

/**
 * 1. 정규식 + exec()를 이용한 풀이
 * 정규식 코드를 어떻게 짰는지 잘 기억이 안나서 해설을 봤다.
 * exec()는 정규식 패턴에 맞는 문자열 탐색을 수행하는 메서드이다.
 */
function solution(babbling) {
  const r1 = /(aya|ye|woo|ma)\1/;
  const r2 = /^(aya|ye|woo|ma)+$/;
  let answer = 0;
  for (const b of babbling) {
    const m1 = r1.exec(b);
    if (m1) continue;
    const m2 = r2.exec(b);
    if (!m2) continue;
    answer++;
  }
  return answer;
}

/**
 * 2. 더 짧은 코드
 * 똑같이 정규식으로 풀었고, reduce를 이용해서 answer를 구했다.
 */
function solution(babbling) {
  const regexp1 = /(aya|ye|woo|ma)\1+/;
  const regexp2 = /^(aya|ye|woo|ma)+$/;

  return babbling.reduce(
    (ans, word) => (!regexp1.test(word) && regexp2.test(word) ? ++ans : ans),
    0
  );
}
