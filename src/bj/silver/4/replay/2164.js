"use strict";

/**
 * 처음에 푼 풀이 - 시간초과
 */
let n = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(n) {
  let queue = Array.from({ length: n }, (v, i) => ++i);

  while (queue.length > 1) {
    queue.shift(); // 맨 위에 있는거 버리기
    let head = queue.shift();
    queue.push(head);
  }
  return queue[0];
}

console.log(solution(n));

/**
 * queue를 이용하는게 아닌, linked list를 이용해야 한다.
 */
let n = require("fs").readFileSync("/dev/stdin").toString().trim();

class Node {
  constructor(value) {
    this.value = value;
    this.next = null; // 다음
    this.prev = null; // 전
  }
}

class LinkedList {
  constructor() {
    this.head = null; // 아직 가리키고 있는 것과
    this.tail = null; // 연결되어 있는 값이 없다.
    this._size = 0;
  }

  add(value) {
    const newNode = new Node(value); // Node class를 이용해서 새 Node를 만든다.

    if (!this.head) this.head = newNode; // head 값이 없다면 newNode와 연결한다.
    else {
      // now[ , , newNode ] - newNode[ now.tail , , ];
      this.tail.next = newNode; // newNode를 해당 노드의 꼬리에 달고
      newNode.prev = this.tail; // 현재 값의 tail을 newNode.prev와 연결한다.
    }
    this.tail = newNode;
    this._size++;
  }
  getHead() {
    return this.head.value;
  }

  removeHead() {
    this.head = this.head.next;
    this.head.prev = null;
    this._size--;
  }
  getSize() {
    return this._size;
  }
}
const node = new LinkedList();

for (let i = 1; i <= n; i++) {
  node.add(i);
}
while (node.getSize() !== 1) {
  node.removeHead();
  node.add(node.getHead());
  node.removeHead();
}

console.log(node.getHead());
