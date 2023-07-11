"use strict";

/**
 * [stack 문제]
 * - input size N은 빌딩의 개수이다.
 * - 8 * 10^4 이므로 시간복잡도가 O(n)이 되도록 구현하는 것이 좋다.
 */

// 직관적으로 풀어보기 => O(n^2)
const [N, ...buildings] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

const solution_0 = (N, buildings) => {
  let answer = 0;

  for (let i = 0; i < N; i++) {
    let cnt = 0;
    for (let j = i + 1; j < N; j++) {
      if (buildings[i] <= buildings[j]) break;
      if (buildings[i] > buildings[j]) cnt++;
    }
    answer += cnt;
  }
  return answer;
};

console.log(solution_0(N, buildings));

// O(n)이 되도록 구현해보기
const solution = (N, buildings) => {
  const stack = [buildings[0]];
  let answer = 0;

  for (let i = 1; i < N; i++) {
    let nowBuilding = buildings[i];

    while (stack.length && stack[stack.length - 1] <= nowBuilding) {
      // 현재 건물의 높이가 stack의 상단 건물의 높이보다 작으면 pop한다.
      stack.pop();
    }
    stack.push(nowBuilding); // 현재 건물의 높이를 stack에 추가한다.
    // console.log(stack); // stack에는 내림차순에 해당하는 건물들의 높이만 남는다.
    answer += stack.length - 1; // 끝에 있는 건물의 옥상은 볼 수 없으므로 stack.length - 1을 한다.
  }
  return answer;
};

console.log(solution(N, buildings));
/**
  [ 10, 3 ] 1 => 높이 10에서 높이 3의 옥상 보기 가능 
  [ 10, 7 ] 1 => 높이 10에서 높이 7의 옥상 보기 가능
  [ 10, 7, 4 ] 2 => 높이 10에서 높이 4의 옥상 보기 가능. (10에서 7은 이미 봤음), 높이 7에서 높이 4의 옥상 보기 가능
  [ 12 ] 0 => 옥상을 볼 수 있는 건물 없음
  [ 12, 2 ] 1 => 높이 12에서 높이 2의 옥상 보기 가능

  => 1 + 1 + 2 + 0 + 1 => 5
 */
