'use strict';

function solution(arr, change) {
    let answer = Number.MAX_SAFE_INTEGER;
    let n = arr.length;

    function dfs(L, sum) {
        if(sum > change) return;
        if(L >= answer) return;
        if(sum === change) { // sum이 잔돈 값과 같으면
            console.log(L, sum);
            answer = Math.min(answer, L);
        } else {
            for(let i = 0; i < n; i++) {
                dfs(L+1, sum + arr[i]);
            }
        }
    }
    dfs(0, 0);
    return answer;
}

let arr = [1, 2, 5];
console.log(solution(arr, 15));

/*
    - 중복순열이랑 똑같이 풀면 되고, 동전의 수(L)가 가장 적은 것 구하기
    - L은 tree의 level이지만 여기서 level은 동전의 수와 같음 (트리 그려보면 안다)
    - 동전의 합이 change(15)와 같아질 때까지 그 수를 구하면 됨
        - sum이 change보다 큰 경우 return
        - L이 answer보다 크거나 같은 경우는 바로 return
    - 각 자리마다 올 수 있는 동전은 1, 2, 5로 총 3가지이니 3번 반복하기
*/