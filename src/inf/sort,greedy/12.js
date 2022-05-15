'use strict';

function count(stable, dist) {
    let count = 1; 
    let ep = stable[0]; // 가장 최근에 들어간 말의 위치
    for(let i = 1; i < stable.length; i++) {
        if(stable[i] - ep >= dist) {
            count++;
            ep = stable[i]; // 여기에 말을 배치함
        }
    }
    return count;
}

function solution(c, stable){
    let answer;
    stable.sort((a, b) => a-b);
    let lt = 1; // 두 말 사이의 최소 거리. stable[0]의 1이 아님
    let rt = stable[stable.length - 1]; // 두 말 사이의 최대 거리
    while(lt <= rt) {
        let mid = parseInt((lt+rt)/2);
        if(count(stable, mid) >= c) {
            answer = mid;
            lt = mid + 1;
        } else {
            rt = mid - 1;
        }
    }
    return answer;
}

let arr=[1, 2, 8, 4, 9];
console.log(solution(3, arr));

/*
    1. array 정렬하기
    2. lt과 rt 구해놓고
    3. mid값 계산
*/