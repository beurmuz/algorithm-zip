"use strict";

/**
 * [bfs 문제]
 * - 왜 bfs..?
 * - 완벽히 이해하지 못했다.
 */
const [t, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (t, inputs) => {
  const getDistance = (nowX, nowY, target) => {
    return Math.abs(nowX - target[0]) + Math.abs(nowY - target[1]); // 문제에서 정의한 두 지점 사이의 거리는 (x좌표 차이 + y좌표 차이)이다.
  };

  const bfs = (n, pos) => {
    const home = pos[0].split(" ").map((v) => +v);
    const store = pos
      .slice(1, n + 1)
      .map((line) => line.split(" ").map((v) => +v));
    const pentport = pos[n + 1].split(" ").map((v) => +v);

    const queue = [home];

    while (queue.length) {
      const [x, y] = queue.shift();
      // 현재 지점에서 펜타포트까지의 거리가 1000이하(20*50)이면 갈 수 있는 것이므로 happy를 return한다.
      if (getDistance(x, y, pentport) <= 1000) return "happy";

      // store의 길이만큼 순회하며 현재 지점부터 store[i]까지의 거리가 1000이하인 경우를 찾아 queue에 추가한다.
      for (let i = 0; i < store.length; i++) {
        if (getDistance(x, y, store[i]) <= 1000) {
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
