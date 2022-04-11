function solution(busTimeTable, pivotTime) {
    let answer = [];
    pivotTime = pivotTime.split(':').map(n => parseInt(n, 10));
    pivotTime = pivotTime[0]*60+pivotTime[1];

    for(let i in busTimeTable) {
        let time = busTimeTable[i].split(':').map(n => parseInt(n, 10));
        time = time[0]*60+time[1];
        if(time < pivotTime) {
            answer.push("지나갔습니다.");
        } else if(time === pivotTime) {
            answer.push("잠시후 도착입니다.");
        } else {
            let hour = parseInt((time-pivotTime) / 60, 10);
            let minute =  parseInt((time-pivotTime) % 60);
            // answer.push(`${hour}:${minute}`);
            answer.push(String(hour).padStart(2,0) + '시간 ' + String(minute).padStart(2,0) + '분');
        }
    }
    return answer;
}

const busTimeTable = ["12:30", "13:20", "14:13"];
const pivotTime = "12:40";

console.log(solution(busTimeTable, pivotTime));