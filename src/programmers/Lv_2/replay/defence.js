/**
 * [총 풀이]
 * - 입력값의 크기는 enemy의 길이에 영향을 받는다. enemy가 최대 10^6이므로, O(n) 이하의 시간복잡도를 갖도록 코드를 설계해야한다.
 *  - 마땅한 풀이 방법이 떠오르지않아 완전탐색을 이용해볼까 했지만, 그럼 O(k)의 시간복잡도가 나온다.
 *  - O(n)이하이면서 완전탐색이 불가능하다면 투포인터? 이분탐색?.. 어떻게 풀지(???)
 *
 * - 풀이를 찾아보니 이분 탐색, 우선순위 큐, 최대힙 등 다양한 방법이 있었다!!!
 * - 또다른 방법은 이분탐색!
 */

/**
 * [이분탐색 풀이]
 * - 복잡하기도 하고 제대로 이해하지 못했다.
 */
function solution(n, k, enemy) {
  let lt = 0,
    rt = enemy.length;

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    if (check(n, k, mid, enemy)) lt = mid + 1;
    else rt = mid - 1;
  }

  return lt - 1;
}

const check = (n, k, mid, enemy) => {
  if (mid <= k) return true;

  let t = enemy.slice(0, mid).sort((a, b) => b - a); // 라운드만큼 끊어서 내림차순을 하면 된다.
  let sum = 0;

  for (let i = k; i < t.length; i++) {
    sum += t[i];
    if (sum > n) return false;
  }
  return true;
};

/**
 * [우선순위큐 풀이]
 */
class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  push(value) {
    const queue = this.queue;
    queue.push(value);
    let index = queue.length - 1;
    let parent = Math.floor((index - 1) / 2);

    while (index > 0 && queue[index] < queue[parent]) {
      [queue[index], queue[parent]] = [queue[parent], queue[index]]; // swap
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }

  pop() {
    const queue = this.queue;
    if (queue.length <= 1) {
      return queue.pop();
    }

    const output = queue[0];
    queue[0] = queue.pop();
    let index = 0;

    while (index * 2 + 1 < queue.length) {
      let left = index * 2 + 1;
      let right = index * 2 + 2;
      let next = index;

      if (queue[next] > queue[left]) {
        next = left;
      }
      if (right < queue.length && queue[next] > queue[right]) {
        next = right;
      }
      if (next === index) {
        break;
      }

      [queue[index], queue[next]] = [queue[next], queue[index]];
      index = next;
    }

    return output;
  }
}

function solution(n, k, enemy) {
  let arr = new PriorityQueue();
  let capacity = 0;

  // k번째 까지는 일단 무적권을 쓰면 capacity의 고려 대상에서 제외한다.
  enemy.slice(0, k).forEach((e) => arr.push(e));

  for (let i = k; i < enemy.length; i++) {
    arr.push(enemy[i]);
    let popNum = arr.pop();
    if (popNum + capacity > n) return i;
    capacity += popNum;
  }
  return enemy.length;
}
