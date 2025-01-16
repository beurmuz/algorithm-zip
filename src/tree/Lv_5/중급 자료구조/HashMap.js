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
 * 🔍 ⭐️두 수의 합⭐️ | △, △ | 24.09.02, 25.01.15
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
 * 🔍 ⭐️세 수의 합⭐️ | X | 25.01.15
 * - 배열에서 2개의 원소를 골라 후보로 삼았을 때, K를 만들 수 있을 지는 'K - 두 원소의 합'을 통해 알 수 있다.
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, K] = inputs[0].split(" ").map(Number);
const arr = inputs[1].split(" ").map(Number);

// 각 숫자가 나온 횟수를 기록한다.
const hashmap = new Map();
arr.forEach((num) => {
  if (hashmap.has(num)) hashmap.set(num, hashmap.get(num) + 1);
  else hashmap.set(num, 1);
});

let answer = 0;

// 앞에서부터 순회하며 쌍을 만들어준다.
for (let i = 0; i < N; i++) {
  // '서로 다른 세 위치'에서 숫자를 골라야 하므로, 같은 숫자가 다른 위치에서 다시 선택되지 않도록 중복조합을 방지해야한다.
  // -> 이를 위해 앞에서 이미 나온 적 있는 숫자는 -1로 바꿔줌으로써 이미 한번 사용함을 표시한다.
  if (!hashmap.has(arr[i])) hashmap.set(arr[i], -1); // 없으면 추가
  else hashmap.set(arr[i], hashmap.get(arr[i]) - 1); // 있으면 1개 뺀다
  // 아예 삭제를 해버리면 원래 있었는데 이미 사용한 숫자인지, 아니면 없덛ㄴ 숫자인지 구분할 수가 없다.

  for (let j = 0; j < i; j++) {
    // 이미 순회한 적 있는 값은 hashmap에 없다.
    // 이를 통해 같은 조합이 중복되어 세어지는 것을 방지할 수 있다.
    if (hashmap.has(K - arr[i] - arr[j]))
      answer += hashmap.get(K - arr[i] - arr[j]);
  }
}
console.log(answer);

// ----------------------------------------------------------------------
/**
 * 🔍 자주 등장한 top k 숫자 | O | 25.01.16
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, K] = inputs[0].split(" ").map(Number);
const arr = inputs[1].split(" ").map(Number);

const hashMap = new Map();
arr.forEach((num) => {
  if (hashMap.has(num)) hashMap.set(num, hashMap.get(num) + 1);
  else hashMap.set(num, 1);
});

let countArr = [...hashMap].sort((a, b) => {
  if (b[1] === a[1]) return b[0] - a[0];
  else return b[1] - a[1];
});

let answer = [];
for (let i = 0; i < K; i++) {
  answer.push(countArr[i][0]);
}

console.log(answer.join(" "));
