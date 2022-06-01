'use strict';

// 1. dis 이용하기
// function solution(s, e) {
//     let checkArray = Array.from({length: 10001}, () => 0); // 1~10000까지의 좌표이니 10001 해주기
//     let dis = Array.from({length: 10001}, () => 0); // 점프 횟수 저장
//     let queue = [];
//     checkArray[s] = 1; // 루트노드는 방문했으니 1로 체크
//     queue.push(s); // 루트 노드(현수의 출발지점)는 먼저 push 해야함

//     while(queue.length) {
//         let v = queue.shift(); // 큐에서 하나를 뺌

//         for(let nv of [v-1, v+1, v+5]) {
//             if(nv === e) return dis[v] + 1;
//             if(nv > 0 && nv <= 10000 && checkArray[nv] === 0) {
//                 checkArray[nv] = 1;
//                 queue.push(nv);
//                 dis[nv] = dis[v] + 1; // 부모노드의 값 +1
//             }
//         }
//     }
// }

// 2. level 이용하기
function solution(s, e) {
    let checkArray = Array.from({length: 10001}, () => 0); // 1~10000까지의 좌표이니 10001 해주기
    let queue = [];
    checkArray[s] = 1; // 루트노드는 방문했으니 1로 체크
    queue.push(s); // 루트 노드(현수의 출발지점)는 먼저 push 해야함
    let L = 0;

    while(queue.length) {
        let length = queue.length;

        for(let i = 0; i < length; i++) {
            let v = queue.shift();

            for(let nv of [v-1, v+1, v+5]) {
                if(nv === e) return L + 1;
                if(nv > 0 && nv <= 10000 && checkArray[nv] === 0) {
                    checkArray[nv] = 1;
                    queue.push(nv);
                }
            }
        }
        L++;
    }
}

console.log(solution(8, 3));

/*
    - 이미 방문한 노드(이미 큐에 들어갔다나온 노드값)에는 굳이 또 방문할 필요가 없음
    - 큐에 값을 넣기 전, 미리 e인지 확인해보는 게 좋음 (if문 순서★)
    - dis 배열을 선언해 자기 부모의 +1(dis[nv] = dis[v] +1)을 해줌으로써 거리를 구할 수 있음 
*/