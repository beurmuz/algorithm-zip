/**
 * []
 * - 입력값의 크기는 enemy의 길이에 영향을 받는다. enemy가 최대 10^6이므로, O(n) 이하의 시간복잡도를 갖도록 코드를 설계해야한다.
 *  - 마땅한 풀이 방법이 떠오르지않아 완전탐색을 이용해볼까 했지만, 그럼 O(k)의 시간복잡도가 나온다.
 *  - O(n)이하이면서 완전탐색이 불가능하다면 투포인터? 이분탐색?.. 어떻게 풀지(???)
 *
 * - 풀이를 찾아보니 이분 탐색, 우선순위 큐, 힙 등 다양한 방법이 있었다.
 *  => 사실 Heap으로 푸는 문제인 듯 하다.
 *
 * - 또다른 방법은 이분탐색!
 *  - 이분탐색을 하려면 lt, rt, mid가 필요하다.
 */

const solution = (n, k, enemy) => {
  let [lt, rt] = [0, enemy.length];
  let mid = parseInt((lt + rt) / 2);

  while (lt <= rt) {
    const curSlice = enemy.slice(0, mid).sort((a, b) => b - a); // 0 ~ mid까지 자른 후, 내림차순 정렬하기
    let live = k;

    const curEnemy = curSlice.reduce((acc, v) => {
      if (live > 0) {
        live--;
        return acc;
      }
      return acc + v;
    }, 0);
    if (n - curEnemy >= 0 && live >= 0) {
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
    mid = parseInt((lt + rt) / 2);
  }

  return lt - 1;
};
