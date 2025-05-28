// ----------------------------------------------------------------------
/**
 * 🔍 미는 횟수 | O | 25.05.28
 */
let [A, B] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
A = A.split("");

let answer = -1;
for (let N = 1; N < A.length; N++) {
  A.unshift(A.pop());
  if (A.join("") === B) {
    answer = N;
    break;
  }
}

console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 문자열 개수 | O | 25.05.28
 */
let inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
inputs.pop();
console.log(inputs.length);

for (let i = 0; i < inputs.length; i++) {
  if (i % 2 === 0) console.log(inputs[i]);
}

// ----------------------------------------------------------------------
/**
 * 🔍 문자열 놀이 | △ | 25.05.28
 * - 문자열은 index로 특정 index 위치의 값을 바꿀 수 없으므로 배열화를 해준 후 문자를 바꾼 후, 다시 join("") 해야 함
 */
let inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let [S, Q] = inputs[0].split(" ");
Q = Number(Q);
let questions = inputs.slice(1);

function exchangeChar(a, b) {
  let newS = S.split("");
  [newS[a], newS[b]] = [newS[b], newS[a]];
  let answer = newS.join("");
  S = answer;
  return S;
}

function changeChar(x, y) {
  let newS = S.split("");
  for (let i = 0; i < S.length; i++) {
    if (newS[i] === x) newS[i] = y;
  }
  S = newS.join("");
  return S;
}

questions.forEach((line) => {
  let q = line.split(" ");
  if (Number(q[0]) === 1) {
    let a = Number(q[1]);
    let b = Number(q[2]);
    console.log(exchangeChar(a - 1, b - 1));
  } else if (Number(q[0]) === 2) {
    let x = q[1];
    let y = q[2];
    console.log(changeChar(x, y));
  }
});
