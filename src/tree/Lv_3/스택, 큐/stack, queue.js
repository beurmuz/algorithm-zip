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

// ----------------------------------------------------------------------
/**
 * 🔍 괄호 문자열의 적합성 판단 | O | 24.12.31 🔍
 */
let input = require("fs").readFileSync("/dev/stdin").toString().trim();
let stack = [];

for (let v of input) {
  if (v === "(") stack.push("(");
  else {
    if (stack.length === 0) {
      console.log("No");
      return; // ✅ return이 호출되면 코드 실행이 즉시 중단되고, 이후의 코드는 실행되지 않음
    }
    stack.pop();
  }
}

console.log(stack.length === 0 ? "Yes" : "No");

// ----------------------------------------------------------------------
/**
 * 🔍 원형 순열에서의 인원 제거 | O | 24.12.31 🔍
 */
let [N, K] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
let queue = Array.from({ length: N }, (v, i) => ++i);
let answer = [];

while (queue.length) {
  for (let i = 0; i < K - 1; i++) {
    queue.push(queue.shift());
  }
  answer.push(queue.shift());
}

console.log(answer.join(" "));

// ----------------------------------------------------------------------
/**
 * 🔍 정수 명령 처리 2 | O | 25.01.01 🔍
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) this.front = newNode;
    else this.tail.next = newNode;

    this.tail = newNode;
    this.length += 1;
  }

  pop(value) {
    if (!this.front) {
      // 빈 큐
      return null;
    }

    if (this.front === this.tail) {
      // 원소가 한개인 경우
      this.tail = null;
    }

    let popValue = this.front.value;
    this.front = this.front.next;
    this.length -= 1;
    return popValue;
  }

  size() {
    return this.length;
  }

  empty() {
    return this.length === 0 ? 1 : 0;
  }

  getFront() {
    return this.front.value;
  }
}

let [N, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
N = Number(N);

let queue = new Queue();

for (let v of inputs) {
  let [command, num] = v.split(" ");
  num = Number(num);

  if (command === "push") {
    queue.push(num);
  } else if (command === "pop") {
    console.log(queue.pop());
  } else if (command === "size") {
    console.log(queue.size());
  } else if (command === "empty") {
    console.log(queue.empty());
  } else {
    console.log(queue.getFront());
  }
}
