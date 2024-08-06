// ----------------------------------------------------------------------
/**
 * 🔍 정수 명령 처리 8 | O | 24.08.06 🔍
 *
 * [배열, 연결리스트 - Doubly-LinkedList]
 */
let inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const commands = inputs.slice(1);

class Node {
  constructor(value) {
    this.prev = null;
    this.value = value;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.listLength = 0;
  }

  push_front(newValue) {
    const newNode = new Node(newValue);
    newNode.next = this.head;

    if (this.head !== null) {
      this.head.prev = newNode;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.prev = null;
    this.listLength += 1;
  }

  push_back(newValue) {
    const newNode = new Node(newValue);
    newNode.prev = this.tail;

    if (this.tail !== null) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = null;
    this.listLength += 1;
  }

  pop_front() {
    const tmp = this.head;

    if (this.head.next == null) {
      this.head = null;
      this.tail = null;
      this.listLength = 0;
    } else {
      tmp.next.prev = null;
      this.head = tmp.next;
      tmp.next = null;
      this.listLength -= 1;
    }
    return tmp.value;
  }

  pop_back() {
    const tmp = this.tail;

    if (this.tail.prev == null) {
      this.head = null;
      this.tail = null;
      this.listLength = 0;
    } else {
      tmp.prev.next = null;
      this.tail = tmp.prev;
      tmp.prev = null;
      this.listLength -= 1;
    }
    return tmp.value;
  }

  size() {
    return this.listLength;
  }

  empty() {
    return this.listLength === 0 ? 1 : 0;
  }

  front() {
    return this.head.value;
  }

  back() {
    return this.tail.value;
  }
}

const DLL = new DoublyLinkedList();

for (let i = 0; i <= N; i++) {
  let [command, num] = inputs[i].split(" ");
  if (num) num = Number(num);

  if (command === "push_back") DLL.push_back(num);
  else if (command === "push_front") DLL.push_front(num);
  else if (command === "pop_front") console.log(DLL.pop_front());
  else if (command === "pop_back") console.log(DLL.pop_back());
  else if (command === "size") console.log(DLL.size());
  else if (command === "empty") console.log(DLL.empty());
  else if (command === "front") console.log(DLL.front());
  else if (command === "back") console.log(DLL.back());
}
