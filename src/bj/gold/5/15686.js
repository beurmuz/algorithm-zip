"use strict";

/**
 * 구현 + dfs문제
 */
const [input, ...city] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M] = input.split(" ").map(Number);
const cities = city.map((v) => v.split(" ").map(Number));

const solution = (N, M, cities) => {
  const chickenPos = [];
  const homePos = [];

  // 1. 치킨집의 위치 정보와 집의 위치정보를 배열에 따로 저장한다.
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (cities[i][j] === 2) chickenPos.push([i, j]); // 치킨집
      else if (cities[i][j] === 1) homePos.push([i, j]); // 집
    }
  }

  // 2. 집과 치킨집 사이의 거리를 구한다.
  const getMinDistance = () => {
    let sum = 0; // 총 거리의 합
    homePos.forEach(([hx, hy]) => {
      // 집으로부터 가장 가까운 치킨집 거리를 구한다.
      let min = Number.MAX_SAFE_INTEGER;
      chickenPos.forEach((_, index) => {
        if (checked[index] === 1) {
          // 방문한 지점에 대해서만 거리를 계산한다.
          const [cx, cy] = chickenPos[index];
          min = Math.min(min, Math.abs(hx - cx) + Math.abs(hy - cy)); // 최솟값을 갱신해준다.
        }
      });
      sum += min;
    });
    return sum;
  };

  // 3. DFS로 거리 합 구하기
  const checked = Array.from({ length: chickenPos.length }, () => 0); // 치킨집 방문 여부를 표시할 checked 배열을 선언한다.
  let answer = Number.MAX_SAFE_INTEGER;
  const dfs = (index, count) => {
    if (count === M) {
      answer = Math.min(answer, getMinDistance()); // 최소거리로 answer를 갱신한다.
    } else {
      for (let i = index; i < chickenPos.length; i++) {
        if (checked[i] === 1) continue; // 이미 방문했으니 건너뛴다.
        checked[i] = 1; // 방문 표시
        dfs(i, count + 1);
        checked[i] = 0; // 방문 해제 (백트래킹)
      }
    }
  };
  dfs(0, 0);
  return answer;
};

console.log(solution(N, M, cities));
