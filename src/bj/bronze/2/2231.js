"use strict";

let n = +require("fs").readFileSync("/dev/stdin").toString();

function solution(n) {
  const constructorArr = []; // 생성자들을 저장할 배열

  // 1부터 n까지 순회한다.
  for (let i = 1; i <= n; i++) {
    if (findConstructor(i) === n) constructorArr.push(i); // i+i의 분해값이 n과 같은 경우마다 constructorArr에 push해준다.
  }

  let answer = constructorArr.length ? Math.min(...constructorArr) : 0;
  return answer;
}

function findConstructor(n) {
  const N = ("" + n).split("");
  return n + N.reduce((acc, num) => (acc += num * 1), 0);
}

console.log(solution(n));
