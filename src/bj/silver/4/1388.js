"use strict";

"use strict";

let [size, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [r, c] = size.split(" ").map((v) => +v);
const room = input.map((v) => {
  return v.split("");
});

function solution(r, c, room) {
  let answer = 0;

  // row, - 구하기
  for (let i = 0; i < r; i++) {
    let check = "|";
    for (let j = 0; j < c; j++) {
      if (check === "|" && room[i][j] === "-") {
        answer++;
        check = "-";
      } else if (room[i][j] === "|") {
        check = "|";
      }
    }
  }

  // column, | 구하기
  for (let i = 0; i < c; i++) {
    let check = "-";
    for (let j = 0; j < r; j++) {
      if (check === "-" && room[j][i] === "|") {
        answer++;
        check = "|";
      } else if (room[j][i] === "-") {
        check = "-";
      }
      // console.log(`${i}, ${j} , check is ... ${check} => ${room[j][i]}`);
    }
    //   console.log('-------');
  }
  console.log(answer);
}

solution(r, c, room);
