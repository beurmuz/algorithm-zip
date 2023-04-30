"use strict";

/**
 * 처음에 BFS로 풀려했으나, 우선 입력값의 범위가 최대 1억까지임을 고려하면 많은 메모리와 시간을 소모할 것 같아 고민이었다.
 * 완전탐색으로는 불가능할 것이라 판단했으나 풀이를 보니 완탐으로 푼 게 많았다.
 */

// 1. 재귀로 풀기
function solution(storey) {
  if (storey < 5) return storey;
  const r = storey % 10;
  const m = (storey - r) / 10;
  return Math.min(r + solution(m), 10 - r + solution(m + 1)); // (밑으로, 위로 갔다가 밑으로)
}
