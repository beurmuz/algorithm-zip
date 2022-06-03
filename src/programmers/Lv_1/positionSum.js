function solution(n)
{
    // 방법 1
    // var answer = 0;
    // let nArray = n.toString().split('');
    // for(let x of nArray) {
    //     answer += parseInt(x);
    // }
    // return answer;

    // 방법 2
    return (n+'').split('').reduce((sum, x) => sum + parseInt(x), 0);
}