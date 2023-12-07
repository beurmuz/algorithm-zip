/**
 * [정렬 문제]
 * 쇠막대기랑 레이저 문제와 비슷한 것 같다.
 */

function solution(targets) {
  targets.sort((a, b) => b[0] - a[0]); // 내림차순 정렬

  let answer = 1;
  let range = targets[0][0];

  for (let i = 1; i < targets.length; i++) {
    const [start, end] = targets[i];
    if (end <= range) {
      range = start; // 범위 밖이면 새로 갱신해주어야한다.
      answer++;
    }
  }

  return answer;
}
