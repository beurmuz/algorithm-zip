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
  if (works.reduce((acc, v) => acc + v) <= n) return 0; // 배열의 총 합이 n보다 작거나 같은 경우 0을 return

  let sorted = works.sort((a, b) => a - b);
  while (n) {
    const max = sorted[works.length - 1];

    for (let i = works.length - 1; i >= 0; i--) {
      if (sorted[i] >= max) {
        sorted[i]--; // 그 지점을 1 줄인다.
        n--; // n시간 만큼 반복문을 돈다.
      }
      if (!n) break; // 만약 n == 0이면 탈출
    }
  }
  return sorted.reduce((acc, v) => acc + Math.pow(v, 2), 0);
};
