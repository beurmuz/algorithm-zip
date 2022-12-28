"use strict";

/**
 * 지난번에도 문제 이해 못했었는데, 이번에 또 못했다. 풀이법은 아래와 같다.
 * 1. 첫번째 종말의 숫자는 666이므로 665부터 숫자를 계속 증가시킨다.
 * 2. 만약 증가시킨 숫자에 연속된 666이 있다면, input으로 받은 숫자를 1개 줄인다.
 * 3. input이 0이 되면 증가를 멈추고, 그 값을 출력한다.
 */
let n = require("fs").readFileSync("/dev/stdin").toString();

function solution(n) {
  let input = n;
  let theEndNumber = 665;

  while (input > 0) {
    // console.log(input, theEndNumber);
    theEndNumber++;
    if (("" + theEndNumber).includes("666")) input--;
  }
  return theEndNumber;
}
console.log(solution(n));
