'use strict';

function solution(arr){
    let answer=arr; // 얕은 복사 (주소만 복사함(answer가 arr을 가리킴))
    let sum = arr.reduce((a, b)=> a+b,0); // a에 현재 값(b)을 누적함 
    for(let i = 0; i < 8; i++) {
        for(let j = i+1; j < 9; j ++) {
            if((sum - (arr[i] + arr[j])) === 100) {
                arr.splice(j,1);
                arr.splice(j,1);
            }
        }
    }
    return answer; // answer가 arr을 가리키고 있으므로 상관없음
}

let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));