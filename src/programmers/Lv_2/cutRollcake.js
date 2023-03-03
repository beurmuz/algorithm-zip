"use strict";

/**
 * 처음에 푼 풀이
 * - 답은 맞으나 시간 초과가 발생한다.
 * - for문 안에서 slice를 하게되면 시간 복잡도가 O(n^2)가 된다.
 *    - set과 slice 둘다 O(n)이 소요되기 때문이다.
 * - topping이 최대 1000000개라는 제한 조건이 있기에, 이 문제는 반복문의 중첩이 1회 이상으로 넘어가면 안된다.
 */
function solution(topping) {
  let answer = 0;
  for (let pivot = 1; pivot < topping.length; pivot++) {
    const aSet = new Set(topping.slice(0, pivot));
    const bSet = new Set(topping.slice(pivot, topping.length));
    if (aSet.size === bSet.size) answer++;
  }
  return answer;
}

/**
 * 다시 푼 풀이
 * - 처음에 푼 풀이보다 시간은 좀 줄었으나, 똑같이 시간 초과가 발생한다.
 */
function solution(topping) {
  let answer = 0;
  for (let pivot = 1; pivot < topping.length; pivot++) {
    const aSet = new Set();
    const bSet = new Set();
    for (let i = 0; i < pivot; i++) {
      aSet.add(topping[i]);
    }
    for (let j = pivot; j < topping.length; j++) {
      bSet.add(topping[j]);
    }
    if (aSet.size === bSet.size) answer++;
  }
  return answer;
}

/**
 * 최종 풀이
 */
function solution(topping) {
  const left = {}; // 왼쪽은 빈 set으로 만들어놓고,
  const right = topping.reduce((acc, v) => {
    // 오른쪽에 모든 값이 들어있는 상태로 시작한다.
    acc[v] = (acc[v] ?? 0) + 1;
    return acc;
  }, {});

  let leftCount = 0; // 좌측의 토핑 종류 개수를 count한다.
  let rightCount = new Set(topping).size; // 우측의 토핑 종류 개수를 count한다.
  let answer = 0;

  for (let i = 0; i < topping.length; i++) {
    // topping의 길이만큼 순회한다.
    if (!left[topping[i]]) leftCount++; // 만약 left에 현재 값인 topping[i]가 없다면, left에 새로운 토핑이 들어온 것이므로 leftCount를 1 증가시킨다.
    left[topping[i]] = (left[topping[i]] ?? 0) + 1; // left에 topping[i]를 넣거나, 있다면 기존 값 +1을 해준다.
    right[topping[i]]--; // right의 topping[i]가 하나 빠진 것이므로 해당 값을 -1 해준다.

    if (!right[topping[i]]) rightCount--; // 만약 right에 topping[i]가 없다면, 해당 토핑이 빠진 것이므로 rightCount를 1 감소시킨다.

    if (leftCount === rightCount) answer++; // 만약 leftCount와 rightCount가 같다면, 토핑 수가 같은 것이므로 answer의 값을 1 증가시킨다.
  }
  return answer;
}
