// 내 풀이 - a,b를 배열에 넣고 Math.min(), Math.max()를 이용해 반복문 돌림
function solution(a, b) {
    let answer = 0;
    let arr = [a, b];
    for(let i = Math.min(...arr); i <= Math.max(...arr); i++) {
        answer += i;
    }
    return answer;
}


// 내 코드 더 압축하기 - 배열쓰지않고 하는 법
function solution(a, b) {
    let answer = 0;
    for(let i = Math.min(a, b); i <= Math.max(a, b); i++) { // 바로 a, b넣어주면 됨
        answer += i;
    }
    return answer;
}


// 가우스 공식 이용하기
function solution(a, b){
    var result = 0;
    return (a+b)*(Math.abs(b-a)+1)/2;
}