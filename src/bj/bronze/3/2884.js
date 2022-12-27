"use strict";

/**
 * 처음에 풀었을 땐 hour가 -1인 경우를 고려하지 않아 틀렸었다.
 * 이후 hour -1을 했을 때 hour가 1이되면 전날 23시로 바꿔주는 작업을 추가했다.
 */
let inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

function solution(inputs) {
  let hour = +inputs[0];
  let minute = +inputs[1];

  // 분 - 45를 했을 때 음수가 나오는 경우
  if (minute - 45 < 0) {
    hour -= 1;
    minute = minute - 45 + 60;

    // 만약 hour가 -1이면 전날 23시로 바꿔주어야 한다.
    if (hour === -1) hour = 23;
  } else {
    minute -= 45;
  }

  console.log(hour + " " + minute); // 템플릿 리터럴 형태로 출력하니 계속 틀렸다고 나왔었다.
}
solution(inputs);
