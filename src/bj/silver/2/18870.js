"use strict";

let [n, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
input = ("" + input).split(" ").map((v) => +v);

const answer = [];
const set = Array.from(new Set([...input])).sort((a, b) => a - b); // 중복 제거 및 오름차순 정렬
const object = {};

set.forEach((item, index) => (object[item] = index)); // 정렬 시의 순서를 object[item]에 저장

for (let i = 0; i < input.length; i++) {
  answer.push(object[input[i]]); // 정렬 시 순서 출력
}

console.log(answer.join(" "));
