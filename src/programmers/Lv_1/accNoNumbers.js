// 풀이 - javascript 내장함수 includes 쓰기
function solution(numbers) {
    let answer = 0;
    for(let i = 0; i < 10; i++) {
        if(!numbers.includes(i)) answer += i;
    }
    return answer;
}

// 풀이2 - 전체 합이 항상 45이므로 45 - numbers의 총합
function solution(numbers) {
    return 45 - numbers.reduce((acc, value) => acc + value, 0);
}