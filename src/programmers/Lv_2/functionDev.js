// 내 풀이
/*
    반복문에서 조건을 어떻게 걸어주어야 할지 고민이었는데, 생각해보니 max값을 계속 갱신해주면서 비교하면 되는거였음
*/
function solution(progresses, speeds) {
    let answer = [];
    let restDays = [];
    for(let i = 0; i < progresses.length; i++) {
        let day = Math.ceil((100 - progresses[i]) / speeds[i]);
        restDays.push(day);        
    }
    
    let maxDay = restDays[0]
    answer.push(0)
    for(let i = 0; i < restDays.length; i++) {
        if(restDays[i] <= maxDay) {
            answer[answer.length-1] += 1
        } else {
            answer.push(1)
            maxDay = restDays[i]
        }
    }
    return answer;
}



// 다른 풀이
function solution(progresses, speeds) {
    var answer = [];

    while(speeds.length > 0) {
        // 개발
        for(let i in speeds) {
            if(progresses[i] < 100) {
                progresses[i] += speeds[i];
            }
        }

        // 배포
        let deploy_count = 0;
        while(progresses[0] >= 100) {
            progresses.shift();
            speeds.shift();
            deploy_count++;
        }
        if(deploy_count > 0) {
            answer.push(deploy_count);
        }
    }

    return answer;
}