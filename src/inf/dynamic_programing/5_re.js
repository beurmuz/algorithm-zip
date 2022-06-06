'use strict';

function solution(m, arr) {
    let answer = 0;
    let dy = Array.from({ length: m+1 }, () => 0);

    for(let i = 0; i < arr.length; i++) {
        let score = arr[i][0];
        let time = arr[i][1];

        for(let j = m; j >= time; j--) {
            dy[j] = Math.max(dy[j], dy[j-time]+score);
        }
    }
    answer = dy[m];
    return answer;
}

let arr = [[10, 5], [25, 12], [15, 8], [6, 3], [7, 4]]; // [점수, 시간]
console.log(solution(20, arr));

// 중복을 방지하기 위해 뒤에서부터 앞으로 반복하기