"use strict";

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let n = input[0].split(" ")[0]; // 총 입력 받을 걸그룹의 수 N
let m = input[0].split("")[2]; // 맞혀야 할 문제의 수 M
let index = 1;
let group_member = 0;
let group_name = new Map();
let member = new Map();

for (let i = 0; i < n; i++) {
  group_name.set(input[index], input[index + 1]);
  group_member = Number(input[index + 1]);

  for (let j = 0; j < group_member; j++) {
    member.set(input[index + 2 + j], input[index]);
  }
  index = index + 2 + group_member;
}

let member_sort = new Map([...member.entries()].sort());

// 퀴즈 시작
for (let j = 0; j < m; j++) {
  if (Number(input[index + 1]) === 1) {
    console.log(member.get(input[index]));
    index += 2;
  } else {
    for (let [k, v] of member_sort) {
      if (v === input[index]) {
        console.log(k);
      }
    }
    index += 2;
  }
}
