"use strict";

/**
 * [dp / queue문제]
 * - dp문제라는데 js로 푼 사람들은 대부분이 queue를 이용해서 풀었다.
 * - 명확히 이해되지 않았다.
 */
const n = +require("fs").readFileSync("/dev/stdin").toString().trim();
// const n = 10;

const solution = (n) => {
  let queue = [[n]]; // 정답이 될 수 있는 모든 경우를 나열하는 배열
  let dist = 0; // 이건 queue[i]내 index를 조절 (즉, 나눈 연산 횟수를 의미한다.)
  let answer = ""; // 정답을 string화 할 변수
  let visited = {}; // 방문한 숫자 기록하기

  while (queue.length) {
    let nq = []; // 무슨용도?
    for (let i = 0; i < queue.length; i++) {
      const cur = queue[i][dist];

      if (cur == 1) {
        // 만약 cur이 1이 됐다면, 정답을 찾은 것
        answer += dist + "\n";
        answer += queue[i].join(" ");
        nq = [];
        break;
      }

      if (cur % 3 == 0 && !visited[cur / 3]) {
        // 3으로 나누었을 때 딱 떨어지고, 몫에 아직 방문하지 않았다면
        visited[cur / 3] = 1; // 나눠진 몫을 visited에 기록한다.
        nq.push(queue[i].concat(cur / 3)); // queue[i]에 이어붙인다.
      }
      if (cur % 2 == 0 && !visited[cur / 2]) {
        // 2로 나누었을 때 딱 떨어지고, 몫에 아직 방문하지 않았다면
        visited[cur / 2] = 1; // 나눠진 몫을 visited에 기록한다.
        nq.push(queue[i].concat(cur / 2)); // queue[i]에 이어붙인다.
      }

      if (!visited[cur - 1]) {
        // -1해주기
        visited[cur - 1] = 1; // 뺀 값을 visited에 기록한다.
        nq.push(queue[i].concat(cur - 1)); // queue에 이어붙인다.
      }
    }
    dist++;
    queue = nq;
  }
  return answer;
};

console.log(solution(n));
