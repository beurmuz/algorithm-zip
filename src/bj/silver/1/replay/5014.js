"use strict";

/**
 * [bfs 문제]
 * - visited를 queue에 push할때 방문체크를 바로 해주었더니, 어제 짰던 코드보다 시간이 2배, 메모리도 2배 더 사용됐다.
 * - '적어도 몇번~?', '최소한으로~' 하면 BFS로 풀면 된다.
 */
const [F, S, G, U, D] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

const solution = (F, S, G, U, D) => {
  // 총 F층. 방문 여부를 기록할 배열 선언
  const visited = Array.from({ length: F + 1 }, () => false);

  if (S === G) return 0; // 현재 위치가 목적지라면 0을 return한다.

  const bfs = () => {
    let queue = [];
    queue.push([S, 0]); // [시작 층수, 버튼을 누른 횟수]
    visited[S] = true; // 방문 표시

    while (queue.length) {
      let [nowFloor, count] = queue.shift();
      if (nowFloor === G) return count; // 현재 층수가 G와 같다면, count를 return 한다.

      for (let nx of [nowFloor + U, nowFloor - D]) {
        // 최고층이 F이므로 nx는 1층부터 F 사이에 존재해야 한다.
        if (!visited[nx] && nx > 0 && nx <= F) {
          queue.push([nx, count + 1]);
          visited[nx] = true;
        }
      }
    }
  };
  let answer = bfs();
  return answer ? answer : "use the stairs";
};

console.log(solution(F, S, G, U, D));
