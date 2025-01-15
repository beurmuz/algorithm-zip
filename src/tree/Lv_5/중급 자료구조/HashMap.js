// ----------------------------------------------------------------------
/**
 * 🔍 hashmap 기본 | O | 24.09.01
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const commands = inputs.slice(1);

const hashmap = new Map();
commands.forEach((line) => {
  let [command, key, value] = line.split(" ");
  key = Number(key);
  value = Number(value);

  if (command === "add") {
    hashmap.set(key, value);
  } else if (command === "find") {
    if (hashmap.has(key)) console.log(hashmap.get(key));
    else console.log("None");
  } else if (command === "remove") {
    hashmap.delete(key);
  }
});

// ----------------------------------------------------------------------
/**
 * 🔍 숫자 등장 횟수 | O | 24.09.01
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M] = inputs[0].split(" ").map(Number);
const infos = inputs[1].split(" ").map(Number);
const finds = inputs[2].split(" ").map(Number);

const map = new Map();
infos.forEach((num) => {
  if (map.has(num)) map.set(num, map.get(num) + 1);
  else map.set(num, 1);
});

let answer = finds.map((num) => {
  if (map.has(num)) return map.get(num);
  else return 0;
});

console.log(answer.join(" "));

// ----------------------------------------------------------------------
/**
 * 🔍 가장 많은 데이터 | O | 24.09.02
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const datas = inputs.slice(1);

const hashmap = new Map();
datas.forEach((data) => {
  if (hashmap.has(data)) hashmap.set(data, hashmap.get(data) + 1);
  else hashmap.set(data, 1);
});

const arr = [...hashmap];
arr.sort((a, b) => b[1] - a[1]);
console.log(arr[0][1]);

// ----------------------------------------------------------------------
/**
 * 🔍 대응되는 수와 문자 | O | 24.09.02
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M] = inputs[0].split(" ").map(Number);

const hashMap = new Map();
for (let i = 1; i <= N; i++) {
  hashMap.set(inputs[i], i);
  hashMap.set(String(i), inputs[i]);
}

for (let i = N + 1; i < inputs.length; i++) {
  console.log(hashMap.get(inputs[i]));
}

// ----------------------------------------------------------------------
/**
 * 🔍 두 수의 합 | △, △ | 24.09.02, 25.01.15
 *  - 시간복잡도는 O(N)
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, K] = inputs[0].split(" ").map(Number);
const arr = inputs[1].split(" ").map(Number);

const hashmap = new Map();
let answer = 0;

arr.forEach((num) => {
  let diff = K - num;
  // diff가 있으면 현재 num과 짝을 이뤄준다.
  if (hashmap.has(diff)) answer += hashmap.get(diff);

  // num을 hashmap에 추가해준다.
  if (hashmap.has(num)) hashmap.set(num, hashmap.get(num) + 1);
  else hashmap.set(num, 1);
});
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 세 수의 합 | O |
 */
