"use strict";

/**
 * 풀이 방법
 * - S4|12873|기념품이랑 똑같이 풀면 된다.
 * - => 둘다 '원형 큐' 문제로, queue에서 k번째에 해당하는 수를 제거한 후, 새롭게 k번째에 오는 수부터 다시 k번째를 찾는다.
 * -    다른 풀이를 보면 다들 array.push, pop을 사용했지만, 나는 수학으로 해결했다.
 */
const [n, k] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

const solution = (n, k) => {
  const answer = [];
  let circleQueue = Array.from({ length: n }, (_, index) => ++index);
  let start = 0;

  for (let i = 0; i < n; i++) {
    let index = (k - 1) % circleQueue.length; // 몇번째에 있는 애를 찾을거니? (3번째 % 원형 큐 길이)
    index = (index + start) % circleQueue.length; // (2 + 0) % 원형큐 길이
    answer.push(circleQueue.splice(index, 1));
    start = index; // 2
  }
  return `<${answer.join(", ")}>`;
};

console.log(solution(n, k));
