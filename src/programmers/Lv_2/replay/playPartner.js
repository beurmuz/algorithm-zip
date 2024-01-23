/**
 * [set, dictionary 문제]
 * - 나올 수 있는 비율들을 구한 뒤, reduce를 활용해 한번에 시소 짝꿍을 구한다.
 */

function solution(weights) {
  const dict = {};

  weights.sort((a, b) => b - a);
  return weights.reduce((count, w) => {
    if (dict[w]) count += dict[w]; // 1 : 1
    if (dict[(w * 3) / 2]) count += dict[(w * 3) / 2]; // 2 : 3
    if (dict[w * 2]) count += dict[w * 2]; // 2 : 4
    if (dict[(w * 4) / 3]) count += dict[(w * 4) / 3]; // 3 : 4

    // 사전 갱신
    dict[w] = (dict[w] || 0) + 1; // dict[w]가 있으면 dict[w]값에 +1을, 없다면 0에 +1한 값을 dict[w]에 갱신한다.
    // dict[w] = (dict[w] ? dict[w] + 1 : 1);
    return count;
  }, 0);
}
