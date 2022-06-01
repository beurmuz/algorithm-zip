'use strict';

// 1. dis 배열 이용하기
function solution(s, e) {
    let checkArray = Array.from({length: 10001}, () => 0); // 1~ 10001
    let dis = Array.from({length: 10001}, () => 0);
    let queue = [];
    checkArray[s] = 1;
    queue.push(s); // 항상 출발지점은 먼저 queue에 넣어주기

    while(queue.length) {
        let v = queue.shift(); // 방문한 노드를 빼고

        for(let nv of [v-1, v+1, v+5]) {
            if(nv === e) return dis[v] + 1;
            if(nv > 0 && nv <= 10000 && checkArray[nv] === 0) { // nv로 갈 수 있으면
                checkArray[nv] = 1;
                queue.push(nv);
                dis[nv] = dis[v] + 1;
            }
        }
    }
}

// 2. level로 점프 횟수 세는방법
// function solution(s, e) {
//     let checkArray = Array.from({length: 100001}, () => 0);
//     let queue = [];
//     checkArray[s] = 1;
//     queue.push(s); // 출발지점 push하기
//     let L = 0; // 레벨 카운트

//     while(queue.length) {
//        let length = queue.length;

//         for(let i = 0; i < length; i++) {
//             let v = queue.shift();

//             for(let nv of [v-1, v+1, v+5]) {
//                 if(nv === e) return L+1;
//                 if(nv > 0 && nv <= 10000 && checkArray[nv] === 0) {
//                     checkArray[nv] = 1;
//                     queue.push(nv);
//                 }
//             }
//         }
//         L++;
//     }
// }

console.log(solution(5, 14));

/*
    - 레벨 1증가 시 점프 횟수 +1
    - 한 번의 점프로 v-1, v+1, v+6 이동 가능
*/
