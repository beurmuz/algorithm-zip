// 가장 처음에 풀었던 풀이
/*
    코드를 돌릴 때 마다 2번에서 에러가 발생하는데, 그 이유는 다음과 같다고 한다.
    : isNaN(string)의 경우 string -> number 변경하고 변경된 값이 NaN 일 경우 true 아닐 경우 false를 반환함
    즉 string 진법 표기에 해당하거나 지수 표기법에 해당 할 경우 그 값이 10진수로 변환되어 NaN이 아니게 되므로 숫자가 맞다는 판별이 나오게 됨

    실제로 "a234"*1을 하면 NaN값이 나오고, 코드를 돌릴때마다 이를 true로 인식했음
*/
function solution(s) {
    if((s.length === 4 || s.length === 6) && typeof(s*1) === 'number') return true;
    else return false;
}


// 제출한 풀이
/*
    그러나 얘는 테스트케이스를 돌리면 에러가 발생함 -> 9번에서 왜 에러가 나는교?
    -> 찾아보니 지수형식 "1e22"를 넣으면 문제가 된다고 한다. 
*/
function solution(s) {
    if (s.length !== 4 && s.length !== 6) {
        return false;
    }
    
    return isNaN(s) ? false : true;
}


// 통과한 풀이
function solution(s) {
    return s.search(/\D/g) < 0 && (s.length === 4 || s.length === 6);
}


// 엄청 멋있는 코드
/*
    정규식 공부하자~
*/
function alpha_string46(s){
    var regex = /^\d{6}$|^\d{4}$/;
    return regex.test(s);
}