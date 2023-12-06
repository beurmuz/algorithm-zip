/**
 * [완전탐색, 재귀]
 * - 최소 거리를 구하랬으니 bfs를 이용하면 될 것 같았으나, 입력값의 최대 크기가 10^8이어서 완탐으로 풀었다.
 */

function solution(storey) {
  if (storey < 5) return storey; // 1, 10^c 버튼을 누를 수 있으니 5 미만은 storey 수와 같다.

  let rest = storey % 10; // 10으로 나눈 나머지
  let m = (storey - rest) / 10; // storey를 10의 배수로 맞춰준다.

  return Math.min(rest + solution(m), 10 - rest + solution(m + 1)); // 최솟값을 찾는다.
}
