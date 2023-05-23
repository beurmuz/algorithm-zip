"use strict";

/**
 * [그리디, 우선순위 큐 문제]
 * 그리디로 풀 수 있다는데, 왜 그리디로 풀어야하는지 이해하지 못했다.
 * 각 타임에 대해 조사하면서, 그 타임이 다음 타임에 영향을 주지 않아서 가능한 것 같기도하고..?
 *
 * 시작 시간과 끝 시간을 구분지어 하나의 객체에 저장하고,
 * 객체를 돌면서 동시에 진행되고 있는 강의실이 몇 개인지 파악하는 방법으로 풀면 된다고 한다.
 */
const [n, ...classes] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (n, classes) => {
  classes = classes.map((v) => v.split(" ").map((vv) => +vv));
  let answer = 0;
  let classroom = 0;
  const obj = [];

  for (let i = 0; i < n; i++) {
    obj.push({ time: classes[i][0], start: 1 }); // 시작 시간 저장
    obj.push({ time: classes[i][1], start: -1 }); // 끝 시간 저장
  }

  obj.sort((a, b) => (a.time === b.time ? a.start - b.start : a.time - b.time)); // 시간이 같으면 시작시간 순서로 정렬하고, 아니면 시간순(오름차순)으로 정리한다.

  obj.forEach((schedule) => {
    if (schedule.start === -1) classroom -= 1; // 끝나는 시간이면 -1을 해준다.
    else if (schedule.start === 1) classroom += 1; // 시작 시간이면 +1을 해준다.

    answer = classroom > answer ? classroom : answer; // 최소한의 강의실 개수는 동시대에 존재하는 최대 강의실 수를 구하면 알 수 있다.
  });
  return answer;
};

console.log(solution(+n, classes));
