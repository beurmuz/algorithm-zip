"use strict";

const n = require("fs").readFileSync("/dev/stdin").toString().trim();

const solution = (n) => {
  const answer = [];
  let queue = Array.from({ length: n }, (_, index) => ++index);
  while (queue.length > 1) {
    answer.push(queue.shift()); // 맨 앞에 있는 카드를 버린다.
    queue.push(queue.shift()); // 카드를 버린 후 그 다음에 있는 카드를 맨 뒤로 옮긴다.
  }
  answer.push(queue[0]); // 마지막에 있는 카드를 answer에 넣는다.
  return answer.join(" ");
};

console.log(solution(+n));
