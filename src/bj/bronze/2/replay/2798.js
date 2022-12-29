"use strict";

let inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [N, M] = inputs.shift().split(" ");

function solution(N, M, inputs) {
  let arr = inputs[0].split(" ").map((v) => +v);
  let answer = 0;

  for (let i = 0; i < N; i++) {
    // 3중 반복문을 돌린다.
    for (let j = i + 1; j < N; j++) {
      for (let k = j + 1; k < N; k++) {
        const sum = arr[i] + arr[j] + arr[k]; // 중복되지 않게 카드 3장을 뽑아서, 각 카드의 합을 구한다.
        if (sum <= M) {
          // 만약 sum이 M보다 작으면,
          answer = Math.max(answer, sum); // answer와 sum 중 더 큰 값으로 answer를 갱신한다.
        } else continue; // sum이 M보다 크면 건너뛴다.
      }
    }
  }
  return answer;
}

console.log(solution(+N, +M, inputs));
