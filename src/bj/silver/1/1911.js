"use strict";

const [input, ...holes] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (input, holes) => {
  const [N, L] = input.split(" ").map((v) => +v);
  // holes를 시작점을 기준으로 오름차순 정렬한다.
  holes = holes
    .map((line) => line.split(" ").map((v) => +v))
    .sort((a, b) => a[0] - b[0]);

  let position = 0; // 입력 조건에 위치는 0이상, 1000000000 이하라고 나와있다.
  let answer = 0;

  for (let [start, end] of holes) {
    if (end <= position) continue;

    // end가 position보다 클 때
    const maxStartPos = Math.max(position, start); // position과 start중 큰 값을 시작점으로 잡는다.
    const count = Math.ceil((end - maxStartPos) / L); // 몇 개의 널빤지를 쓸 수 있는지 계산한다.
    answer += count;
    position = maxStartPos + count * L; // position을 갱신한다.
  }
  return answer;
};

console.log(solution(input, holes));
