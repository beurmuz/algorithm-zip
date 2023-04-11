"use strict";

/*
    피로도 = 야근을 시작한 시점 + Math.pow(남은 일의 작업량)
    N시간 동안 야근 피로도를 최소화하기
    works: 20000, n: 1000000  => O(20000000000)
    
    - 생각한 풀이법
    => 오름차순 정렬을 해서, 큰 수의 값을 1씩 줄여나간다.
    => 남은 일의 작업량들을 서로 같거나 비슷한 값으로 만들어준다.
*/
const solution = (n, works) => {
  if (works.reduce((a, b) => a + b) <= n) return 0;

  let sorted = works.sort((a, b) => a - b);
  while (n) {
    const max = sorted[works.length - 1];

    for (let i = works.length - 1; i >= 0; i--) {
      if (sorted[i] >= max) {
        sorted[i]--; // 그 지점을 1 줄인다.
        n--;
      }
      if (!n) break; // 만약 n == 0이면 탈출
    }
  }
  return sorted.reduce((acc, v) => acc + Math.pow(v, 2), 0);
};
