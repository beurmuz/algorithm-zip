"use strict";

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let n = +input.shift();
let timetable = input.map((v) => {
  let [time, price] = v.split(" ").map((v) => +v);
  return [time, price];
});

let dp = Array.from({ length: n + 1 }).fill(0);

for (let i = 0; i < n; i++) {
  const [day, price] = timetable[i];
  if (i + day > n) continue; // 현재 날짜 + 기간이 n을 넘으면 상담 불가
  dp[i] += price;
  console.log(dp);

  for (let j = i + day; j < n; j++) {
    console.log(
      `현재 금액은 dp[${j}]: ${dp[j]}, ${i}일 뒤에 받게 될 금액은 dp[${i}]: ${dp[i]}`
    );
    dp[j] = Math.max(dp[j], dp[i]); // 현재 금액, i일 뒤에 받게 될 금액 비교
  }
}

console.log(Math.max(...dp));
