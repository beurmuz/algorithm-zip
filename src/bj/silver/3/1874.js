"use strict";

/**
 * 적절히 while문과 push, pop을 이용하면 될 것 같은데 어떻게 while문을 이용해야할지 계속 고민이었다.
 * 원래 값을 넣고 바로 비교하는 방식을 이용하려했으나, 해답을 찾지 못하겠어서 풀이를 참고했다.
 */
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

function solution(inputs) {
  const n = inputs.shift();
  let stack = [];
  let answer = "";
  let num = 1;

  for (let i = 0; i < n; i++) {
    const number = inputs.shift(); // inputs에 있는 맨 앞 값을 shift() 한다.
    while (num <= number) {
      stack.push(num++); // stack에 해당 지점까지의 값을 1개씩 넣는다.
      answer += "+";
    }

    const popValue = stack.pop(); // stack에 넣은 값 중 가장 마지막 값을 pop한다.
    if (popValue !== number) return "NO"; // 만약 pop한 값과 number 값이 다르면 NO를 return한다.
    answer += "-";
  }
  return answer.split("").join("\n");
}
console.log(solution(inputs));
