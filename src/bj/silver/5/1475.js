"use strict";

// 처음에 푼 풀이 => 6과 9의 개수가 포인트인데 그냥 큰 값만 찾아내서 오류난 듯 하다.
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("")
  .map((v) => +v);
let hashMap = new Map();

for (let i = 0; i < input.length; i++) {
  if (!hashMap.has(input[i])) hashMap.set(input[i], 1);
  else {
    hashMap.set(input[i], hashMap.get(input[i]) + 1);
  }
}

let maxKey = -1,
  maxValue = 0;
for (let [key, value] of hashMap) {
  if (maxValue < value) {
    maxValue = value;
    maxKey = key;
  }
}

if (maxKey === -1) console.log(0);

if (maxKey === 9 || maxKey === 6) {
  if (maxValue % 2 === 0) {
    console.log(maxValue / 2);
  }
} else {
  console.log(maxValue);
}

// 다시 푼 풀이 => 해답 찾아보다가 발견한 더 쉬운 풀이
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("")
  .map((v) => +v);
let arr = new Array(10).fill(0);

for (let i of input) {
  arr[i] += 1;
}

// Math.floor를 하고 +1을 한 코드가 Math.ceil을 했을때보다도 4ms 더 빠르고 4KB만큼의 메모리를 절약할 수 있다.
arr[6] =
  (arr[6] + arr[9]) % 2 === 0
    ? (arr[6] + arr[9]) / 2
    : Math.floor((arr[6] + arr[9]) / 2) + 1;
arr[9] = 0;

console.log(Math.max(...arr));
