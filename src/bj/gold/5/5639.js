"use strict";

/**
 * - 이진 검색 트리
 *   - 루트를 기준으로 왼쪽 서브트리는 루트보다 작은 노드들로, 오른쪽 서브트리는 루트보다 큰 노드들로 이루어져 있다.
 * - 전위 순회는 (루트) -> (왼쪽) -> (오른쪽) 순서로 순회한다.
 * - 후위 순회는 (왼쪽) -> (오른쪽) -> (루트) 순서로 순회한다.
 *
 * - 풀이 방법
 *   1) 전위 순회 결과를 루트, 왼쪽 서브트리, 오른쪽 서브트리로 나눈다.
 *   2) 왼쪽 서브트리에 대해 이 과정을 반복한다.
 *   3) 오른쪽 서브트리에 대해 이 과정을 반복한다.
 *   4) 루트를 방문한다.
 */

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map(Number);

const solution = (input) => {
  const stack = [[0, input.length - 1]]; // 순회 결과 배열의 시작과 끝 인덱스를 삽입한다.
  const result = [];

  while (stack.length) {
    const [start, end] = stack.pop();
    if (start > end) continue;

    // 루트보다 큰 숫자들 중, 가장 앞 숫자가 오른쪽 서브트리의 루트
    let pivot;
    for (let i = start + 1; i <= end; i++) {
      if (input[i] < input[start]) continue;
      pivot = i;
      break;
    }

    // 오른쪽 서브트리가 존재할 때
    if (pivot) {
      // 왼쪽 서브트리의 시작과 끝 인덱스 삽입
      stack.push([start + 1, pivot - 1]);
      // 오른쪽 서브트리의 시작과 끝 인덱스 삽입
      stack.push([pivot, end]);
    } else {
      // 루트를 제외한 나머지 숫자들 삽입
      stack.push([start + 1, end]);
    }
    // result 배열의 처음에 루트 삽입
    // while문에서 이 과정을 반복하면 후위 순회 결과 완성
    result.push(input[start]);
  }
  return result.reverse().join("\n");
};

console.log(solution(input));
