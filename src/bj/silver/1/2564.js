"use strict";

/**
 * 조건이 여러개 일 때 코드 구현을 잘 못하는 것 같아서 연습해보고자 풀어보았다.
 * - 핵심은 시계방향으로 향한 거리 + 반시계 방향으로 향한 거리 = 전체 둘레의 길이
 * - 즉, (시계방향 거리합), (전체 둘레 - 시계방향 거리합) 중 작은 값을 answer에 누적합하면 된다.
 */
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (input) => {
  let answer = 0;
  const [width, height] = input[0].split(" ").map((v) => +v);
  const n = +input[1];
  const [dongDir, dongDist] = input[input.length - 1].split(" ").map((v) => +v);

  const calcDist = (dir, dist) => {
    if (dir === 1) return dist;
    else if (dir === 2) return width + height + (width - dist);
    else if (dir === 3) return width + height + width + (height - dist);
    else return width + dist;
  };

  let dist1 = calcDist(dongDir, dongDist); // 동근이의 거리
  for (let i = 2; i < 2 + n; i++) {
    let [martDir, martDist] = input[i].split(" ").map((v) => +v);
    let dist2 = calcDist(martDir, martDist); // 상점의 거리
    let path1 = Math.abs(dist1 - dist2);
    let path2 = 2 * width + 2 * height - path1;
    answer += Math.min(path1, path2);
  }
  return answer;
};

console.log(solution(input));
