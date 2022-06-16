// 제출한 코드
/*
    처음에 풀었을 땐 테스트케이스 4번에서 실패가 떴음
    -> 알고보니 '작거나 같은' 경우가 아닌 '같은' 경우에만 0을 return하게 해줬었음
*/
function solution(price, money, count) {
    let totalPrice = 0;
    for(let i = 1; i <= count; i++) {
        totalPrice += price*i;
    }
    return totalPrice <= money ? 0 : Math.abs(totalPrice-money);
}



// 가우스 공식 이용하는 법
/*
    1과 최대값을 더해서 총 개수의 절반을 곱해준다!
*/
function solution(price, money, count) {
    const tmp = price * count * (count + 1) / 2 - money;
    return tmp > 0 ? tmp : 0;
}