"use strict";

const [N, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const sumOfDigits = (str) => {
  // 1. /[\d]/g(정규식)으로 모든 숫자를 찾는다.
  // 2. ?.(옵셔널 체이닝)으로 프로퍼티가 없는 객체 or 빈 배열에 접근할 때에는 undefined를 리턴하게 한다.
  // 3. reduce로 배열에 있는 모든 숫자를 다 더해준다. (초기값은 0)
  // 4. || 0 을 해주어 만약 숫자가 없을 경우(옵셔널 체이닝이 undefined를 리턴하면) 0을 리턴하게 한다.
  return str.match(/[\d]/g)?.reduce((acc, v) => acc + +v, 0) || 0;
};

const solution = (N, input) => {
  const answer = input.sort((a, b) => {
    // 1. a, b중 길이가 짧은게 앞에 온다.
    if (a.length != b.length) return a.length - b.length;

    // 2. 길이가 같으면 모든 숫자 자릿수 합을 비교한다.
    let sumA = sumOfDigits(a);
    let sumB = sumOfDigits(b);

    // 3. 모든 숫자 자릿수 합도 같으면 사전순으로 출력한다.
    if (sumA == sumB) return a.localeCompare(b);

    // 길이가 다르면 작은 합이 앞에 온다.
    return sumA - sumB;
  });
  return answer.join("\n");
};

console.log(solution(N, input));
