"use strict";

/**
 * 1. slice를 이용한 방법
 */
function solution(t, p) {
  const numP = p * 1;
  let count = 0;

  for (let i = 0; i < t.length - p.length + 1; i++) {
    const slicedT = t.slice(i, i + p.length);
    const numT = slicedT * 1;
    if (numT <= numP) count++;
  }
  return count;
}

/**
 * 2. 똑같이 slice 이용한 풀이법
 * (코드가 조금 더 간결하다)
 */
function solution(t, p) {
  let count = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    let value = t.slice(i, i + p.length);
    if (+p >= +value) count++;
  }
  return count;
}
