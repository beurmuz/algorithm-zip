// ----------------------------------------------------------------------
/**
 * 🔍 정수 명령 처리 5 | O | 24.05.27 🔍
 *
 * [배열, 연결리스트 - Dynamic Array]
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
let arr = [];

function push_back(num) {
  arr.push(num);
}

function pop_back() {
  arr.pop();
}

function size() {
  return arr.length;
}

function get(idx) {
  return arr[idx - 1];
}

for (let i = 1; i <= N; i++) {
  let [funcs, num] = inputs[i].split(" ");
  if (num) Number(num);

  if (funcs === "push_back") {
    push_back(num);
  } else if (funcs === "get") {
    console.log(get(num));
  } else if (funcs === "size") {
    console.log(size());
  } else if (funcs === "pop_back") {
    pop_back();
  }
}
