'use strict';

function solution(n, f) { // f는 누적값
    let answer;
    let flag = 0;
    let memoizationTable = Array.from(Array(11), () => Array(11).fill(0));
    let checkArray = Array.from({length: n+1}, () => 0); // ch, 순열을 돌리기 위한 체크배열
    let permutationArray = Array.from({length: n}, () => 0); // p, 순열 저장 // permutationArray = [];
    let combinationArray = Array.from({length: n}, () => 0); // b, 조합 수 미리 저장해둔 배열. n이 4면 (1, 3, 3, 1)

    function combination(n, r) {
        if(memoizationTable[n][r] > 0) return memoizationTable[n][r];
        if(n === r || r === 0) return 1;
        else return memoizationTable[n][r] = combination(n-1, r-1) + combination(n-1, r);
    }

    function dfs(L, sum) { // sum은 final값, 즉 누적값. dfs로 순열을 구함
        if(flag) return;
        // if(L === n) console.log(permutationArray); // 순열 만들어지는거 확인해보기
        if(L === n && sum === f) { 
            answer = permutationArray.slice(); // 깊은 복사
            flag = 1;
        } else {
            for(let i = 1; i <= n; i++) { // 순열 만들기
                if(checkArray[i] === 0) {
                    checkArray[i] = 1 ;
                    permutationArray[L] = i; // permutationArray.push(i);
                    // console.log(permutationArray);
                    dfs(L+1, sum+(combinationArray[L]*permutationArray[L])); // 조합*순열
                    checkArray[i] = 0;
                    // permutationArray.pop();
                }
            }
        }
    }
    for(let i = 0; i < n; i++) { // 3C0, 3C1, 3C2, 3C3 ... 
        combinationArray[i] = combination(n-1, i);
        // console.log(combinationArray);
    }
    
    dfs(0, 0);
    return answer;
}

console.log(solution(4, 16));

/*
    각 자리에 1, 3, 3, 1을 곱해서 모두 더한 값이 16이 나오는 경우를 찾아야 함
    -> 때문에 배열 2개를 생성해 비교하고, 또 다른 배열에 값을 저장해놓고 있어야 함
*/