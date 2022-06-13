// 내가 푼 풀이
// - 원래 while문으로 문자열의 크기 > 0인 동안 같은 문자를 찾아 제거하려 했으나 갑자기 stack으로 풀 수 있을 것 같아 풀어봄
function solution(s)
{
    let answer = 0;
    let stack = [];

    for(let i = 0; i < s.length; i++) {
        if(stack[stack.length-1] === s[i]) {
            stack.pop();
        } else stack.push(s[i]);
    }
    answer = stack.length === 0 ? 1 : 0;
    return answer;
}