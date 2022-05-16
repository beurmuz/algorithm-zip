'use strict';

function count(stable, distance) {
    let count = 1;
    let lastLocation = stable[0];
    for(let i = 0; i < stable.length; i++) {
        if(stable[i] - lastLocation >= distance) {
            count++;
            lastLocation = stable[i];
        }
    }
    return count;
}

function solution(stable, c) {
    let answer = 0;
    stable.sort((a,b) => a-b);
    
    let lt = 1;
    let rt = stable[stable.length-1];

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

let stable = [1, 2, 8, 4, 9];
console.log(solution(stable, 3));

/*
    stable 정렬 후 lt, rt, mid구하기
    - lt는 두 말의 거리가 최소인 경우로 1 (stable[0]의 값이 아님)
    - rt는 두 말의 거리가 최대인 경우로 stable의 맨 마지막 값
*/