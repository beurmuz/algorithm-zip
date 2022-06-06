'use strict';

function solution(m, arr) {
    let answer = 0;
    let dy = Array.from({ length: m+1 }, ()=> 0);

    for(let i = 0; i < arr.length; i++) {
        let ps = arr[i][0]; // 점수
        let pt = arr[i][1]; // 시간

        for(let j = m; j >= pt; j--) {
            dy[j] = Math.max(dy[j], dy[j-pt]+ps);
        }
    }
    answer = dy[m];
    return answer;
}

let arr = [[10, 5], [25, 12], [15, 8], [6, 3], [7, 4]]; // [점수, 시간]
console.log(solution(20, arr));

/*
    주어진 '분'으로 인덱스 번호가 생성되어야 함 -> dy[20]까지
    - i시간동안 얻을 수 있는 최대 점수를 dy[i]에 기록하기
    다이나믹을 하되 중복을 제거하는 방법? j=m ~ pt[i]로, 뒤에서부터 앞으로 반복하면 중복을 피할 수 있음

*/