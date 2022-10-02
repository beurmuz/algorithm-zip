"use strict";

/*
    - n번째 중량과 n번부터 마지막 로프의 개수를 곱했을 때의 최댓값 구해서 저장하기
    - ex) [10, 15, 20, 25] 중량의 4개의 로프가 있다면, 10*4개 중량, 15*3개 중량, 20*2개 중량, 25*1개 중량에서 최댓값이 정답이된다.
        => 여러 개의 로프가 있을 때 최소 중량 기준으로 들 수 있으므로, 뒤로 갈수록 작은 로프는 빼주고 계산해야 함
*/

const [n, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);
input.sort((a, b) => a - b);

let maxValue = 0;
for (let i = 0; i < n; i++) {
  if (maxValue <= input[i] * (n - i)) {
    maxValue = input[i] * (n - i);
  }
}
console.log(maxValue);
