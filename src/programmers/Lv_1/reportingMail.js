// 내 풀이
/*
    코드도 길고 무려 1시간 30분 동안 풀었지만, 나 자신 칭찬한다 ~!~!
*/
function solution(id_list, report, k) {
    let answer = [];
    let mailList = [];
    
    // 누가 신고했는지 구하기
    let allList = Array.from({length: id_list.length}, () => []);
    report.forEach((x) => {
        let userId, reportedId;
        [user, reported] = x.split(' ');
        if(id_list.includes(reported)) {
            let index = id_list.indexOf(reported);
            if(!allList[index].includes(user)) allList[index].push(user);
        }
    });
    
    // k명 이상에게 신고당한 경우만 체크하기
    allList.forEach((x) => {
        if(x.length >= k) mailList.push(...x);
    });
    
    // 빈 객체 생성
    let obj = {};
    for (let i = 0; i < id_list.length; i++) {
        obj[id_list[i]] = 0;
    }
    
    // 메일받는 횟수 넣기
    mailList.forEach((x) => {
        obj[x] = (obj[x] || 0)+1;
    });

    // obj의 value만 출력하기
    for(x in obj) {
        answer.push(parseInt(obj[x]));
    }
    return answer;
}