"use strict";

// 1. distance 배열 사용하기
// function solution(s, e) {
//   let checked = Array.from({ length: 10001 }, () => 0);
//   let distance = Array.from({ length: 10001 }, () => 0);
//   let queue = [];
//   queue.push(s); // 항상 출발 지점을 queue에 먼저 넣고 시작!
//   checked[s] = 1; // 현수의 출발 지점을 방문체크하기

//   while (queue.length) {
//     let v = queue.shift(); // 방문한 노드 빼기

//     for (let nv of [v - 1, v + 1, v + 5]) {
//       if (nv === e) return distance[v] + 1;
//       if (nv > 0 && nv <= 10000 && checked[nv] === 0) {
//         // nv로 갈 수 있다면
//         queue.push(nv);
//         checked[nv] = 1; // 방문 표시
//         distance[nv] = distance[v] + 1; // 현재의 레벨에서 +1 한값
//       }
//     }
//   }
// }

// 2. level로 점프 횟수 세기 (level 1 증가시 점프 1회)
function solution(s, e) {
  let checked = Array.from({ length: 100001 }, () => 0);
  let queue = [];
  queue.push(s); // 출발지점 push하기
  checked[s] = 1; // 방문 표시
  let level = 0; // 레벨 카운트

  while (queue.length) {
    let length = queue.length;

    for (let i = 0; i < length; i++) {
      let v = queue.shift();

      for (let nv of [v - 1, v + 1, v + 5]) {
        if (nv === e) return level + 1;
        if (nv > 0 && nv <= 10000 && checked[nv] === 0) {
          queue.push(nv); // 인접 정점들 넣기
          checked[nv] = 1;
        }
      }
    }
    level++;
  }
}
console.log(solution(5, 14));
