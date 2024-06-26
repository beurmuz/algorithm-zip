'use strict';

function solution(arr){  
    let answer=0; // 봉우리의 개수를 count할 변수
    let n=arr.length;
    let dx = [-1, 0, 1, 0]; // 시계방향
    let dy = [0, 1, 0, -1];

    // 지도 정보 i,j
    for(let i = 0; i < n; i++) { 
         for(let j = 0; j < n; j++) {
             let flag = 1; // 신호
             for(let k = 0; k < dx.length; k++) { // dx, dy를 이용한 상하좌우 조사
                 let nx = i+dx[k]; // 가려는 방향의 행 좌표
                 let ny = j+dy[k]; // 가려는 방향의 열 좌표 
                 if(nx>=0 && nx<n && ny>=0 && ny<n && arr[nx][ny] >= arr[i][j]) { //각 범위에 맞게 해서, arr[i][j]보다 큰 값이 있으면
                    flag = 0; // arr[i][j]가 봉우리가 아님을 의미
                    break; // 봉우리가 아니므로 더이상 반복문을 돌 가치가 없으니 빠져나감
                 } 
             } // 다 돌고 나왔는데
             if(flag) { // 만약 flag가 참이다(1이다)
                answer++; // 해당 지점은 봉우리이니 봉우리의 갯수를 +1 해줌
             }
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