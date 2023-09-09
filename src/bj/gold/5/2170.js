"use strict";

const [N, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (N, input) => {
  let poses = input
    .map((line) => line.split(" ").map((v) => +v))
    .sort((a, b) => a[0] - b[0]); // x좌표 기준 오름차순으로 정렬하기

  let answer = 0;
  answer += poses[0][1] - poses[0][0]; // 첫번째 y-x 차를 구해 더한다.
  let now = poses[0][1]; // 현재 직선의 끝 점

  for (let i = 1; i < N; i++) {
    if (poses[i][0] <= now && poses[i][1] > now) {
      // 현재 직선의 x좌표가 now보다 작은 경우
      // 무조건 겹치는 부분이 생기는 직선
      // 현재 직선의 y좌표를 보고 now보다 작으면 겹쳐지는 직선이므로 continue, now보다 크면 길이의 총 합이 증가할 수 있는 직선이므로 poses[i][1] - now를 answer에 더해주고 now 좌표를 갱신
      answer += poses[i][1] - now;
      now = poses[i][1];
    }
    if (poses[i][0] > now) {
      // 현재 직선의 x좌표가 now보다 큰 경우
      // 새로운 직선의 시작점을 찍어야 하는 경우이다. poses[i][1] - poses[i][0] 을 answer에 더해주고 now 좌표를 갱신
      answer += poses[i][1] - poses[i][0];
      now = poses[i][1];
    }
  }
  return answer;
};

console.log(solution(+N, input));
