"use strict";

/**
 * 어떻게 풀어야할지는 감을 잡았으나, 범위 잡는거나 코드 구현은 제대로 하지 못했다.
 *
 * ✅ 최소 시간, 최단 거리 문제는 bfs로 푼다!
 * BFS로 탐색 시 중복된 값을 계속 구할 수 있어,
 * 따로 배열에 값들을 저장해두고 있으면 가져오는 식으로 풀어야 연산 속도를 높일 수 있다.
 *
 */
const [n, k] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const solution = (n, k) => {
  const visited = Array.from({ length: 100100 }, () => 0); // 방문 표시를 위한 배열 선언

  const bfs = (n) => {
    const queue = [];
    queue.push([n, 0]); // 수빈이의 위치와 시간 넣기 ([n, 0])
    visited[n] = 1; // 방문 표시

    while (queue.length) {
      let [vertex, time] = queue.shift();
      if (vertex === k) return time; // 현재 위치가 k와 같으면, 현재 시간을 return한다.

      for (let nextVertex of [vertex - 1, vertex + 1, vertex * 2]) {
        if (!visited[nextVertex] && nextVertex >= 0 && nextVertex <= 100000) {
          // 아직 방문하지 않았고, 0보다 크고 100000보다 작은 경우에만
          visited[nextVertex] = 1; // 방문 표시
          queue.push([nextVertex, time + 1]); // 한 레벨 증가하니 time +1을 해준다.
        }
      }
    }
  };
  return bfs(n);
};

console.log(solution(+n, +k));
