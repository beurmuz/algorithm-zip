"use strict";

/**
 * - 재귀함수로 풀면 된다.
 *
 * A기둥의 (n-1)번째 원판을 B기둥으로 이동시킨다.
 * A기둥의 n번째 원판을 C기둥으로 이동시킨다.
 * B기둥의 (n-1)번째 원판을 C기둥으로 이동시킨다.
 */
function solution(n) {
  const answer = []; // 이동 경로를 누적할 배열

  const hanoi = (n, start, mid, end) => {
    console.log(n, start, mid, end);
    if (n === 1)
      answer.push([start, end]); // n이 1이면 start에서 바로 end로 넘기면 된다.
    else {
      hanoi(n - 1, start, end, mid); // n-1개의 원판을 start에서 mid로 옮겨준다. (mid에 원판들을 옮겨놔야 n을 end로 옮길 수 있기 때문이다.)
      answer.push([start, end]); // n번째 원판을 start에서 end로 옮겨준다.
      hanoi(n - 1, mid, start, end); // mid에 있던 n-1개의 원판을 end 위에 올린다.
    }
  };
  hanoi(n, 1, 2, 3);
  return answer;
}

console.log(solution(2));
