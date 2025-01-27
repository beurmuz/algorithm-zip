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
 * 🔍 ⭐️초대장과 번호표⭐️ | X, △ | 25.01.24, 01.27
 */
class Queue {
  constructor() {
    this.q = [];
    this.head = -1;
    this.tail = -1;
  }

  push(item) {
    this.q.push(item);
    this.tail += 1;
  }

  pop() {
    if (this.empty()) throw new Error("queue is empty");
    return this.q[++this.head];
  }

  empty() {
    return this.head === this.tail ? true : false;
  }

  size() {
    return this.tail - this.head;
  }

  front() {
    if (this.empty()) throw new Error("queue is empty");
    return this.q[this.head + 1];
  }
}

const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, G] = inputs[0].split(" ").map(Number);
const infos = inputs.slice(1).map((line) => line.split(" ").map(Number));

const invited = Array(N);

// 그룹마다 초대장을 받지 못한 사람들 관리하기
const groups = Array.from({ length: G }, () => new Set());
// 각 사람이 어떤 그룹에 속하는지 관리하기
const personPerGroups = Array.from(Array(N), () => []);

const q = new Queue();
let answer = 0;

for (let i = 0; i < G; i++) {
  for (let j = 1; j < infos[i].length; j++) {
    person = infos[i][j] - 1; // 각 번호 - 1을 해준다.
    // 그룹 i에 사람 person을 넣어준다.
    groups[i].add(person);
    // 사람 person이 속한 그룹 정보를 넣는다.
    personPerGroups[person].push(i);
  }
}

// bfs로 1번을 시작으로 무조건 초대된 사람들을 찾는다.
q.push(0); // 1번은 항상 초대장을 받는다.
invited[0] = true; // 1번은 초대를 받았음!

while (!q.empty()) {
  const person = q.pop();
  answer += 1;

  // person이 들어있는 그룹에서 person을 지운다.
  // groups set에는 그룹에서 초대받지 않은 인원들만 남긴다.
  for (let groupNum of personPerGroups[person]) {
    // person이 속해있는 그룹 정보들이 들어있는 personPerGroups을 순회하면서 person 정보를 삭제한다.
    groups[groupNum].delete(person);

    // person을 제거한 후, 속해있던 해당 그룹에 남은 인원이 1명뿐이면, 이 사람도 초대받는 것이 확정됩니다.
    if (groups[groupNum].size === 1) {
      // 그룹에서 아직 초대받지 않은 사람 중 유일하게 남은 사람을 선택한다.
      const restPerson = Array.from(groups[groupNum])[0];
      // group[groupNum]은 특정 그룹 번호에 속한 초대받지 않은 사람들의 Set
      // Array.from을 해준 이유는 Set이 순서가 없는 데이터 구조로, 배열처럼 인덱스로 접근할 수 없기 때문
      // -> Array.from()은 Set을 배열로 변환한다. Set(1, 2) -> [1, 2]
      // -> 즉 배열로 변환 후 가장 맨 앞인 [0] 위치에 있는 값을 선택하기 위함이다.
      if (!invited[restPerson]) {
        invited[restPerson] = true;
        q.push(restPerson);
      }
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
