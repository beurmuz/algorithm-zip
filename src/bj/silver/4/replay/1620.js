"use strict";

/**
 * indexOf를 이용하면 시간초과가 나는 듯 하다.
 * 여러 개 제출했지만 시간초과를 막으려면 처음에 inputs값을 받아올 때 /\s/를 기준으로 split을 해야한다.
 *
 * 그리고 중요한 것! answer 배열 생성 후, 그 배열에 값을 모아 한번에 join하는 방법이 console.log하는 것 보다 빠르다.
 */
let inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/); // split을 이렇게 해주어야 시간초과가 안남

const solution = (inputs) => {
  let n = +inputs[0];
  let m = +inputs[1];
  const monsterArr = inputs.slice(2, n + 2); // n, m도 한 줄로 들어오므로 범위를 2부터 n+2까지로 한다.
  const monsterMap = new Map(monsterArr.map((v, i) => [v, i + 1])); // arr를 map으로 생성한다. 이때 index를 함께 저장한다.
  const questions = inputs.slice(n + 2); // n+2부터 끝까지가 문제에 해당한다.
  const answer = questions.map((v) => {
    if (Number.isNaN(+v))
      // 문자일 때 index 번호를 가져온다.
      return monsterMap.get(v);
    else return monsterArr[+v - 1];
  });

  return answer.join("\n");
};

console.log(solution(inputs));
