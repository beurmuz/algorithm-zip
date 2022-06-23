// 내 풀이
/*
    filter로 한번에 조건에 해당하는 배열만 리턴받음
*/
function solution(arr, divisor) {
    let answer = arr.filter((element) => element % divisor === 0).sort((a, b) => a-b);
    if(answer.length === 0) return [-1];
    return answer;
}


// 더 간결하게 바꿔보기
function solution(arr, divisor) {
    let answer = arr.filter((element) => element % divisor === 0).sort((a, b) => a-b);
    return answer.length === 0 ? [-1] : answer;
}