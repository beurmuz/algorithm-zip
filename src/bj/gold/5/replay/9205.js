"use strict";

/**
 * [bfs 문제]
 * - 집~편의점~페스티벌에 가기까지 bfs를 돌며 맥주가 부족하지 않다는 점을 확인하면 된다.
 */
const [t, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (t, inputs) => {
  // bfs
  const bfs = (n, pos) => {
    const home = pos[0].split(" ").map((v) => +v);
    const store = pos
      .slice(1, n + 1)
      .map((line) => line.split(" ").map((v) => +v));
    const festival = pos[n + 1].split(" ").map((v) => +v);

    const queue = [home];

    while (queue.length) {
      const [x, y] = queue.shift();
      // 현재 지점에서 festival까지의 거리가 1000이하이면 상근이와 친구들은 행복하게 페스티벌에 갈 수 있다.
      // 50m에 맥주 한병씩 마셔야하므로, 총 맥주 개수 20 * 50m = 1000
      if (Math.abs(festival[0] - x) + Math.abs(festival[1] - y) <= 1000)
        return "happy";

      // 현재 지점에서부터 모든 편의점 까지의 거리가 1000이하이면, 다음 편의점까지 맥주가 모자라지 않고 무사히 갈 수 있다.
      for (let i = 0; i < store.length; i++) {
        if (Math.abs(x - store[i][0]) + Math.abs(y - store[i][1]) <= 1000) {
          queue.push(store[i]);
          store.splice(i, 1);
        }
      }
    }
    return "sad";
  };

  // 테스트케이스에 따른 로직 실행 코드
  let answer = [];
  for (let i = 0; i < t; i++) {
    let n = +inputs[i];
    answer.push(bfs(n, inputs.splice(i + 1, n + 2)));
  }
  return answer.join("\n");
};

console.log(solution(+t, inputs));
