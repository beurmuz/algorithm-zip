"use strict";

/**
 * 분할정복 문제
 * 어떻게 잘 풀어냈다 대박
 */
const [n, ...inputs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = (n, inputs) => {
  const video = inputs.map((v) => v.split("").map((vv) => +vv));
  let answer = "";

  const divide = (n, x, y) => {
    let num = video[x][y]; // 현재 값을 num에 저장한다.
    let numCount = 0; // num 개수를 셀 numCount 변수를 선언한다.
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (video[x + i][y + j] === num)
          numCount++; // x는 고정, y만 왼쪽에서 오른쪽으로 점차 키워나간다. (순서가 왼위, 오위, 왼아, 오아이기 때문)
        else break; // num이 아닐경우 반복문을 빠져나온다.
      }
    }
    if (numCount === n * n) {
      // numCount가 n*n의 크기와 같다면
      answer += "" + num; // answer에 num을 더해준다.
    } else {
      answer += "("; // 다르다면 새롭게 분할해 탐색해야하므로 (를 더해준다.
      n /= 2; // 현재 값에서 2로 나누어 새롭게 갱신한다.
      for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
          divide(n, x + i * n, y + j * n); // 새로운 지점을 divide에 넘긴다.
        }
      }
      answer += ")"; // 새롭게 갱신한 값으로 연산이 끝나면 )를 붙여준다.
    }
  };
  divide(n, 0, 0); // 시작은 n, (0,0)이다.
  return answer;
};

console.log(solution(+n, inputs));
