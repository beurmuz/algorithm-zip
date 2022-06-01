'use strict';

function solution() {
    let answer = '';
    let queue = [];
    queue.push(1); // 루트 노드이니 넣어주기
    while(queue.length) { // 7까지 다 빠지고나면 0이 되어 멈춤
        let v = queue.shift();
        // console.log('---------------------------');
        answer += v + ' ';
        for(let nextVertex of [v*2, v*2+1]) {
            if(nextVertex > 7) continue; // nextVertex가 7보다 크면 안하고 그냥 건너뜀
            queue.push(nextVertex);
            // console.log(queue);
        }
    }
    return answer;
}

console.log(solution());

/*
    너비우선탐색(BFS) 구현하기!
*/