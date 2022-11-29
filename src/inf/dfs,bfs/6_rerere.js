"use strict";

function solution(s, e) {
  let checked = Array.from({ length: 10001 }, () => 0);
  let distance = Array.from({ length: 10001 }, () => 0);
  let queue = [];

  // 큐에 넣기전에 먼저 체크하기
  checked[s] = 1;
  queue.push(s);

  while (queue.length) {
    let v = queue.shift(); // 하나 빼고

    for (let nextVertex of [v + 1, v - 1, v + 5]) {
      if (nextVertex === e) return distance[v] + 1;
      if (nextVertex >= 0 && nextVertex <= 10001 && checked[nextVertex] === 0) {
        checked[nextVertex] = 1;
        queue.push(nextVertex);
        distance[nextVertex] = distance[v] + 1;
      }
    }
  }
}

console.log(solution(5, 14));
