// ----------------------------------------------------------------------
/**
 * 🔍 hashset 기본 | O | 25.01.21
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const hashset = new Set();

for (let i = 1; i < inputs.length; i++) {
  let [command, num] = inputs[i].split(" ");
  num = Number(num);

  if (command === "add") hashset.add(num);
  else if (command === "remove") hashset.delete(num);
  else if (command === "find") console.log(hashset.has(num));
}

// ----------------------------------------------------------------------
/**
 * 🔍 데이터 비교 | O | 25.01.21
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const arr1 = inputs[1].split(" ").map(Number);
const M = Number(inputs[2]);
const arr2 = inputs[3].split(" ").map(Number);

const set1 = new Set(arr1);
const set2 = new Set(arr2);

let answer = [];
for (let el of arr2) {
  if (set1.has(el)) answer.push(1);
  else answer.push(0);
}

console.log(answer.join(" "));
