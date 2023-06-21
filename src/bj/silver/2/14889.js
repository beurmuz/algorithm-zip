"use strict";

/**
 * [시뮬레이션 문제]
 * - 단순히 반복문을 돌려 구하려 했지만, dfs와 백트래킹을 이용해서 풀면 된다.
 */
const [N, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (N, input) => {
  const skills = input.map((line) => line.split(" ").map((v) => +v));
  let answer = Number.MAX_SAFE_INTEGER;
  const people = Array.from({ length: N }, (_, index) => index++);
  const visited = Array.from({ length: N }, () => false);

  const START_TEAM = [];
  let LINK_TEAM = [];

  // START_TEAM에 속하지 않는 남은 팀원을 구해 LINK_TEAM에 넣는 함수
  const restPeople = (people, team) => {
    let result = [];
    for (let i = 0; i < people.length; i++) {
      if (!team.includes(people[i])) result.push(people[i]);
    }
    return result;
  };

  // 각 팀의 포인트를 구하는 함수
  const calcPoint = (team) => {
    let sum = 0;
    for (let i = 0; i < team.length; i++) {
      for (let j = 0; j < team.length; j++) {
        if (i === j) continue;
        sum += skills[team[i]][team[j]];
      }
    }
    return sum;
  };

  // 팀원을 나누고, 각 팀의 팀포인트를 구해 두 팀의 포인트 최소차를 찾는 함수
  const dfs = (count, start) => {
    if (count === N / 2) {
      LINK_TEAM = restPeople(people, START_TEAM);
      const START_POINT = calcPoint(START_TEAM);
      const LINK_POINT = calcPoint(LINK_TEAM);
      let min = Math.abs(START_POINT - LINK_POINT);
      answer = Math.min(answer, min);
      return;
    } else {
      for (let i = start; i < N; i++) {
        if (visited[i]) continue;
        visited[i] = true; // 방문 표시
        START_TEAM.push(i);
        dfs(count + 1, i);
        START_TEAM.pop();
        visited[i] = false; // 방문 취소
      }
    }
  };

  dfs(0, 0);
  return answer;
};

console.log(solution(+N, input));
