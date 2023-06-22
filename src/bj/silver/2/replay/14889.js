"use strict";

/**
 * [시뮬레이션, dfs, 백트래킹 문제]
 */
const [N, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (N, input) => {
  const skills = input.map((line) => line.split(" ").map((v) => +v));
  const people = Array.from({ length: N }, (_, index) => index++); // 총 사람 수
  const checked = Array.from({ length: N }, () => false); // START팀에 넣은 사람을 구분하는 배열
  let answer = Number.MAX_SAFE_INTEGER;

  const START_TEAM = [];
  let LINK_TEAM = [];

  // 2. 링크팀 만들기
  const makeLink = () => {
    let LINK = [];
    for (let i = 0; i < people.length; i++) {
      if (!START_TEAM.includes(people[i])) LINK.push(people[i]);
    }
    return LINK;
  };

  // 3. 팀별 점수 계산하기
  const totalScore = (team) => {
    let sum = 0;
    for (let i = 0; i < team.length; i++) {
      for (let j = 0; j < team.length; j++) {
        if (i === j) continue;
        sum += skills[team[i]][team[j]];
      }
    }
    return sum;
  };

  // 1. 스타트와 링크 팀으로 나누기
  const dfs = (start, count) => {
    if (count === N / 2) {
      // START TEAM을 제외한 나머지를 LINK TEAM에 넣는다.
      LINK_TEAM = makeLink();
      // START TEAM와 LINK TEAM의 점수 차이를 계산해서 answer를 갱신한다.
      let gap = Math.abs(totalScore(START_TEAM) - totalScore(LINK_TEAM));
      answer = Math.min(answer, gap);
    } else {
      // START TEAM에 들어갈 사람을 뽑아야 함
      for (let i = start; i < N; i++) {
        if (checked[i]) continue;
        checked[i] = true;
        START_TEAM.push(i);
        dfs(i, count + 1);
        checked[i] = false;
        START_TEAM.pop();
      }
    }
  };

  dfs(0, 0);
  return answer;
};

console.log(solution(+N, input));
