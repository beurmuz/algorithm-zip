// 풀이 보고 풀어보기
/*
    못 풀어서 다른 풀이들을 보고 다시 풀어보았다. 
    이 문제에서는 dfs를 이용해 값을 빼는 경우, 더하는 경우를 나눠 생각하면 됨 

*/
let numbers = [1, 1, 1, 1, 1];
let target = 3;
console.log(solution(numbers, target));

function solution(numbers, target) {
    let answer = 0;
    dfs(0,0);
    function dfs(x, value) {
        console.log(value);
        // if (value > 4) 
        if(x < numbers.length) {
            dfs(x+1,value + numbers[x]); // 왼쪽
            dfs(x+1,value - numbers[x]); // 오른쪽 
        } else{
            if(value === target) { // r값이 일치하는 경우에만 answer++
                answer++
            }
        }
    }
    return answer;
}


// 다른 풀이 