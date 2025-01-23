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
 * 🔍 ⭐️C-TAG⭐️ | X | 25.01.23
 *
 * 조합이 정해지면 A의 문자열들을 전부 ableSet에 넣는다.
 * 이후 B에 대해 문자열을 만들고, 이 문자열이 ableSet에 있는지 확인한다.
 *
 * 가능한 모든 조합의 수는 O(M^3). 각 조합에 대해 그룹 A, B 정보 탐색 시 O(N)
 * 총 시간 복잡도는 O(NM^3)
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M] = inputs[0].split(" ").map(Number);
const A = inputs.slice(1, N + 1);
const B = inputs.slice(N + 1);

let answer = 0;
const ableSet = new Set();

function testDivide(x, y, z) {
  // x, y, z번째 자릿수를 선택했을 때 A와 B 그룹이 완벽하게 나뉘면 true를 반환한다.
  ableSet.clear();

  // A의 원소를 전부 HashSet에 넣는다.
  for (let i = 0; i < N; i++) {
    ableSet.add(A[i][x] + A[i][y] + A[i][z]);
  }

  // B의 원소 중 하나라도 A와 같은 경우가 있다면 -> 구분할 수 X
  for (let i = 0; i < N; i++) {
    if (ableSet.has(B[i][x] + B[i][y] + B[i][z])) return false;
  }
  return true;
}

// 서로 다른 세 자리의 조합을 모두 순회한다.
for (let i = 0; i < M; i++) {
  for (let j = i + 1; j < M; j++) {
    for (let k = j + 1; k < M; k++) {
      // 두 그룹을 완벽히 나눌 수 있는지 확인한다.
      if (testDivide(i, j, k)) answer += 1;
    }
  }
}

console.log(answer);

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
