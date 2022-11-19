"use strict";

function solution(n, k) {
  let answer = 0;
  let queue = Array.from({ length: n }, (value, index) => ++index);
  let count = 0;

  while (queue.length) {
    for (let i = 1; i < k; i++) {
      queue.push(queue.shift());
    }
    if (queue.length === 1) {
      answer = queue.shift();
      break;
    }
    queue.shift();
    console.log(`-------${++count} Term, ${[...queue]}`);
  }
  return answer;
}
console.log(solution(8, 3));
