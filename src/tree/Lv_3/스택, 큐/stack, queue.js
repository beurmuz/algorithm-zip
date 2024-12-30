// ----------------------------------------------------------------------
/**
 * 🔍 정수 명령 처리 | O | 24.12.31 🔍
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const preNode = this.top; // 기존의 최상단 값을 preNode에 저장
      this.top = newNode; // 최상단을 새로 들어온 value로 갱신
      this.top.next = preNode; // top의 바로 아래에는 preNode가 있음
    }
    this.length += 1;
  }

  pop() {
    if (!this.top) {
      // 아무것도 없는 상태
      return null;
    }
    if (this.top === this.bottom) {
      // 1개만 있는 경우
      this.bottom = null;
    }
    const removeNode = this.top;
    this.top = this.top.next;
    this.length--;
    return removeNode.value;
  }

  size() {
    return this.length;
  }

  empty() {
    if (this.length === 0) return 1;
    else return 0;
  }
}

const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const stack = new Stack();

for (let i = 1; i <= N; i++) {
  let [command, num] = inputs[i].split(" ");
  num = num ? Number(num) : 0;
  if (command === "push") {
    stack.push(num);
  } else if (command === "pop") {
    console.log(stack.pop());
  } else if (command === "empty") {
    console.log(stack.empty());
  } else if (command === "size") {
    console.log(stack.size());
  } else if (command === "top") {
    console.log(stack.top.value);
  }
}
