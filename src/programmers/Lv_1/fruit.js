"use strict";

// 1. 처음에 푼 풀이
/*
    slice로 잘라서 최솟값 찾아 더하기
    - 정확성 79.2/100으로 시간초과문제 몇개 남
*/
function solution(k, m, score) {
  let answer = 0;
  score.sort((a, b) => b - a);

  while (score.length) {
    let oneBox = score.splice(0, m);
    if (oneBox.length === m) answer += Math.min(...oneBox) * m;
    else break;
  }
  return answer;
}

// 2. 다시 푼 풀이
/*
    - for문, index를 이용해서 풀기
    - splice를 이용하지 않기 때문에 위 코드의 1/4 정도로 속도를 줄일 수 있었음
*/
function solution(k, m, score) {
  let answer = 0;
  score.sort((a, b) => b - a); // 내림차순. m개씩 잘랐을 때 가장 마지막 값이 최솟값

  let index = m - 1;
  for (let i = 0; i < Math.floor(score.length / m); i++) {
    answer += score[index] * m;
    index += m;
  }
  return answer;
}
