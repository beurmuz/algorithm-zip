"use strict";

/**
 * [hash 문제]
 * - N+M의 길이에 의해 시간복잡도가 정해진다.
 * - idx만 잘 갱신해주면 금방 풀 수 있다.
 */
const [input, ...infos] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

const solution = (input, infos) => {
  const [N, M] = input.split(" ").map((v) => +v);
  let idx = 0;
  let groupMember = 0;
  let groupInfo = new Map();
  let member = new Map();
  let answer = "";

  for (let i = 0; i < N; i++) {
    groupInfo.set(infos[idx], infos[idx + 1]);
    groupMember = +infos[idx + 1];

    for (let j = 0; j < groupMember; j++) {
      member.set(infos[idx + 2 + j], infos[idx]);
    }
    idx = idx + 2 + groupMember;
  }

  let sortedGroup = new Map([...member.entries()].sort()); // 사전순 정렬

  // 퀴즈
  for (let i = 0; i < M; i++) {
    if (Number(infos[idx + 1]) === 1) {
      let groupName = member.get(infos[idx]);
      answer += `${groupName}\n`;
    } else if (Number(infos[idx + 1]) === 0) {
      for (let [k, v] of sortedGroup) {
        if (v === infos[idx]) answer += `${k}\n`;
      }
    }
    idx += 2;
  }
  return answer.trim();
};

console.log(solution(input, infos));
