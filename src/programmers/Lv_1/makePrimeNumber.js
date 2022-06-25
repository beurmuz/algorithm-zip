// 내 풀이
/*
    prime 만들때 ! Math.sqrt를 하는 이유는
    theory > brute_force에서 설명함

    문제를 풀기 전 무조건 for문을 3번쓰는 방법밖에 없을까? 했는데 다른 풀이도 거의 다 for문 3개를 썼다
*/
function solution(nums) {
    let answer = 0;
    
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            for(let k = j+1; k < nums.length; k++) {
                let sum = nums[i] + nums[j] + nums[k];
                if(isPrime(sum)) answer += 1;
            }
        }
    }
    return answer;
}

function isPrime(value) {
    for(let i = 2; i <= Math.sqrt(value); i++) {
        if(value % i === 0) return false;
    }
    return value > 1;
}