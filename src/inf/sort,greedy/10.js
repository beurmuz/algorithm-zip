'use strict';

function solution(target, arr){
    let answer = 0;
    arr.sort((a,b) => a-b);

    let left = 0;
    let right = arr.length-1;
    while(left <= right) { // 조건식이 참인 동안에만
        let pivot = parseInt((left + right)/2);
        if(arr[pivot] === target) {
            answer = pivot + 1;
            break; // 반복문 빠져나가기
        } else if(arr[pivot] > target) {
            right = pivot - 1;
        } else {
            left = pivot + 1;
        }
    }
    return answer;
}

let arr=[23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));

/*
    1. 우선 arr 정렬하기
    2. 배열의 왼쪽 끝(left)과 오른쪽 끝(right) 값을 저장할 변수 선언
    3. left가 right보다 작거나 같은 경우에만 반복문 반복
    4. pivot은 left + right를 2로 나눈 것으로
        - 만약 arr[pivot]이 target과 같은 경우 answer에 현재 pivot + 1을 해줌 (+1을 하는 이유는 문제에서 몇 번째냐고 물었기 때문)
        - 만약 arr[pivot]이 target보다 크면 right에 pivot -1을 저장해서 탐색 구간을 줄여줌 (중간값 -1)
        - 만약 arr[pivot]이 target보다 작으면 left에 pivot + 1을 저장해서 탐색 구간을 줄임 (중간값 +1)
*/