'use strict';

function solution(n, arr) {
    arr.sort((a, b) => a-b);
    let answer = 0; // 총 팀 수
    let team = 0; // 팀에 속한 총 모험가 수

    arr.forEach((level) => {
        team++;
        if(team >= level) {
            answer++;
            team = 0;
        }
    });
    return answer;
}

const adventureTeam = [2, 3, 1, 2, 2];
console.log(solution(5, adventureTeam));

/*
    처음엔 중첩 반복문으로 team이 level보다 크거나 같으면서 현재 팀원의 모험도와 team수가 같은 경우에만 총 팀원수를 증가시켰었음.
    그러나 그렇게 할 필요가 없는 것 같아 반복문을 하나 빼고 다시 코드를 작성함
*/