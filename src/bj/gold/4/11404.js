"use strict";

/**
 * 플로이드-워셜 문제
 * - 다익스트라와 같은 최단경로 그래프 알고리즘
 * - 모든 정점에서 정점까지의 최단거리를 구할 때 쓰는 알고리즘
 */
const [n, m, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (n, m, input) => {
  let cities = input.map((v) => v.split(" ").map(Number));
  const distance = Array.from({ length: n + 1 }, () =>
    Array(n + 1).fill(Infinity)
  );
  let answers = [];

  cities.forEach((bus) => {
    // bus[0]: 시작지점 => bus[1]: 도착지점
    distance[bus[0]][bus[1]] = Math.min(bus[2], distance[bus[0]][bus[1]]); // 최소 비용으로 거리 정보를 갱신한다.
  });

  // 최단거리 갱신하기
  // k: 경유지, i: 시작점, j: 도착점
  // distance[i][k] + distance[k][j]는 i에서 k를 거쳐 j까지 가는 경로의 비용 값이 dist[i][j] 보다 작을 경우 갱신하는 것이다.
  for (let k = 1; k < n + 1; k++) {
    for (let i = 1; i < n + 1; i++) {
      for (let j = 1; j < n + 1; j++) {
        if (distance[i][k] + distance[k][j] < distance[i][j] && i !== j) {
          // i에서 k를 거쳐 j로 가는 비용의 합이 i에서 바로 j로 가는 비용보다 작고
          // 시작지점과 도착지점이 같을 순 없으므로 i!==j를 한다.
          distance[i][j] = distance[i][k] + distance[k][j];
        }
      }
    }
  }

  for (let i = 1; i < n + 1; i++) {
    let answer = [];
    for (let j = 1; j < n + 1; j++) {
      // distance[i][j]가 Infinity인 경우는 갈 수 없는 경우이므로 0으로 바꾸어준다.
      distance[i][j] = distance[i][j] !== Infinity ? distance[i][j] : 0;
      answer.push(distance[i][j]);
    }
    answers.push(answer.join(" "));
  }
  return answers.join("\n");
};

console.log(solution(+n, +m, input));
