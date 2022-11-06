"use strict";

function solution(arr) {
  let answer = 0;
  let timeTable = [];
  for (let [come, out] of arr) {
    timeTable.push([come, "come"]);
    timeTable.push([out, "out"]);
  }

  // 시간순 정렬, 만약 들어온 시간이 같다면 out부터 정렬
  timeTable.sort((a, b) => {
    if (a[0] === b[0]) return b[1] - a[1];
    else return a[0] - b[0];
  });

  let count = 0;
  for (let [time, inout] of timeTable) {
    if (inout === "come") count++;
    else count--;
    answer = Math.max(count, answer);
  }
  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));
