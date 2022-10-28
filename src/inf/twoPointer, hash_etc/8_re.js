"use strict";

function compareHash(map1, map2) {
  if (map1.size !== map2.size) return false;

  for (let [key, value] of map1) {
    // key가 없거나 그 key의 value값이 다르면
    if (!map2.has(key) || map2.get(key) !== value) return false;
  }
  return true;
}

function solution(s, t) {
  let answer = 0;
  let tH = new Map();
  let sH = new Map();
  z;
  for (let key of t) {
    if (tH.has(key)) tH.set(key, tH.get(key) + 1);
    else tH.set(key, 1);
  }
  console.log(tH);

  let length = t.length - 1;
  for (let i = 0; i < length; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
  }

  let lt = 0;
  for (let rt = length; rt < s.length; rt++) {
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);

    // 비교
    if (compareHash(sH, tH)) answer++;

    // lt삭제
    sH.set(s[lt], sH.get(s[lt]) - 1);
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);

    // lt를 1 증가시켜 rt를 쫓아가야 함
    lt++;
  }
  return answer;
}

let s = "bacaAacba";
let t = "abc";

console.log(solution(s, t));

/*
    1. t에 대한 hashmap 구하기
    2. s에 대한 hashmap 구하기
     - 0-1에 대한 두자리 구한 후, 2에 대한 한자리 구하기
    3. t와 s hashmap 비교하는 함수 생성
    4. 투 포인터 위치 옮기기
*/
