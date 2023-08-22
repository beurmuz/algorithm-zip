/**
 * [해시를 이용한 문제]
 * - 핵심은 중복된 값이 나타났을 때 기존의 값을 삭제하고, 다시 추가함으로써 순서를 유지(오름차순)하는 것이다.
 */

const [inputs, ...students] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (inputs, students) => {
  const [K, L] = inputs.split(" ").map((v) => +v);
  const orderMap = new Map();

  for (let i = 0; i < students.length; i++) {
    if (orderMap.has(students[i])) {
      orderMap.delete(students[i]);
      orderMap.set(students[i], i);
    } else {
      orderMap.set(students[i], i);
    }
  }

  let answer = [];
  let count = 0;

  orderMap.forEach((value, key) => {
    if (count < K) {
      answer.push(key);
      count++;
    }
  });
  return answer.join("\n");
};

console.log(solution(inputs, students));
