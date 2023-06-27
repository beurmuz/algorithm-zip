"use strict";

/**
 * [시뮬레이션 문제]
 * - 음...?
 */
const [N, W, L, ...trucks] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map((v) => +v);

const solution = (N, ableLength, maxWeight, trucks) => {
  const queue = Array.from({ length: ableLength }, () => 0); // 다리로 보고
  let answer = 0;
  let nowWeight = 0;

  for (let i = 0; i < N; i++) {
    const truck = trucks[i];
    nowWeight -= queue.shift();

    // console.log(nowWeight, queue, i, answer);

    if (nowWeight + truck <= maxWeight) {
      // 1대가 더 올 수 있다는 뜻
      queue.push(truck);
      nowWeight += truck;
    } else {
      // 현재 트럭의 무게가 maxWeight을 초과하므로 다음 트럭은 올 수 없다.
      i--;
      queue.push(0);
    }
    answer++;
  }
  answer += ableLength;
  return answer;
};

console.log(solution(N, W, L, trucks));
