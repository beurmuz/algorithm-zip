'use strict';

function solution(n, k) {
    let answer = 0;
    let queue = Array.from({length: n}, (value, index) => ++index);

    while(queue.length) {
        for(let i = 1; i < k; i++) {
            queue.push(queue.shift());
        }
        queue.shift();
        // console.log(queue);
        if(queue.length === 1) {
            answer = queue.shift();
        }
    }
    return answer;
}

let n = 8;
let k = 3;

console.log(solution(n, k));

/*
    우선 마지막 1개가 남을때까지 계속 반복문을 돌려야함 
    -> while(queue.length). length가 0이되면 자동으로 반복문 탈출
    - k만큼씩 for문을 계속 돌아야함 
    - 원형테이블처럼 이어져있으니 앞의 것을 잘라서 뒤로 붙여주면 됨
        - 특정 k번째를 말하는 왕자는 아예 삭제 (queue.shift())
    - 만약 queue의 길이가 1이면 k를 외치지않은 왕자가 마지막에 남은 것
*/