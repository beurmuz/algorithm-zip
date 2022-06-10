// 내 풀이
/*
    처음엔 switch문을 썼더니 이미 해당 월이 지나지 않았음에도 해당 월에 있는 모든 일수가 더해져 결과값이 제대로 나오지 않았음
    -> 그래서 반복문으로 직전 월까지 더해준 후, 남은 일수를 더해주는 방식으로 바꿈
*/
function solution(a, b) {
    let count = b;
    let weekList = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    for(let i = 1; i < a; i++) count += month[i];
    return weekList[(count+4)%7]; // 금요일이 1일이니 +4해줌
}


// getDay()객체로 풀기 - 이게 제일 깔끔하다..!
function getDayName(a,b){
    let arr = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    let date = new Date(`2016-${a}-${b}`);
    let day = date.getDay()
    return arr[day];
}