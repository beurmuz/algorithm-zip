"use strict";

/**
 * 인접리스트를 이용해야겠다 정도밖에 생각해내지 못한 풀이!
 * - 찾아보니 시간초과가 발생한다는 글이 많아서 queue에서 노드를 shift()하는 방법이 아닌 index로 가리키는 방법을 이용했다.
 */
const [n, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (n, inputs) => {
  const tree = Array.from({ length: n + 1 }, () => []); // 인접 리스트 생성
  const parent = Array.from({ length: n + 1 }); // 정답
  let answer = "";

  // inputs를 순회하면서 정점a, b가 연결됨을 tree 인접리스트에 표시한다.
  for (let i = 0; i < inputs.length; i++) {
    let [a, b] = inputs[i].split(" ").map(Number);
    tree[a].push(b);
    tree[b].push(a);
  }
  //  console.log(tree);

  // bfs를 돌면서 queue에 push되는 노드들은 현재 노드의 자식 노드들을 의미한다.
  const bfs = () => {
    // 노드 방문처리를 위한 visited 배열 선언
    const visited = Array.from({ length: n + 1 }, () => 0);
    let queue = [1]; // 1번에 방문할 예정이니 미리 넣어놓기

    // 반복문을 돌면서 인접 노드를 방문처리한 후 queue에 넣는다.
    let index = 0;
    while (queue.length !== index) {
      let tmp = queue[index];
      //   console.log(`--------------${tmp}번 노드`);
      //   console.log(tree[tmp]);
      for (let i of tree[tmp]) {
        // tree[노드번호]에 있는 모든 값을 순회한다.
        if (visited[i] === 0) {
          // i번호에 아직 방문하지 않았다면
          visited[i] = 1; // 방문 표시
          parent[i] = tmp; // parent[i]에 현재 tmp(노드 번호)를 넣는다.
          queue.push(i);
        }
      }
      index++;
    }
  };
  bfs();
  for (let i = 2; i <= n; i++) {
    answer += `${parent[i]}\n`;
  }
  return answer;
};

console.log(solution(+n, inputs));
