/**
 * [완전탐색 + Set]
 * - 중복 제거를 위해 Set이 필요하다.
 */

function solution(numbers) {
  let answer = new Set();
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.add(numbers[i] + numbers[j]);
    }
  }
  return [...answer].sort((a, b) => a - b);
}
