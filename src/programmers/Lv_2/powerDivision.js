"use strict";

/**
 * 트리 + 완전탐색 문제
 * => n의 크기가 100이므로 그냥 완전탐색을 해도 된다.
 */
const solution = (n, wires) => {
  const connect = Array.from({ length: n + 1 }, () => []); // 연결 정보를 저장할 set
  wires.forEach((wire) => {
    const [a, b] = wire;
    connect[a].push(b);
    connect[b].push(a);
  });

  const searchTree = (root, exception) => {
    let count = 0;
    const queue = [root]; // 현재 지점을 서브트리의 루트로 보고
    const visited = [];
    visited[root] = 1; // 방문 표시
    let qIndex = 0;
    while (queue.length !== qIndex) {
      const node = queue[qIndex];
      connect[node].map((next) => {
        if (next !== exception && !visited[next]) {
          // exception이 끊어낸 값이므로, 값이 같지 않고 아직 방문하지 않았다면
          visited[next] = 1; // 방문표시
          queue.push(next);
        }
      });
      count++;
      qIndex++;
    }
    return count;
  };

  let answer = 100; // n은 2 <= n <= 100
  wires.forEach((wire) => {
    const [a, b] = wire;
    const diff = Math.abs(searchTree(a, b) - searchTree(b, a));
    answer = answer > diff ? diff : answer;
  });
  return answer;
};
console.log(
  solution(9, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ])
);
console.log(
  solution(4, [
    [1, 2],
    [2, 3],
    [3, 4],
  ])
);
console.log(
  solution(7, [
    [1, 2],
    [2, 7],
    [3, 7],
    [3, 4],
    [4, 5],
    [6, 7],
  ])
);
