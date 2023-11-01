/**
 * [수학? 구현?]
 * - 문제를 풀 때 항상 while문의 조건 설정이 고민이다..
 */

function solution(n, a, b) {
  let count = 1;

  while (a !== b) {
    a = Math.ceil(a / 2); // 새롭게 갱신하는 a와 b는 이긴 경우 다음으로 가지게 될 번호를 의미한다.
    b = Math.ceil(b / 2);
    if (a === b) break;
    count++;
  }
  return count;
}
