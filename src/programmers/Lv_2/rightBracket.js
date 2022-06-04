// 처음에 푼 방법
/* 
    stack에 push하고 pop해서 풀었으나 시간초과 문제로 효율성이 낮게 나옴
*/
function solution(s){
    let answer = false;
    let stack = [];
    if(s[0] === ')') return false;
    for(let x of s) {
        if(x === '(') stack.push('(');
        else stack.pop();
    }
}


// 다시 푼 방법
/*
    stack을 이용하지 않고 단순히 for문에서 '('가 나오면 count를 1 증가하고, ')'가 나오면 count를 1 감소시킴
    s의 시작이 ')'인 경우 count가 -1이 되므로 이 경우를 예외로 잡아줌
    -> 채점 통과함
*/
function solution(s){
    let answer = false;
    let count = 0;
    for(let x of s) {
        if(count < 0) return false;
        if(x === '(') count++;
        else if(x === ')')count--;
    }
    if(count === 0) return true;
    return answer;
}