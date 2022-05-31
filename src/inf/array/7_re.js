'use strict';

function solution(arr) {
    let answer = 0;
    let n = arr.length;
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];

    for(let i = 0; i < n; i++) { // 바깥배열 i행, j열
        for(let j = 0; j < n; j++) { // 안쪽 배열
            let flag = 1;
            for(let k = 0; k < dx.length; k++) {
                let nx = i + dx[k];
                let ny = j + dy[k];
                if(nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] >= arr[i][j]) { // 각 범위내에서 arr[i][j]보다 큰 값이 있으면
                    flag = 0;
                    break; // 봉우리가 아님
                }
            }
            if(flag) answer++;
        }
    }
    return answer;
}

let arr=[[5, 3, 7, 2, 3], 
         [3, 7, 1, 6, 1],
         [7, 2, 5, 3, 4],
         [4, 3, 6, 4, 1],
         [8, 7, 3, 5, 2]];

console.log(solution(arr));

/*
    - n*n 격자판
    - 봉우리로부터 가장자리는 모두 작다고 생각하기
    - 봉우리를 기준으로 주변 노드를 검사해야하므로 dx, dy 이용하기
    - 각 범위내에서 arr[i][j]보다 큰 값이 있으면 해당 지점은 봉우리가 아님
*/