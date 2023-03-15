"use strict";

const original = require("fs").readFileSync("/dev/stdin").toString().trim();

const solution = (original) => {
  // 1. original을 사전 순으로 정렬한 후, Map으로 각 알파벳의 개수를 센다.
  const letterMap = new Map();
  original
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .map((v) => {
      letterMap.set(v, letterMap.has(v) ? letterMap.get(v) + 1 : 1);
    });

  let oddKey = [];

  // 2. 홀수 개인 알파벳이 몇 개 있는지 찾는다.
  for (let [key, value] of letterMap) {
    if (value % 2 !== 0) {
      oddKey.push(key);
      value -= 1;
      if (value === 0) letterMap.delete(key);
      else letterMap.set(key, value);
    }
  }

  // 3-1. 홀수 개인 알파벳이 2개 이상이면 팰린드롬을 만들 수 없다.
  if (oddKey.length > 1) return "I'm Sorry Hansoo";

  // 3-2. 홀수 개인 알파벳이 1개 이거나 아예 없다면 팰린드롬을 만들 수 있다.
  let half = "";
  for (let [key, value] of letterMap) {
    let s = "";
    // 2로 나눈 값만큼 반복문을 돌면서 s에 key를 추가한다.
    for (let i = 0; i < Math.floor(value / 2); i++) {
      s += key;
    }
    half += s;
  }

  // 4. 팰린드롬을 만든다.
  return oddKey[0]
    ? half + oddKey[0] + half.split("").reverse().join("")
    : half + half.split("").reverse().join("");
};

console.log(solution(original));
