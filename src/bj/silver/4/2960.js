"use strict";

// 에라토스테네스 체로 소수를 구하면 O(nlog logn)의 시간 복잡도로 문제를 해결할 수 있다고 한다.
// 그냥 2~n까지 직접 나누는 방법을 사용하면 O(n)의 시간 복잡도를 갖게 된다.
let [n, k] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);
let arr = [];
let count = 0;

for (let i = 0; i <= n; i++) {
  arr.push(i);
}

for (let i = 2; i <= n; i++) {
  for (let j = i; j <= n; j += i) {
    if (arr[j] === 0) continue;
    arr[j] = 0;
    count += 1;
    if (count == k) {
      console.log(j);
      break;
    }
  }
}
