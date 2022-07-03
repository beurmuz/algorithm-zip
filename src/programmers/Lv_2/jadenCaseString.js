// 내 풀이
/*
    정확도 44..
    실행하면 돌아가긴하지만 히든테케에서 걸림
*/
function solution(s) {
    const sSplit = s.toLowerCase().split(' ');
    let answer = sSplit.map((a) => {
        let x = a.split('');
        x[0] = x[0] === ' ' ? ' ' : x[0].toUpperCase();
        return x.join('');
    }).join(' ');
    return answer;
}


// 다른 풀이
/*
    charAt(0)을 사용한 방법
    substring(1)은 해당 문자열 1번인덱스부터 끝까지를 의미함
*/
function solution(s) {
    let answer = s.split(' ').map((word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()).join(' ')
    //word[0]이 빈 문자열이면 undefined를,  word.charAt(0)은 빈 문자열이면 빈 문자열을 반환한다.
    return answer;
}