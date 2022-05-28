'use strict';

function solution(n, k, arr, m) { // k: 임의의 정수, m: 정수로 m의 배수를 찾아야 함
    let answer = 0;
    let tmp = Array.from({length: k}, () => 0);

    function dfs(L, s, sum) { // L: Level, s: start number(for문이 도는 start number임), sum: 원소 3개를 뽑는 원소들의 합
        if(L===k) {
            if(sum%m === 0) answer++;
            console.log(sum, tmp);
        } else {
            for(let i = s; i <n; i++) { // i가 인덱스 번호임 !!
                tmp[L] = arr[i]; // arr[i]가 선택되고 아래에서 누적된다고 생각하면 됨
                dfs(L+1, i+1, sum+arr[i]); // 뽑았다!
            }
        }
    }
    dfs(0, 0, 0);
    return answer;
}

let arr = [2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));  