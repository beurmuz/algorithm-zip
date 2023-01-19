"use strict";

/**
 * 처음에 풀었던 코드처럼 푸니 shift()때문에 계속 시간초과가 발생하여 인덱스 방식으로 바꿔주었다.
 * ✅ bfs시 시간을 단축하려면 queueIndex를 활용하자!
 * => while문의 조건은 queue.length !== queueIndex로 주면 된다.
 *
 * 이전 풀이에서는 시간이 3396ms였는데, 인덱스 방식으로 바꿔주니 시간이 804ms가 되었다.
 */
const [n, k] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

const solution = (n, k) => {
  // 방문한 곳은 건너뛰기 위해 방문 여부를 저장할 배열을 선언한다.
  const visited = Array.from({ length: 100100 }, () => 0); // 0으로 초기화

  const bfs = (n) => {
    const queue = [];
    queue.push([n, 0]); // 수빈이의 현재 지점과 시간 넣기
    visited[n] = 1; // 방문 표시
    let queueIndex = 0;

    while (queue.length !== queueIndex) {
      // ✅✅✅
      let [nowPosition, time] = queue[queueIndex];
      if (nowPosition === k) return time; // 현재 위치가 k와 같으면 현재 시간을 return한다.

      for (let nextPosition of [
        nowPosition - 1,
        nowPosition + 1,
        nowPosition * 2,
      ]) {
        if (
          visited[nextPosition] === 0 &&
          nextPosition >= 0 &&
          nextPosition <= 100000
        ) {
          queue.push([nextPosition, time + 1]); // 한 레벨 증가하므로 time +1을 해준다.
          visited[nowPosition] = 1; // 방문 표시
        }
      }
      queueIndex++;
    }
  };
  return bfs(n);
};

console.log(solution(n, k));
