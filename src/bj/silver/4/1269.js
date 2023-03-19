"use strict";

const [input, Aset, Bset] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (input, Aset, Bset) => {
  const [N, M] = input.split(" ").map((v) => +v);

  // a, b에 대해 각각 중복을 제거한다.
  const aSet = new Set(Aset.split(" ").map((v) => +v));
  const bSet = new Set(Bset.split(" ").map((v) => +v));
  const answer = new Set([...aSet, ...bSet]);

  // a에 있는 값이 b에 있다면, answer에서 삭제한다.
  aSet.forEach((v) => {
    if (bSet.has(v)) answer.delete(v);
  });
  return answer.size;
};

console.log(solution(input, Aset, Bset));
