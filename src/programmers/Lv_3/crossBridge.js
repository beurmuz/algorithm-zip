/**
 * [이분 탐색]
 * - 효율성과 정확성 둘다 잡으려면 시간을 최적화하는 방법을 생각해보자.
 * - 완전탐색으로 2중 for문을 활용해 푸는 방법도 있지만, stones의 최대 입력값의 크기가 2 * 10^5임을 고려하면 시간복잡도가 O(n) 이하가 되도록 설계해야 한다.
 * - 0인 돌의 개수가 k와 같다면, 이는 건너뛸 수 없음을 의미한다.
 * - stones 배열의 각 원소들의 값은 최소 1이상, 최대 2억 이하가 된다.
 *   - 이는 징검다리를 건널 수 있는 최소 인원이 최소 1이상, 최대 2억임을 의미한다. (1명이 건널 때 돌의 값 1이 감소하기 때문)
 *   => ✅ 여기서 최소, 최댓값이 정해져있고 이 사이에서 문제에서 요구하는 적정 값을 찾아야 한다는 것을 알 수 있다.
 *   => ⭐️ 즉 '이분탐색'을 활용해야 함을 캐치할 수 있다. (이분탐색의 시간 복잡도는 O(logN))
 *
 * - mid는 건너갈 수 있는 최대 니니즈 친구들 수를 의미한다.
 * - 해당 친구들이 모두 돌을 건너가기 위해서는 0이 되는 돌이 k번 연속되지 않아야한다.
 * - 만약 0이 되는 돌이 k번 연속되는 경우라면, 최댓값의 범위를 mid보다 작게 설정하여 다시 이분탐색을 진행해야 한다.
 * - 만약 k번보다 돌의 개수가 작은 경우, 더 많은 니니즈 친구들이 징검다리를 건널 수 있다는 것이다.
 */

function checkStones(stones, mid, k) {
  let zeroCount = 0;

  for (let i = 0; i < stones.length; i++) {
    if (stones[i] < mid) {
      // 지나갈 수 없는 경우
      // stones[i] - mid < 0 => 마지막 사람이 지나가기 전에 이미 돌이 0이 되었다는 것
      zeroCount += 1;
    } else {
      // 지나갈 수 있는 경우 => 지금까지의 연속된 0 카운트는 의미가 없어짐
      zeroCount = 0;
    }

    if (zeroCount >= k) {
      return false;
    }
  }
  return true;
}

function solution(stones, k) {
  let [lt, rt] = [1, 200000000];

  while (lt < rt - 1) {
    let mid = Math.floor((lt + rt) / 2);

    if (checkStones(stones, mid, k)) lt = mid;
    else rt = mid;
  }
  return lt;
}
