"use strict";

/**
 * [bfs 문제]
 * - visited를 queue에 push할때 방문체크를 바로 해주었더니, 어제 짰던 코드보다 시간이 2배, 메모리도 2배 더 사용됐다.
 */
const [F, S, G, U, D] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

const solution = (F, S, G, U, D) => {
  // 층수가 정해져있으므로 visited 배열의 범위는 F+1층까지로 한다.
  const visited = Array.from({ length: F + 1 }, () => false);

  // 현재 층수가 목적지와 같으면 바로 종료한다.
  if (S === G) return 0;

  const bfs = () => {
    const queue = [[S, 0]]; // [시작점, 버튼을 누른 횟수]

    while (queue.length) {
      const [now, count] = queue.shift();
      if (now === G) return count; // 현재 지점이 G라면 탐색을 종료한다.

      for (let nx of [now + U, now - D]) {
        if (!visited[nx] && nx > 0 && nx <= F) {
          queue.push([nx, count + 1]);
          visited[nx] = true;
        }
      }
    }
  };
  visited[S] = true;
  let answer = bfs();
  return answer ? answer : "use the stairs";
};

console.log(solution(F, S, G, U, D));
