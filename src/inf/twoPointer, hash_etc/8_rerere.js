"use strict";

function compareMap(map1, map2) {
  if (map1.size !== map2.size) return false; // 각 map의 사이즈가 다르면 false를 return
  for (let [key, value] of map1) {
    if (!map2.has(key) || map2.get(key) !== value) return false; // map2에 map1의 key가 없거나, map2와 map1의 value값이 다르면 false를 return
  }
  return true;
}

function solution(s, t) {
  let answer = 0;
  let tMap = new Map();
  let sMap = new Map();

  // t에 대한 아나그램 구하기
  for (let x of t) {
    if (!tMap.has(x)) tMap.set(x, 1);
    else tMap.set(x, tMap.get(x));
  }

  // sMap에 일단 맨 앞 2개 넣어놓고 시작
  for (let i = 0; i < t.length - 1; i++) {
    if (sMap.has(s[i])) sMap.set(s[i], sMap.get(s[i]) + 1);
    else sMap.set(s[i], 1);
  }

  // t의 길이만큼 S의 부분 문자열이 아나그램인지 판별하기
  // s의 부분 문자열을 볼 때에는 투포인터를 사용해야 함
  let lt = 0;
  for (let rt = t.length - 1; rt < s.length; rt++) {
    // 1개 추가하기
    if (sMap.has(s[rt])) sMap.set(s[rt], sMap.get(s[rt]) + 1);
    else sMap.set(s[rt], 1);

    // 추가하고 tMap과 동일한지 비교
    if (compareMap(sMap, tMap)) answer++;

    // lt가 가리키는 key의 value를 1 감소시킨 후, 만약 그 값이 0이면 sMap에서 완전히 삭제하기
    sMap.set(s[lt], sMap.get(s[lt]) - 1);
    if (sMap.get(s[lt]) === 0) sMap.delete(s[lt]);

    // lt 자리 옮겨주기 (오른쪽으로 한칸 이동)
    lt++;
  }
  return answer;
}

let s = "bacaAacba";
let t = "abc";

console.log(solution(s, t));
