'use strict';

// function solution(arr, n, m, k) {
//     let answer = 0;
//     arr.sort((a, b) => b-a);
//     let first = arr[0];
//     let second = arr[1];
//     while(m > 0) {
//         // first(가장 큰 수)를 k번 더함
//         for(let i = 0; i < k; i++) {
//             answer += first;
//             m -= 1;
//         }
//         // k번 초과를 막기 위해 second(그 다음으로 큰 수)를 한번 더함
//         answer += second;
//         m -= 1;
//     }
//     return answer;
// }

let numArray = [2, 4, 5, 4, 6];
console.log(solution(numArray, 5, 8, 3));


// 수열 이용하기 
/*
    6,6,6,5,6,6,6,5 = 46에서 {6,6,6,5}를 한 세트로 볼 수 있음 => (k+1) = 2m
    (k+1)은 반복되는 수열의 길이가 되고, m/(k+1)가 수열이 반복되는 횟수가 됨 
    여기에 *k를 하면 가장 큰 수가 등장하는 횟수가 됨

    m이 (k+1)로 나누어떨어지지 않는 경우, (m/(k+1)) * k + (m%(k+1))을 해주면 됨
*/
function solution(arr, n, m, k) {
    let answer = 0;
    arr.sort((a,b) => b-a);
    const first = arr[0];
    const second = arr[1];

    // 가장 큰 수가 더해지는 횟수 세기
    let count = Math.floor(m/(k+1))*k;
    count += m%(k+1);
    
    answer += (count * first) + ((m - count) * second);
    return answer;
}