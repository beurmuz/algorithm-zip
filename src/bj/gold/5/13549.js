"use strict";

/**
 * 이동할 수 있는 거리들이 주어지고, 가장 빠른 시간을 구하라 했으므로 => BFS문제
 * - 단, 증가하는 시간이 다르다는 점에 유의해야한다.
 * - 순간이동 하는 경우를 제일 먼저 탐색해주어야 하므로, unshift로 queue의 맨 앞에 넣어주어야한다.
 */
const [n, k] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

const solution = (n, k) => {
  const visited = Array.from({ length: 100001 }, () => false);

  const bfs = () => {
    const queue = [[n, 0]]; // 시작 위치와 이동 시간을 넣는다.

    while (queue.length) {
      let [now, time] = queue.shift();
      visited[now] = true;

      if (now === k) return time;

      for (let next of [now * 2, now - 1, now + 1]) {
        if (next >= 0 && next < 100001 && !visited[next]) {
          // 범위내에 있고, 아직 방문하지 않았다면
          if (next === now * 2)
            queue.unshift([next, time]); // 순간이동은 0초에 일어난다.
          else queue.push([next, time + 1]); // 남은 경로들은 1초 뒤에 일어난다.
        }
      }
    }
  };
  return bfs();
};

console.log(solution(n, k));
