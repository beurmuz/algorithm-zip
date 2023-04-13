"use strict";

const [input, ...grid] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (input, grid) => {
  // 0: 빈칸, 1: 집, 2: 치킨집
  // r과 c는 1부터 시작함
  // 치킨 거리: 집과 가장 가까운 치킨집 사이의 거리
  // 도시의 치킨 거리 = 모든 집의 치킨 거리의 합
  const [n, m] = input.split(" ").map((v) => +v);
  const cities = grid.map((line) => line.split(" ").map((v) => +v));
  const chickenPos = [];
  const homePos = [];

  // 1. 치킨집과 집의 위치를 찾는다.
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (cities[i][j] === 1) homePos.push([i, j]);
      if (cities[i][j] === 2) chickenPos.push([i, j]);
    }
  }

  // 2. 치킨집과 집의 거리 구하기
  const MinDistance = () => {
    let sum = 0; // 총 거리의 합
    homePos.forEach(([homeX, homeY]) => {
      // 집으로부터 가장 가까운 치킨집의 거리를 구한다.
      let min = Number.MAX_SAFE_INTEGER;
      chickenPos.forEach((_, index) => {
        if (visited[index] === 1) {
          const [chickenX, chickenY] = chickenPos[index];
          min = Math.min(
            min,
            Math.abs(homeX - chickenX) + Math.abs(homeY - chickenY)
          );
        }
      });
      sum += min;
    });
    return sum;
  };

  // 2. k개의 치킨집을 찾아라!
  let visited = Array.from({ length: chickenPos.length }, () => 0); // 방문한 치킨집을 기록할 배열
  let answer = Number.MAX_SAFE_INTEGER;
  const dfs = (index, L) => {
    // console.log(index, visited);
    if (L === m) {
      //   console.log(MinDistance());
      answer = Math.min(answer, MinDistance()); // 최단 거리로 answer를 갱신한다.
    } else {
      for (let i = index; i < chickenPos.length; i++) {
        if (visited[i] === 1) continue;
        visited[i] = 1;
        dfs(i, L + 1);
        visited[i] = 0; // 백트래킹. 방문안한걸로 다시 표시!
      }
    }
  };
  dfs(0, 0);
  return answer;
};

console.log(solution(input, grid));
