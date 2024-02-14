/**
 * [정렬]
 * - 포인트는 내림차순 정렬이 아니라, 오름차순으로 한 뒤 맨 뒤부터 순회함으로써 순회 횟수를 줄인다.
 */

function solution(n, works) {
  let answer = 0;
  // 우선 n이 남은 작업량의 총합보다 크다면 피로도는 0이다.
  if (n > works.reduce((acc, cur) => acc + cur, 0)) return 0;

  // 오름차순 정렬 후 뒤의 큰 값들을 비교한다.
  works.sort((a, b) => a - b);

  while (n) {
    let maxValue = works[works.length - 1];

    for (let i = works.length - 1; i >= 0; i--) {
      if (works[i] >= maxValue) {
        works[i]--;
        n--;
      }
      if (n === 0) break;
    }
  }

  return works.reduce((acc, cur) => acc + cur * cur, 0);
}
