"use strict";

/**
 * 트리 + 완전탐색 문제
 * => n의 크기가 100
 * => n의 종류(?), 범위가 작으면 무조건 완전탐색을 이용하면 된다.
 */
const solution = (n, wires) => {
  const connect = Array.from({ length: n + 1 }, () => []); // 연결 정보를 저장할 set
  wires.forEach((wire) => {
    // 연결 정보를 전부 저장해준다.
    const [a, b] = wire;
    connect[a].push(b);
    connect[b].push(a);
  });

  const searchTree = (root, impossibleNode) => {
    // console.log(`root는 ${root}, impossibleNode는 ${impossibleNode}`);
    let count = 0;
    const queue = [root]; // 현재 지점을 서브트리의 루트로 보고, 탐색한다.
    const visited = Array.from({ length: n + 1 }, () => 0); // 방문 여부를 체크한다.
    visited[root] = 1; // 방문 표시
    let qIndex = 0;
    while (queue.length !== qIndex) {
      //   console.log(queue);
      const node = queue[qIndex];
      connect[node].map((next) => {
        if (next !== impossibleNode && !visited[next]) {
          // impossibleNode와의 연결을 끊어냈으므로, next가 impossibleNode와 같으면 건너뛰어야한다.
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
    const diff = Math.abs(searchTree(a, b) - searchTree(b, a)); // 차이를 구한다.
    // console.log(`${a}노드와 ${b}노드 사이에서 끊었을 때의 차이는 ${diff}`);
    answer = answer > diff ? diff : answer;
    // answer = Math.min(answer, diff); // 으로 해도 되지만, 시간이 더 오래 걸린다.
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
