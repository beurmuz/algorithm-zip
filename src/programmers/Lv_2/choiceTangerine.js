"use strict";

// 내가 푼 풀이, 맨 마지막에 종료 조건을 정하는 게 다소 어려웠음
function solution(k, tangerine) {
  let answer = 0;

  // map으로 귤의 크기에 따른 갯수 세기
  const tMap = new Map();
  for (let x of tangerine) {
    if (tMap.has(x)) tMap.set(x, tMap.get(x) + 1);
    else tMap.set(x, 1);
  }

  // map -> array
  // const tArray = Array.from(tMap);
  // key와 관계없이 value값만 있으면 됨
  const tValueArray = [...tMap.values()];

  // array sort
  tValueArray.sort((a, b) => b - a);

  // count the tangerine
  for (let num of tValueArray) {
    answer++;
    k -= num;
    if (k <= 0) break;
  }
  return answer;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3])); // 3
console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3])); // 2
console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3])); // 1
