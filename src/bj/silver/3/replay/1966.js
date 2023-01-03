"use strict";

/**
 * 문제 이해가 오래 걸렸다. 테스트케이스는 뭐라는지..
 */
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let n = input.shift();

for (let i = 0; i < input.length; i += 2) {
  let [listNum, m] = input[i].split(" ").map((v) => +v);
  let queue = input[i + 1].split(" ").map((v) => +v); // 문서의 중요도
  let count = 1;

  while (true) {
    const head = queue.shift();
    if (head >= Math.max(...queue) && m === 0) {
      // head가 queue의 최댓값이고, 0자리에 있으면 (맨 앞에 있으면)
      console.log(count); // 바로 출력 후 반복문을 멈춘다.
      break;
    } else if (head < Math.max(...queue) && m === 0) {
      // head가 queue의 최댓값보다 작고 0자리에 있으면
      queue.push(head); // queue의 맨 끝에 head를 push한다.
      m = queue.length - 1; // m의 위치를 한 칸 앞으로 갱신한다.
    } else if (head < Math.max(...queue)) {
      // head가 queue의 최댓값보다 작고, 0이 아닌 다른 자리에 있으면
      queue.push(head); // queue의 맨 뒤에 head를 push한다.
      m -= 1; // m의 위치를 한 칸 앞으로 갱신한다.
    } else if (head >= Math.max(...queue)) {
      // head가 queue의 최댓값보다 크거나 같은데, 0이 아닌 다른 자리에 있다면
      count += 1; // count에 +1을 하고,
      m -= 1; // m의 위치를 한 칸 앞으로 갱신한다.
    }
  }
}
