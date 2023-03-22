"use strict";

/**
 * 다익스트라 알고리즘
 * - 우선순위큐(최소힙)으로 풀어야 한다.
 * - 그래프에 정보를 입력받고 minHeap에 [start, 0]을 push한다. => 시작 지점부터 큐에서 빠져나와하니 거리에 0을 넣는다.
 * - 최소힙은 pop하면 거리가 가장 짧은(=가까운) 노드가 나온다.
 * - 방문하지 않은 경우 방문체크를 하고, graph를 순회하며 현재 거리보다 작은 경우 거리를 갱신하고 힙에 추가해준다.
 */
class MinHeap {
  constructor() {
    this.heap = [];
  }

  empty() {
    if (this.heap.length == 0) return true;
    return false;
  }

  swap(arr, x, y) {
    let tmp = arr[x];
    arr[x] = arr[y];
    arr[y] = tmp;
    return;
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let nowIndex = this.heap.length - 1; // 가장 마지막에 추가된 값의 인덱스 번호

    while (nowIndex > 0) {
      const parentIndex = Math.floor((nowIndex - 1) / 2);
      if (this.heap[parentIndex].cost <= this.heap[nowIndex].cost) break;
      this.swap(this.heap, parentIndex, nowIndex);
      nowIndex = parentIndex;
    }
  }

  extractMin() {
    if (this.heap.length == 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown(0);
    return min;
  }

  sinkDown(index) {
    const leftIndex = 2 * index + 1;
    const rightIndex = 2 * index + 2;
    const length = this.heap.length;
    let smallestIndex = index;

    if (
      leftIndex < length &&
      this.heap[leftIndex].cost < this.heap[smallestIndex].cost
    )
      smallestIndex = leftIndex;
    if (
      rightIndex < length &&
      this.heap[rightIndex].cost < this.heap[smallestIndex].cost
    )
      smallestIndex = rightIndex;
    if (smallestIndex !== index) {
      this.swap(this.heap, index, smallestIndex);
      this.sinkDown(smallestIndex);
    }
  }
}

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const solution = (input) => {
  const [V, E] = input[0].split(" ").map((v) => +v);
  const startpoint = +input[1];
  const cost = Array.from({ length: V + 1 }, () => Infinity);
  const graph = Array.from({ length: V + 1 }, () => []);

  for (let i = 2; i < input.length; i++) {
    const [u, v, w] = input[i].split(" ").map((v) => +v);
    graph[u].push([v, w]); // [연결된 노드, 비용]
  }
  cost[startpoint] = 0;

  let heap = new MinHeap();
  heap.insert({ node: startpoint, cost: 0 });

  while (!heap.empty()) {
    let now = heap.extractMin(); // 최솟값의 index번호를 추출한다.
    for (let i = 0; i < graph[now.node].length; i++) {
      const [node, value] = graph[now.node][i];
      if (cost[node] > now.cost + value) {
        cost[node] = now.cost + value;
        heap.insert({ node: node, cost: cost[node] });
      }
    }
  }
  cost.shift();
  cost.forEach((v, i) => {
    if (v === Infinity) cost[i] = "INF";
  });
  return cost.join("\n");
};

console.log(solution(input));
