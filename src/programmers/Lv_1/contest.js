"use strict";

// 1. 처음에 푼 풀이 (정확성 19.2 / 100.0)
/**
 * 1 ~ k일까지의 명예의 전당 목록 따로 구하고,
 * k ~ score.length까지 명예의 전당 목록 따로 구하기
 *
 * => 틀린이유는 아마 매일매일의 명예의 전당을 구해야하는데, 1일부터 k일까지의 명예의 전당에서 최솟값으로 다 채워줘서 틀린것 같다.
 */

function solution(k, score) {
  let answer = [];

  // 0 ~ k-1 명예의 전당 목록 구성하기
  let kScore = score.slice(0, k); // 원본 배열을 수정하지 않고 그대로 복사
  kScore.sort((a, b) => b - a);
  for (let i = 0; i < k; i++) {
    answer.push(kScore[k - 1]);
  }

  // k ~ score.length까지 명예의 전당 목록 구성하기
  for (let i = k; i < score.length; i++) {
    let dayScore = score[i]; // 오늘 출연한 가수의 점수
    if (kScore[k - 1] <= dayScore) {
      kScore[k - 1] = dayScore;
      kScore.sort((a, b) => b - a);
    }
    answer.push(kScore[k - 1]);
  }
  return answer;
}

// 2. 1번의 코드를 1차 수정한 코드
/**
 * 매일매일의 명예의 전당을 새롭게 update 하는 방법으로 바꿈
 */
function solution(k, score) {
  let answer = [];
  let kScore = [];

  // 0 ~ k-1 명예의 전당 목록 구성하기
  for (let i = 0; i < k; i++) {
    kScore.push(score[i]);
    answer.push(Math.min(...kScore)); // kScore에 있는 최솟값을 answer에 push함
  }
  kScore.sort((a, b) => b - a); // 내림차순 정렬

  // k ~ score.length까지 명예의 전당 목록 구성하기
  for (let i = k; i < score.length; i++) {
    let dayScore = score[i]; // 오늘 출연한 가수의 점수
    if (kScore[k - 1] <= dayScore) {
      kScore[k - 1] = dayScore;
      kScore.sort((a, b) => b - a);
    }
    answer.push(kScore[k - 1]);
  }
  return answer;
}

// 3. 최종 수정 풀이
/**
 * 반복문을 한번만 사용하는 걸로 바꿈
 * 2번 코드는 테케9, 11 이 통과되지 않았는데 이건 왜 되는거지?
 * 시간복잡도: 정렬을 해주므로 O(nlogn)?
 */
function solution(k, score) {
  let answer = [];
  let kScore = [];

  for (let i = 0; i < score.length; i++) {
    if (i < k) {
      kScore.push(score[i]);
    }
    if (score[i] >= Math.min(...kScore)) {
      kScore.pop(); // 맨 뒤 값(가장 작은 값)을 pop
      kScore.push(score[i]); // 오늘 출연 가수의 점수를 push
      kScore.sort((a, b) => b - a);
    }
    answer.push(kScore.at(-1)); // kScore[kScore.length-1] 과 같음
  }
  return answer;
}
