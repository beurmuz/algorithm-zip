/**
 * [수학문제]
 */

function solution(a, b, n) {
  let answer = 0;

  while (n >= a) {
    answer += Math.floor(n / a) * b;
    n = Math.floor(n / a) * b + (n % a); // 받은 병 개수 + 바꾸고 남은 병 개수
  }
  return answer;
}
