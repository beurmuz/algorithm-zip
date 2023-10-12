/**
 * arr.map은 arr의 길이만큼 배열을 return한다.
 * arr.filter는 조건에 맞는 경우만 return하므로, 해당 문제에서는 filter를 사용해야한다.
 */

function solution(arr) {
  return arr.filter((num, idx) => num !== arr[idx + 1]);
}
