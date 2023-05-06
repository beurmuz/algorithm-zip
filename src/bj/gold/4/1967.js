"use strict";

/**
 * 무작위의 점에서 가장 멀리 있는 점을 구한 뒤, 그 점에서 가장 멀리 있는 점과의 거리가 트리의 지름이 된다.
 */
const [n, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (n, input) => {
  if (n === 1) return 0; // 노드의 개수가 1개뿐이라면, 0을 return한다.

  const tree = Array.from({ length: n + 1 }, () => []);
  input.map((i) => {
    const [from, to, dist] = i.trim().split(" ").map(Number);
    tree[from].push([to, dist]);
    tree[to].push([from, dist]);
  });

  function bfs(s) {
    const check = Array.from(n + 1, () => 0);
    const queue = [];
    queue.push([s, 0]);
    let farNode = { node: 0, dist: 0 };

    while (queue.length) {
      const [node, dist] = queue.shift();
      if (check[node]) continue;
      check[node] = 1;

      if (farNode.dist < dist) farNode = { node, dist };

      for (let [nextNode, nextDist] of tree[node]) {
        queue.push([nextNode, dist + nextDist]);
      }
    }
    return farNode;
  }

  return bfs(bfs(1).node).dist;
};

console.log(solution(+n, input));
