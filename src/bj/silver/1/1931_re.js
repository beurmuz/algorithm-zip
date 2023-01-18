"use strict";

/**
 * 그리디 알고리즘
 * - 그리디는 정렬을 적절히 이용해 풀면 된다!
 */
const [n, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (n, inputs) => {
  // timeTable에 inputs값 split해서 저장하기
  const timeTable = inputs.map((v) => {
    let [start, end] = v.split(" ");
    return [+start, +end];
  });

  // timeTable sort하기 (end 오름차순 => end가 같으면 start 오름차순)
  timeTable.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });

  const ableTime = [];
  let endtime = 0; // 끝 시간을 0으로 초기화해놓고,
  for (let [start, end] of timeTable) {
    if (start >= endtime) {
      // 만약 시작 시간이 그전 endtime보다 크거나 같으면
      ableTime.push([start, end]); // 정답 배열에 push한다.
      endtime = end; // endtime을 새롭게 현재 end시간으로 갱신해준다.
    }
  }
  return ableTime.length;
};

console.log(solution(+n, inputs));
