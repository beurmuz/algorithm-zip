/**
 * ✅ Math.sqrt(num): num의 제곱근을 구하는 함수
 * ✅ Math.pow(num, 2): num을 제곱(2)하는 함수
 *
 * ✅ 소수의 판별 방법: 소수 % 1을 하면 나머지가 0이 아닌 소수점 이하의 수가 나온다.
 */

function solution(n) {
  return Math.sqrt(n) % 1 === 0 ? (Math.sqrt(n) + 1) ** 2 : -1;
}
