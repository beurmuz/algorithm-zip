/**
 * [이분탐색 문제]
 * - 언제 포인터를 증가해야할지 한참 고민했다.
 */

let inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (inputs) => {
  const [lenA, lenB] = inputs[0].split(" ").map((v) => +v);
  const arrA = inputs[1]
    .split(" ")
    .map((v) => +v)
    .sort((a, b) => a - b);
  const arrB = inputs[2]
    .split(" ")
    .map((v) => +v)
    .sort((a, b) => a - b);

  let [at, bt] = [0, 0];
  let answer = [];

  while (at < lenA && bt < lenB) {
    if (arrA[at] < arrB[bt]) {
      answer.push(arrA[at]);
      at++;
    } else if (arrA[at] > arrB[bt]) {
      bt++;
    } else {
      at++;
      bt++;
    }
  }

  // 남은 A 넣기
  for (let i = at; i < lenA; i++) {
    answer.push(arrA[i]);
  }

  console.log(answer.length);
  if (answer.length > 0) console.log(answer.join(" "));
};

solution(inputs);
