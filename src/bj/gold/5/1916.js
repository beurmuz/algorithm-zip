"use strict";

/**
 * 다익스트라 알고리즘 문제
 */
class Heap {
  constructor() {
    this.arr = [0];
  }

  add(value) {
    this.arr.push(value);
    this._heapify();
  }

  pop() {
    if (this.size() === 0) return -1;
    const temp = this.arr.pop();
    const returnValue = this.arr[1];
    if (this.size() === 0) return temp;
    this.arr[1] = temp;
    this._heapify2();
    return returnValue;
  }

  size() {
    return this.arr.length - 1;
  }

  _heapify() {
    const heap = this.arr;
    let child = heap.length - 1;
    let parent = Math.floor(child / 2);
    while (parent !== 0) {
      if (heap[parent][1] <= heap[child][1]) break;
      const temp = heap[parent];
      heap[parent] = heap[child];
      heap[child] = temp;
      child = parent;
      parent = Math.floor(child / 2);
    }
  }
  _heapify2() {
    const heap = this.arr;
    let parent = 1;
    let left = parent * 2;
    let right = parent * 2 + 1;

    while (heap[left] !== undefined || heap[right] !== undefined) {
      if (heap[right] === undefined) {
        if (heap[left][1] > heap[parent][1]) break;
        this._change(left, parent, heap);
        break;
      }
      if (heap[left][1] <= heap[right][1]) {
        if (heap[left][1] > heap[parent][1]) break;
        [parent, left, right] = this._change(left, parent, heap);
      } else {
        if (heap[right][1] > heap[parent]) break;
        [parent, left, right] = this._change(right, parent, heap);
      }
    }
  }

  _change(child, parent, heap) {
    const temp = heap[parent];
    heap[parent] = heap[child];
    heap[child] = temp;
    parent = child;
    const left = parent * 2;
    const right = parent * 2 + 1;
    return [parent, left, right];
  }
}

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (input) => {
  const [N, M] = [+input[0], +input[1]]; // 도시 수, 버스 수
  if (N === 1) return 0; // 도시의 개수가 1개면 최소 비용은 없다.
  if (M === 1) {
    const [x, y, cost] = input[2].split(" ").map((v) => +v); // 버스가 1대라면 그 버스의 비용이 정답이다.
    return cost;
  }

  // 그래프 채우기
  const graph = Array.from({ length: N + 1 }, () => []);
  for (let i = 2; i < M + 2; i++) {
    let [start, end, cost] = input[i].split(" ").map((v) => +v);
    graph[start].push([end, cost]);
  }
  const [startpoint, endpoint] = input[M + 2].split(" ").map((v) => +v);

  let heap = new Heap();
  let costs = Array(N + 1).fill(Infinity);
  costs[startpoint] = 0;
  heap.add([startpoint, 0]);

  while (heap.size()) {
    const [node, cost] = heap.pop();
    if (costs[node] !== cost) continue;
    for (let i = 0; i < graph[node].length; i++) {
      const [end, endCost] = graph[node][i];
      if (costs[end] > endCost + cost) {
        costs[end] = endCost + cost;
        heap.add([end, costs[end]]);
      }
    }
  }
  return costs[endpoint];
};

console.log(solution(input));
