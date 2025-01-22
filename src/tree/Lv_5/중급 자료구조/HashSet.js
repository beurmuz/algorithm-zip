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

// ----------------------------------------------------------------------
/**
 * 🔍 서로 다른 숫자 | O | 25.01.21
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const arr = inputs[1].split(" ").map(Number);
const sets = new Set(arr);

console.log(sets.size);

// ----------------------------------------------------------------------
/**
 * 🔍 정수 찾기 | O | 25.01.21
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = Number(inputs[0]);
const A = new Set(inputs[1].split(" ").map(Number));
const M = Number(inputs[2]);
const B = inputs[3].split(" ").map(Number);

B.forEach((num) => {
  if (A.has(num)) console.log(1);
  else console.log(0);
});

// ----------------------------------------------------------------------
/**
 * 🔍 자리 바꾸기2 | O | 25.01.22
 * - ⭐️ 맞았지만 한번 더 풀기
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, K] = inputs[0].split(" ").map(Number);
const changes = [];
for (let i = 1; i < inputs.length; i++) {
  changes.push(inputs[i].split(" ").map(Number));
}

const nowPos = Array.from({ length: N + 1 }, (v, i) => i);
const posLogs = Array.from({ length: N + 1 }, (v, i) => new Set([i]));

for (let i = 0; i < 3 * K; i++) {
  // 자리 바꾸기
  let [a, b] = changes[i % K];
  [nowPos[a], nowPos[b]] = [nowPos[b], nowPos[a]];

  // 어차피 set은 중복을 허용한다.
  // 자리를 이동한 후, 현재 위치가 b인 곳에 있는 애는 b번 자리에 갈 수 있게 된 것.
  posLogs[nowPos[b]].add(b);
  // 자리를 이동한 후, 현재 위치가 a인 곳에 있는 애는 a번 자리에 갈 수 있게 된 것.
  posLogs[nowPos[a]].add(a);
}

// 정답 출력
for (let i = 1; i <= N; i++) {
  console.log(posLogs[i].size);
}

// ----------------------------------------------------------------------
/**
 * 🔍 대칭 차집합 | O | 25.01.21
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [an, bn] = inputs[0].split(" ").map(Number);
const A = inputs[1].trim().split(" ").map(Number);
const B = inputs[2].trim().split(" ").map(Number);

let answer = an + bn;
const setA = new Set(A);

B.forEach((num) => {
  if (setA.has(num)) answer -= 2;
});
console.log(answer);
