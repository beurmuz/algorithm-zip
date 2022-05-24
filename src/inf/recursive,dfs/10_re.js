'use strict';

function solution(arr, m) {
    let answer = [];
    let n = arr.length;
    let checkArray = Array.from({length: n}, () => 0);
    let tmp = Array.from({length: m}, () => 0);
    
    function dfs(L) {
        if(L === m) {
            answer.push(tmp.slice());
        } else {
            for(let i = 0; i < n; i++) { // 첫번째 자리에 올 수 있는 경우의 수는 3가지
                if(checkArray[i] === 0) { // checkArray[i]가 0이면 사용할 수 있음
                    checkArray[i] = 1; // 1로 체크를 걸어주고
                    tmp[L] = arr[i]; // arr[i]번째 원소를 넣어줌
                    dfs(L+1); // 다음원소로 넘어감
                    checkArray[i] = 0; // 이 지점은 back해서 온거니 기존에 체크해준 걸 0으로 바꿔주어야 함
                }
            }
        }
    }
    dfs(0);
    return answer;
}

let arr = [3, 6, 9];
console.log(solution(arr, 2));

/*
    순열과 조합은 외우다시피 해야함!
    - 체크 배열, tmp배열을 추가로 만들어야 함
    - 체크 배열을 통해 중복을 검사
        - 체크 배열의 해당 값이 1이면 체크(사용)된 것이고, 0이면 사용할 수 있는 것을 의미함
*/