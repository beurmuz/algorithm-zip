/**
 * 문제를 제대로 이해하지 못해서 또 헤맸다.
 */

function solution(N, stages) {
  let answer = [];

  for (let i = 1; i <= N; i++) {
    // N: 스테이지의 개수
    let finished = 0; // 도달한 사람 수
    let notFinished = 0;

    for (let j = 0; j < stages.length; j++) {
      if (stages[j] >= i) finished++; // 도달한 경우
      if (stages[j] === i) notFinished++; // 도달하지 못한 경우
    }
    answer.push([i, notFinished / finished]);
  }
  answer.sort((a, b) => b[1] - a[1]); // 실패율이 높은 순서로 정렬한다.
  return answer.map((stage) => stage[0]);
}
