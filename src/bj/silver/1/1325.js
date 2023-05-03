"use strict";

/**
 * 인접리스트와 bfs로 푼 문제
 */
const [input, ...relations] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (input, relations) => {
  const [n, m] = input.split(" ").map((v) => +v);
  let answer = [];

  // 인접리스트 만들기
  const graph = Array.from({ length: n + 1 }, () => []);
  relations.forEach((relation) => {
    const [a, b] = relation.split(" ").map((v) => +v);
    graph[b].push(a);
  });

  let max = 0; // 해킹할 수 있는 컴퓨터의 최대 개수
  const bfs = (start) => {
    let queue = [start];
    const visited = Array.from({ length: n + 1 }, () => false);
    let count = 0; // 해킹 가능한 컴퓨터의 개수
    let result = 0; // 해킹 가능한 컴퓨터의 최대 개수
    let qIndex = 0;

    while (queue.length !== qIndex) {
      let now = queue[qIndex];
      if (result < count) result = count;
      visited[now] = true; // 방문 표시

      for (let i = 0; i < graph[now].length; i++) {
        let next = graph[now][i];
        if (visited[next]) continue; // 방문했으면 건너뛴다.
        visited[next] = true;
        count += 1;
        queue.push(next);
      }
      qIndex++;
    }

    if (max < result) {
      max = result;
      answer = []; // answer 초기화
      answer.push(start);
    } else if (max === result) {
      answer.push(start);
    }
    // console.log(start, max, answer);
  };

  for (let i = 1; i <= n; i++) {
    bfs(i);
  }
  return answer.join(" ");
};

console.log(solution(input, relations));
