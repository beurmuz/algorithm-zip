"use strict";
// 처음 푼 풀이 - 시간 초과남
/*
    배열을 이용하기 때문에 push, shift 하는 과정에서 시간 복잡도가 급격히 커진다.
    push는 큰 문제가 없지만 shift 시 뒤의 값들을 앞으로 다 당겨와야 하기 때문이다.
*/
const input = require("fs").readFileSync("/dev/stdin").toString();
let arr = Array(input * 1);
for (let i = 0; i < input * 1; i++) {
  arr[i] = i + 1;
}

while (arr.length > 1) {
  if (arr.length === 1) return arr;
  arr.shift(); // 우선 하나 빼기
  let front = arr.shift();
  arr.push(front);
}

console.log(...arr);

// 다시 푼 풀이 - LinkedList 이용하기
const input = require("fs").readFileSync("/dev/stdin").toString();
const n = parseInt(input);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  add(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    this.tail = newNode;
    this._size++;

    return newNode;
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
