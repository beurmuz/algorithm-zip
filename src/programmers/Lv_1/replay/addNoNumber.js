/**
 * 0~9까지의 총 합은 45이다.
 * 없는 수의 합을 구하는 방법은, (45 - 있는 수들의 합)을 하면 된다.
 */

function solution(numbers) {
  return 45 - numbers.reduce((num, acc) => num + acc, 0);
}
