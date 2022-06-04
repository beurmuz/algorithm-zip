'use strict';

function solution(n, arr) {
    let answer = 0;
    let dy = Array.from({ length: n }, () => 0);

    dy[0] = 1;
    for(let i = 1; i < n; i++) {
        let max = 0;
        for(let j = i-1; j >= 0; j--) {
            if(arr[j] < arr[i] && dy[j] > max) { // 앞에 항이 될 수 있는 조건과 
                max = dy[j];
            }
        }
        dy[i] = max + 1;
        answer = Math.max(answer, dy[i]);
    }
    return answer;
}

let arr = [5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(8, arr));

/*
    dy[i]는 arr의 i번째 숫자가 증가수열의 마지막 숫자(항)라 생각하고 풀기
    - ex)dy[3]은 arr[3]에 있는 8이 내가 만드는 증가수열의 마지막 항이 된다는 것
        - 그러면 8뒤에 있는, arr[3] 이후의 값들은 탐색할 필요가 없음
        - i = n일때 j = i-1 ~ 0까지 탐색하며 n자리에 있는 값보다 작은 값들이 몇개 있는지 찾기
*/