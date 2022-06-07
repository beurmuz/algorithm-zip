// 내 풀이
function solution(absolutes, signs) {
    let answer = 0;
    for(let i = 0; i < absolutes.length; i++) {
        if(signs[i] === false) answer -= absolutes[i];
        else answer += absolutes[i];
    }
    return answer;
}


// 내 풀이에서 for문 내부를 삼항연산자로 간단히 바꿀수도 있다
// signs[i]가 true면 answer += absolutes[i]를, false면 answer -= absolutes[i]를!
signs[i] ? answer += absolutes[i] : answer -= absolutes[i]; 


// 다른 풀이 - reduce 사용하기
// acc는 누적합, v는 값, i는 index. true인지 false인지에 따라 *1 or +-1해주기
function solution(absolutes, signs) {
    return absolutes.reduce((acc, v, i) => acc += v * (signs[i] ? 1 : -1), 0)
}