"use strict";

/**
 * [누적합, 투 포인터 문제]
 * - 처음엔 for문과 while문으로 구했고, 테스트케이스는 전부 통과했다.
 * - 단, 투포인터를 이용해 O(n) 시간복잡도를 가지게끔 다시 풀면 시간이 무려 1/5나 줄어드는걸 볼 수 있다.
 *
 */
const [input, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 처음에 푼 풀이 (with for문, while문), 시간이 2116ms가 나왔다.
const solution1 = (input, arr) => {
  const [N, S] = input.split(" ").map((v) => +v);
  arr = arr[0].split(" ").map((v) => +v);
  let answer = Infinity;

  arr.forEach((start, index) => {
    let count = 1;
    let idx = index + 1;
    let sum = start;
    while (sum < S) {
      sum += arr[idx];
      idx++;
      count++;
    }
    if (sum >= S) {
      answer = Math.min(answer, count);
    }
  });
  return answer === Infinity ? 0 : answer;
};

console.log(solution1(input, arr));

// 다시 푼 풀이 (with Two Pointer), 시간이 212ms가 나왔다.
const solution = (input, arr) => {
  const [N, S] = input.split(" ").map((v) => +v);
  arr = arr[0].split(" ").map((v) => +v);

  let answer = Infinity;
  let sum = 0;
  let [lt, rt] = [0, 0];

  for (lt; lt < N; lt++) {
    while (sum < S && rt < N) {
      sum += arr[rt++];
    }
    if (sum >= S) answer = Math.min(answer, rt - lt); // 합이 S를 넘기만 하면 된다.
    sum -= arr[lt];
  }
  return answer === Infinity ? 0 : answer;
};

console.log(solution(input, arr));
