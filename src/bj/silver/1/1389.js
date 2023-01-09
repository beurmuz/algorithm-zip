"use strict";

/**
 * Graph - 너비우선탐색으로 풀어야하는 문제
 * - 인접리스트를 이용하는 풀이를 참고해 풀었다.
 *
 */
// const inputs = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const inputs = ["5 5", "1 3", "1 4", "4 5", "4 3", "3 2"];

const [N, M] = inputs
  .shift()
  .split(" ")
  .map((v) => +v);
const graph = Array.from({ length: N + 1 }, () => []); // 관계를 표시할 인접 리스트를 선언
const bacons = Array.from({ length: N + 1 }, () => 0); // 베컨 수를 저장할 배열 선언

// 인접 리스트 생성
for (let v of inputs) {
  let [start, end] = v.split(" ").map((v) => +v);
  graph[start].push(end);
  graph[end].push(start);
}

const solution = (N, M, graph) => {
  const bfs = (person) => {
    const visited = Array.from({ length: N + 1 }, () => 0);
    const queue = [];
    queue.push([person, 0]); // [사람번호, 단계 수]
    console.log(`person 번호: ${person}`);

    while (queue.length) {
      console.log(`---- 현재 queue에 들어있는 값들은 ${queue}`);
      let [node, count] = queue.shift(); // 맨 앞의 값([node, count])을 뽑는다.

      if (visited[node] === 0) {
        // 아직 방문하지 않았다면
        visited[node] = 1; // 방문 표시
        bacons[person] += count++; // 음?
        console.log(
          `node: ${node}, count: ${count}, 현재 ${person}의 count는 ${bacons[person]}`
        );
        graph[node].forEach((v) => queue.push([v, count])); // 뽑은 node와 관련있는 모든 값을 queue에 넣어준다.
      }
    }
  };

  console.log(graph);
  for (let i = 1; i <= N; i++) {
    bfs(i); // i는 시작점, 즉 기준이 되는 사람의 번호를 의미한다.
    console.log(bacons);
    console.log("-------------------------------- ");
  }
  bacons.shift(); // 맨 앞의 임시 값인 0부분은 제외한다.
  return bacons.indexOf(Math.min(...bacons)) + 1;
};

console.log(solution(N, M, graph));
