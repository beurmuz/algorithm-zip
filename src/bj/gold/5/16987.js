"use strict";

/**
 * [백트래킹 문제]
 * - 어떻게 백트래킹을 써야할지 계속 고민이었다. 최대 깨진 갯수로 answer를 갱신하는 것까진 예상했지만 dfs(now+1) 이후, 왜 같은 구문을 반복하는지 의문이다.
 */

const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .split("\n")
  .map((v) => v.split(" ").map(Number));
const N = input.shift()[0];
let answer = 0;

let eggs = input;

function dfs(now) {
  if (now == N) {
    let broken = 0;
    for (let i = 0; i < N; i++) {
      if (eggs[i][0] <= 0) broken++;
    }
    answer = Math.max(broken, answer);
    return;
  }
  let flag = true;
  for (let next = 0; next < N; next++) {
    if (next == now) continue;
    if (eggs[now][0] <= 0 || eggs[next][0] <= 0) continue;
    flag = false;
    eggs[now][0] = eggs[now][0] - eggs[next][1];
    eggs[next][0] = eggs[next][0] - eggs[now][1];
    dfs(now + 1);
    eggs[now][0] = eggs[now][0] + eggs[next][1];
    eggs[next][0] = eggs[next][0] + eggs[now][1];
  }
  if (flag) dfs(now + 1);
}

dfs(0);
console.log(answer);
