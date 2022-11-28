"use strict";

function solution() {
  let answer = [];
  let queue = [];
  queue.push(1); // 루트 노드 먼저 넣어놓고 시작하기

  while (queue.length) {
    let v = queue.shift(); // 맨 앞 노드 하나 빼기 (빼는 순간 방문했다고 침)
    answer.push(v);

    for (let nextVertex of [v * 2, v * 2 + 1]) {
      if (nextVertex > 7) continue; // 7보다 크면 건너뜀
      queue.push(nextVertex); // v의 자식 노드들(v*2, v*2+1)을 queue에 넣어줌
    }
  }
  return answer;
}

console.log(solution());

// 주로 상태트리 문제 (ex. 출발에서 도착지점으로 갈 때의 최단 거리를 구해라)
