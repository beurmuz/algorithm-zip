"use strict";

function compareHash(map1, map2) {
  if (map1.size !== map2.size) return false;

  for (let [key, value] of map1) {
    if (!map2.has(key) || map2.get(key) !== value) return false;
  }
  return true;
}

function solution(s, t) {
  let answer = 0;
  let tHash = new Map();
  let sHash = new Map();

  // tHash 생성
  for (let key of t) {
    if (tHash.has(key)) tHash.set(key, tHash.get(key) + 1);
    else tHash.set(key, 1);
  }

  // t.length -1 만큼의 sHash 만들어놓기
  let length = t.length - 1;
  for (let i = 0; i < length; i++) {
    if (sHash.has(s[i])) sHash.set(s[i], sHash.get(s[i]) + 1);
    else sHash.set(s[i], 1);
  }

  // t.length 부터 하나 넣고 빼고 시작!
  let lt = 0;
  for (let rt = length; rt < s.length; rt++) {
    if (sHash.has(s[rt])) sHash.set(s[rt], sHash.get(s[rt]) + 1);
    else sHash.set(s[rt], 1);

    // 추가와 동시에 sHash와 tHash가 같은지 비교하기
    if (compareHash(sHash, tHash)) answer++;

    // lt삭제
    sHash.set(s[lt], sHash.get(s[lt]) - 1); // 하나를 빼고
    if (sHash.get(s[lt]) === 0) sHash.delete(s[lt]); // 만약 value가 0이면 해당 key를 아예 삭제

    // lt를 1만큼 증가시켜 rt를 쫓아가야 함
    lt++;
  }
  return answer;
}

let s = "bacaAacba";
let t = "abc";

console.log(solution(s, t));
