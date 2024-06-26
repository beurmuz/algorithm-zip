'use strict';

function solution(arr){  
    let answer=0;
    let rowSum, rowMax = 0;
    let columnSum, columnMax = 0;
    let diagonalSum1 = 0;
    let diagonalSum2 = 0;
    // 각 행의 합 중 최댓값 구하기
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            rowSum += arr[i][j];
            // console.log("arr[" + i + "][" + j + "]의 총합: ", rowSum);
            columnSum += arr[j][i];
            // console.log("arr[" + j + "][" + i + "]의 총합: ", columnSum);
        }
        // console.log("현재 " + i + "행의 합은: ", rowSum);
        if(rowMax<rowSum) {
            rowMax = rowSum;
        }
        rowSum = 0; 
        if(columnMax < columnSum) {
            columnMax = columnSum;
        }
        columnSum = 0;
    }
    console.log("행 최댓값: ", rowMax);
    console.log("열 최댓값: ", columnMax);

    // 대각선 구하기 - 내가 구현한 방법
    // for(let i = 0; i < arr.length; i++) {
    //     for(let j = 4; j >= 0; j--) {
    //         if(i===j) { // 오른쪽 아래방향 대각선
    //             diagonalSum1 += arr[i][j];
    //         }
    //         if(i+j === 4) { // 왼쪽 아래방향 대각선
    //             diagonalSum2 += arr[i][j];
    //             // console.log("i는 "+ i + " j는 " + j);
    //         }
    //     }
    // }
    
    // 왼쪽 아래방향 대각선을 구하는 또 다른 방법
    for(let i = 0; i<arr.length; i++) {
        diagonalSum1 += arr[i][i];
        diagonalSum2 += arr[i][arr.length-i-1];
    }
    console.log("왼쪽 대각선 합: ",diagonalSum1);
    console.log("오른쪽 대각선 합: ", diagonalSum2);
    
    let maxArray = [rowMax, columnMax, diagonalSum1, diagonalSum2];
    answer = Math.max(...maxArray);
    return answer;
}

let arr=[[10, 13, 10, 12, 15], 
         [12, 39, 30, 23, 11],
         [11, 25, 50, 53, 15],
         [19, 27, 29, 37, 27],
         [19, 13, 30, 13, 19]];
console.log(solution(arr));