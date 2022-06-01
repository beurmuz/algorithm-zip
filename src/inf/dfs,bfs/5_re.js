'use strict';

function solution() {
    let answer = '';
    let queue = [];

    queue.push(1); // 루트 노드 먼저 넣어놓고 시작
    while(queue.length) {
        let v = queue.shift(); // 큐의 맨 앞 노드 하나를 빼고
        answer += v + ' '; // answer에 넣어줌

        for(let nextVertex of [v*2, v*2+1]) {
            if(nextVertex > 7) continue; // 7보다 크면 아래의 코드는 전부 건너뜀
            queue.push(nextVertex);
        }
    }
    return answer;
}

console.log(solution());

/*
    - BFS는 queue를 이용함    
*/