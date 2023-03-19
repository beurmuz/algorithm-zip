"use strict";

const [input, Aset, Bset] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (input, Aset, Bset) => {
  const [N, M] = input.split(" ").map((v) => +v);

  // a, b를 각각 set으로 만들어준다.
  const aSet = new Set(Aset.split(" ").map((v) => +v));
  const bSet = new Set(Bset.split(" ").map((v) => +v));
  const answer = new Set([...aSet, ...bSet]);

  // 교집합을 삭제한다.
  aSet.forEach((v) => {
    if (bSet.has(v)) answer.delete(v);
  });

  // 삭제하고 남은 answer의 size를 출력한다.
  return answer.size;
};

console.log(solution(input, Aset, Bset));
