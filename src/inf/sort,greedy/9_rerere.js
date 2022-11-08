"use strict";

function solution(arr) {
  let answer = 0;
  let timeTable = [];
  for (let [come, out] of arr) {
    timeTable.push([come, "c"]);
    timeTable.push([out, "o"]);
  }

  timeTable.sort((a, b) => {
    if (a[0] === b[0]) return b[1] - a[1]; // 만약 시간이 같으면, out -> come 순으로 정렬
    return a[0] - b[0];
  });

  let people = 0;
  for (let [time, status] of timeTable) {
    if (status === "c") people++;
    else people--;
    answer = Math.max(people, answer);
  }
  return answer;
}

let arr = [
  [14, 18],
  [12, 16],
  [15, 20],
  [20, 30],
  [5, 15],
];
console.log(solution(arr));
