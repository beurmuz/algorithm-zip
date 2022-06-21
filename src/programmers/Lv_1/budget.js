// 내 풀이
/*
    가장 많이 지원하는 방법이니 우선 sort를 해주어야 함
    -> 지원받고자하는 금액이 적을수록 많은 부서를 지원해줄 수 있기 때문

    budget이 department보다 작아지면 지원할 수 없으므로 반복문을 종료
    budget에서 각 부서의 지원금액을 빼면 됨
*/
function solution(d, budget) {
    let answer = 0;
    d.sort((a, b) => a-b);
    for(let department of d) {
        if(budget < department) break;
        answer += 1;
        budget -= department;
    }
    return answer;
}


// reduce 이용하기
function solution(d, budget) {
    return d.sort((a, b) => a - b).reduce((count, price) => {
        return count + ((budget -= price) >= 0);
    }, 0);
}